# Webhook Handler OAuth Setup

This Next.js app serves as the main entry point for the Shopify app installation.

## 🔧 OAuth Flow

```
1. Shopify sends install request
   → https://webhooks-handler.vercel.app/?shop=test.myshopify.com&hmac=...

2. page.js detects shop + hmac params
   → Redirects to /api/auth?shop=test.myshopify.com&hmac=...

3. /api/auth route initiates OAuth
   → Redirects to https://test.myshopify.com/admin/oauth/authorize?client_id=...

4. Merchant approves installation
   → Shopify redirects to /api/auth/callback?code=...&shop=...

5. /api/auth/callback exchanges code for token
   → Saves token (TODO: implement database)
   → Redirects to https://admin.shopify.com/store/test/apps/social-orange-5/app/grant

6. ✅ Installation complete!
```

## 📁 Files Created

1. **app/page.js** - Homepage with OAuth redirect logic
2. **app/api/auth/route.js** - OAuth initiation endpoint
3. **app/api/auth/callback/route.js** - OAuth callback handler

## ⚙️ Environment Variables Required

Add these to your Vercel project:

```env
SHOPIFY_API_KEY=187f9d311cfe128b19ae69cf375e9ff3
SHOPIFY_API_SECRET=<your-secret-from-partners-dashboard>
SHOPIFY_APP_URL=https://webhooks-handler.vercel.app
SHOPIFY_SCOPES=read_products,write_products,read_customers,read_orders
SHOPIFY_APP_HANDLE=social-orange-5
```

## 🚀 Deployment

1. Set environment variables in Vercel dashboard
2. Push to Git
3. Vercel will auto-deploy
4. Test installation

## ✅ Testing

Visit: `https://webhooks-handler.vercel.app/?shop=YOUR-STORE.myshopify.com`

Should redirect through OAuth and complete installation.

## 🔒 Security Notes

- HMAC validation is handled by checking the signature from Shopify
- State parameter is used for CSRF protection
- Access tokens should be stored securely (implement database storage)

## 📋 Next Steps

1. **Implement token storage**: Currently tokens are logged but not saved
2. **Add HMAC validation**: Verify the HMAC from Shopify install requests
3. **Add session management**: Store and retrieve access tokens per shop
4. **Add error handling**: Better error messages for failed installations
