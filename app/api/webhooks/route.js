import crypto from "crypto";
import { NextResponse } from "next/server";

// Disable automatic body parsing (Next.js App Router already gives you raw body as ArrayBuffer)
export async function POST(req) {
  try {
    const rawBody = await req.arrayBuffer();
    const hmacHeader = req.headers.get("x-shopify-hmac-sha256");

    const hash = crypto
      .createHmac("sha256", 'f3b5f49367ab855e86683dd127299e4e')
      .update(Buffer.from(rawBody))
      .digest("base64");

    if (hash !== hmacHeader) {
      return new NextResponse("Unauthorized – HMAC failed", { status: 401 });
    }

    const topic = req.headers.get("x-shopify-topic");
    const shop = req.headers.get("x-shopify-shop-domain");

    switch (topic) {
      case "app/uninstalled":
        console.log(`🔴 App uninstalled from ${shop}`);
        break;
      case "customers/redact":
      case "customers/data_request":
      case "shop/redact":
        console.log(`📜 GDPR request: ${topic} for ${shop}`);
        break;
      default:
        console.log(`ℹ️ Unhandled topic: ${topic}`);
    }

    return new NextResponse("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}

// Optional: Add a GET for quick testing
export async function GET() {
  return NextResponse.json({ status: "✅ Webhook endpoint is running" });
}
