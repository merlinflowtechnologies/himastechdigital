import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  if (!id || !token) {
    return new NextResponse(renderErrorPage("Invalid Request", "Missing review ID or security token."), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return new NextResponse(
      renderErrorPage(
        "Database Not Configured",
        "Please provide NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment variables to enable 1-click approvals."
      ),
      {
        status: 503,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }

  // Fetch review and verify token
  const { data: review, error: fetchError } = await supabase
    .from("reviews")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError || !review) {
    return new NextResponse(renderErrorPage("Review Not Found", "The requested review could not be located."), {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (review.approval_token !== token) {
    return new NextResponse(
      renderErrorPage("Unauthorized", "The security token provided does not match this review."),
      {
        status: 403,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }

  // Update status to approved
  const { error: updateError } = await supabase
    .from("reviews")
    .update({ status: "approved" })
    .eq("id", id);

  if (updateError) {
    return new NextResponse(
      renderErrorPage("Approval Failed", `Database error: ${updateError.message}`),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }

  return new NextResponse(
    renderSuccessPage(review.name, review.company, review.message, review.rating),
    {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}

function renderSuccessPage(name: string, company: string, message: string, rating: number = 5) {
  const stars = "★".repeat(rating || 5);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Review Approved | Himastech Admin</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #07090e;
      color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      box-sizing: border-box;
      padding: 20px;
    }
    .card {
      background: #0f131c;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 36px 30px;
      max-width: 520px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .badge {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: #34d399;
      font-weight: 700;
      font-size: 13px;
      border-radius: 50px;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    h1 {
      font-size: 26px;
      font-weight: 900;
      margin: 0 0 10px;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    p.sub {
      color: #94a3b8;
      font-size: 15px;
      line-height: 1.5;
      margin: 0 0 24px;
    }
    .review-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px;
      text-align: left;
      margin-bottom: 28px;
    }
    .client-title {
      font-weight: 800;
      color: #f59e0b;
      font-size: 16px;
    }
    .client-meta {
      color: #64748b;
      font-size: 13px;
      margin-bottom: 12px;
    }
    .stars {
      color: #f59e0b;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .review-text {
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.6;
      font-style: italic;
    }
    .btn {
      display: inline-block;
      background: #f59e0b;
      color: #07090e;
      font-weight: 800;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 10px;
      font-size: 15px;
      transition: all 0.2s ease;
      width: 100%;
      box-sizing: border-box;
    }
    .btn:hover {
      background: #fbbf24;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">✓ Live on Website</div>
    <h1>Review Approved!</h1>
    <p class="sub">This endorsement has been approved and is now publicly live on <strong>himastechdigi.com</strong>.</p>
    
    <div class="review-box">
      <div class="stars">${stars}</div>
      <div class="client-title">${escapeHtml(name)}</div>
      <div class="client-meta">${escapeHtml(company)}</div>
      <div class="review-text">"${escapeHtml(message)}"</div>
    </div>

    <a href="https://www.himastechdigi.com/#testimonials" class="btn">View Live on Website →</a>
  </div>
</body>
</html>`;
}

function renderErrorPage(title: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} | Himastech Admin</title>
  <style>
    body {
      margin: 0; padding: 20px;
      background: #07090e; color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex; align-items: center; justify-content: center; min-height: 100vh;
    }
    .card {
      background: #0f131c; border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 16px; padding: 36px 30px; max-width: 480px; width: 100%; text-align: center;
    }
    h1 { color: #ef4444; font-size: 22px; margin: 0 0 12px; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; }
    a { color: #f59e0b; text-decoration: none; font-weight: 700; margin-top: 20px; display: inline-block; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(message)}</p>
    <a href="https://www.himastechdigi.com">Return to Home →</a>
  </div>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
