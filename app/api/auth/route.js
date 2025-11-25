import { NextResponse } from 'next/server';

/**
 * OAuth Initiation Endpoint
 * When Shopify tries to install the app, this redirects to Shopify's OAuth page
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shop = searchParams.get('shop');
  const hmac = searchParams.get('hmac');
  const host = searchParams.get('host');

  console.log('[OAuth] Received install request:', { shop, hmac, host });

  // If no shop parameter, redirect to home
  if (!shop) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Build the OAuth authorization URL
  const shopifyOAuthUrl = `https://${shop}/admin/oauth/authorize`;
  
  const params = new URLSearchParams({
    client_id: process.env.SHOPIFY_API_KEY || '',
    scope: process.env.SHOPIFY_SCOPES || 'read_products,write_products',
    redirect_uri: `${process.env.SHOPIFY_APP_URL}/api/auth/callback`,
    state: Date.now().toString(), // Simple nonce for security
  });

  const authUrl = `${shopifyOAuthUrl}?${params.toString()}`;

  console.log('[OAuth] Redirecting to:', authUrl);

  // Redirect to Shopify OAuth
  return NextResponse.redirect(authUrl);
}
