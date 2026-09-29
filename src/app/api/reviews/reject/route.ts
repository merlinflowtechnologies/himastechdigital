import { NextRequest, NextResponse } from "next/server";
import { verifyReviewPayload } from "@/lib/reviewSigner";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get("data");
  const sig = searchParams.get("sig");

  if (!data || !sig) {
    return new NextResponse("Invalid or expired rejection link.", { status: 400 });
  }

  const review = verifyReviewPayload(data, sig);
  const clientName = review?.name || "Client";
  const companyName = review?.company || "Company";

  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Endorsement Declined | Himastech Digi</title>
      <style>
        body { background-color: #07090e; color: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; text-align: center; }
        .card { background: #0b0e17; border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 40px; max-width: 480px; }
        h1 { font-size: 20px; color: #f87171; margin-bottom: 8px; }
        p { font-size: 14px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Endorsement Declined</h1>
        <p>The submission from <strong>${clientName}</strong> (${companyName}) has been rejected and will not be published to the website.</p>
      </div>
    </body>
    </html>`,
    {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}
