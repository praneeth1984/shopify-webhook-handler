import { NextResponse } from 'next/server';

/**
 * OAuth Callback Endpoint
 * Shopify redirects here after user approves the app installation
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const shop = searchParams.get('shop');
  const state = searchParams.get('state');
  const hmac = searchParams.get('hmac');

  console.log('[OAuth Callback] Received:', { code, shop, state, hmac });

  if (!code || !shop) {
    console.error('[OAuth Callback] Missing required parameters');
    return NextResponse.json(
      { error: 'Missing required parameters' }, 
      { status: 400 }
    );
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.SHOPIFY_API_KEY,
        client_secret: process.env.SHOPIFY_API_SECRET,
        code,
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error('[OAuth Callback] Token exchange failed:', error);
      throw new Error('Failed to get access token');
    }

    const { access_token, scope } = await tokenResponse.json();

    console.log('[OAuth Callback] Access token obtained for shop:', shop);
    console.log('[OAuth Callback] Granted scopes:', scope);

    // TODO: Save access_token to database with shop
    // For now, just log it
    // In production, you would:
    // await saveTokenToDatabase(shop, access_token, scope);

    // Extract shop name without .myshopify.com
    const shopSlug = shop.replace('.myshopify.com', '');

    // Redirect to the app grant page (required by Shopify)
    const grantUrl = `https://admin.shopify.com/store/${shopSlug}/apps/${process.env.SHOPIFY_APP_HANDLE || 'social-orange-5'}/app/grant`;
    
    console.log('[OAuth Callback] Redirecting to grant page:', grantUrl);
    
    return NextResponse.redirect(grantUrl);

  } catch (error) {
    console.error('[OAuth Callback] Error:', error);
    return NextResponse.json(
      { error: 'Authentication failed', details: error.message }, 
      { status: 500 }
    );
  }
}
