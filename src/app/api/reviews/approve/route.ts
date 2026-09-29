import { NextRequest, NextResponse } from "next/server";
import { verifyReviewPayload, ReviewPayload } from "@/lib/reviewSigner";

const REPO_OWNER = "merlinflowtechnologies";
const REPO_NAME = "HimasTechdigi";
const FILE_PATH = "src/data/approvedReviews.json";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get("data");
  const sig = searchParams.get("sig");

  if (!data || !sig) {
    return new NextResponse(
      renderHtml("Invalid Link", "Error", "This approval link is missing security parameters.", false),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  // 1. Verify tamper-proof HMAC signature
  const review = verifyReviewPayload(data, sig);
  if (!review) {
    return new NextResponse(
      renderHtml("Invalid Signature", "Security Check Failed", "This approval link signature is invalid or has been modified.", false),
      { status: 403, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  // 2. If GitHub Token is configured, commit directly to the repository
  if (GITHUB_TOKEN) {
    try {
      const getFileRes = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
        {
          headers: {
            "Authorization": `Bearer ${GITHUB_TOKEN}`,
            "Accept": "application/vnd.github+json",
            "User-Agent": "Himastech-Review-Publisher",
          },
          cache: "no-store",
        }
      );

      if (!getFileRes.ok) {
        throw new Error(`Failed to fetch ${FILE_PATH} from GitHub: ${getFileRes.statusText}`);
      }

      const fileData = await getFileRes.json();
      const existingReviews: any[] = JSON.parse(
        Buffer.from(fileData.content, "base64").toString("utf-8")
      );

      // Check if already approved
      const alreadyApproved = existingReviews.some((r) => r.id === review.id);

      if (!alreadyApproved) {
        const newEntry = {
          id: review.id,
          name: review.name,
          designation: review.designation || "Verified Client",
          company: review.company,
          companyLogo: "/testimonials/logos/merlinflow.svg",
          projectTitle: "Strategic Digital & Sales Growth",
          category: "Technology",
          rating: review.rating || 5,
          date: new Date(review.timestamp || Date.now()).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
          verified: true,
          verifiedBadgeText: "Verified Client • Approved Endorsement",
          testimonial: review.message,
          highlightMetric: "Verified Client Review",
          location: "Hyderabad",
        };

        const updatedReviews = [newEntry, ...existingReviews];

        const commitRes = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
          {
            method: "PUT",
            headers: {
              "Authorization": `Bearer ${GITHUB_TOKEN}`,
              "Accept": "application/vnd.github+json",
              "User-Agent": "Himastech-Review-Publisher",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: `feat: auto-publish review from ${review.name} (${review.company})`,
              content: Buffer.from(JSON.stringify(updatedReviews, null, 2)).toString("base64"),
              sha: fileData.sha,
              branch: "main",
            }),
          }
        );

        if (!commitRes.ok) {
          const commitErr = await commitRes.text();
          throw new Error(`GitHub commit failed: ${commitErr}`);
        }
      }

      return new NextResponse(
        renderHtml(
          "Endorsement Published!",
          "Review Approved & Committed!",
          `The endorsement from <strong>${review.name}</strong> (${review.company}) has been saved to your GitHub repo. Vercel is now deploying it live to himastechdigi.com!`,
          true,
          review
        ),
        { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    } catch (gitErr: any) {
      console.error("GitHub API commit error:", gitErr);
      return new NextResponse(
        renderHtml(
          "Commit Failed",
          "Approval Verified (Manual Commit Required)",
          `We verified this review, but encountered a GitHub API error: ${gitErr?.message}. You can manually copy the review below.`,
          false,
          review
        ),
        { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }
  }

  // 3. Fallback if GITHUB_TOKEN is not yet set in environment
  return new NextResponse(
    renderHtml(
      "Endorsement Approved!",
      "Review Verified & Approved!",
      `The endorsement from <strong>${review.name}</strong> (${review.company}) is verified! To enable instant 1-click commits directly to your GitHub repository without touching code, add <code>GITHUB_TOKEN</code> to your Vercel Environment Variables.`,
      true,
      review
    ),
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

function renderHtml(
  title: string,
  heading: string,
  message: string,
  isSuccess: boolean,
  review?: ReviewPayload
): string {
  const iconSvg = isSuccess
    ? `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;

  const reviewCard = review
    ? `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(251, 191, 36, 0.25); border-radius: 16px; padding: 20px; text-align: left; margin: 24px 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div>
            <div style="font-weight: 800; font-size: 16px; color: #ffffff;">${review.name}</div>
            <div style="font-size: 13px; color: #fbbf24; font-weight: 600;">${review.designation || "Client"} • ${review.company}</div>
          </div>
          <div style="color: #fbbf24; font-weight: 800; font-size: 14px;">★ ${review.rating || 5}/5 Stars</div>
        </div>
        <div style="font-size: 13px; color: #cbd5e1; line-height: 1.6; font-style: italic; border-left: 2px solid #fbbf24; padding-left: 12px;">
          "${review.message}"
        </div>
      </div>
    `
    : "";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title} | Himastech Digi Review Desk</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        body { background-color: #07090e; color: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .card { background: radial-gradient(circle at 50% 0%, #171b26 0%, #0b0e17 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 28px; padding: 40px 32px; max-width: 520px; width: 100%; text-align: center; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); }
        .icon-circle { width: 72px; height: 72px; border-radius: 50%; background: ${isSuccess ? "rgba(251, 191, 36, 0.12)" : "rgba(239, 68, 68, 0.12)"}; border: 1px solid ${isSuccess ? "rgba(251, 191, 36, 0.3)" : "rgba(239, 68, 68, 0.3)"}; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
        h1 { font-size: 22px; font-weight: 800; color: #ffffff; margin-bottom: 8px; }
        p { font-size: 14px; color: #94a3b8; line-height: 1.5; margin-bottom: 16px; }
        .badge { display: inline-block; background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 999px; margin-bottom: 16px; }
        .btn { display: inline-block; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #0f172a; text-decoration: none; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; padding: 14px 28px; border-radius: 14px; transition: transform 0.2s; box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.3); }
        .btn:hover { transform: translateY(-2px); }
        .footer { font-size: 12px; color: #64748b; margin-top: 24px; }
        code { background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 6px; color: #fbbf24; font-family: monospace; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">Himastech Zero-Database Desk</div>
        <div class="icon-circle">${iconSvg}</div>
        <h1>${heading}</h1>
        <p>${message}</p>
        ${reviewCard}
        <div style="margin-top: 24px;">
          <a href="https://www.himastechdigi.com/#testimonials" class="btn">View Live on Website →</a>
        </div>
        <div class="footer">Himastech Digital Marketing • Operational Center, Hyderabad</div>
      </div>
    </body>
    </html>
  `;
}
