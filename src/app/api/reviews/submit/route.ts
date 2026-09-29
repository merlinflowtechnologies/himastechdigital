import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { signReviewPayload } from "@/lib/reviewSigner";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const name = data.name?.trim();
    const company = data.company?.trim();
    const designation = data.designation?.trim() || "Client";
    const phone = data.phone?.trim();
    const reviewText = (data.reviewText || data.message)?.trim();
    const rating = Number(data.rating) || 5;

    if (!name || !company || !phone || !reviewText) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Company, Phone, and Review)." },
        { status: 400 }
      );
    }

    // 1. Generate tamper-proof signed approval link (Zero Database!)
    const reviewId = randomUUID();
    const { data: signedData, sig } = signReviewPayload({
      id: reviewId,
      name,
      company,
      designation,
      phone,
      rating,
      message: reviewText,
      timestamp: Date.now(),
    });

    const approveLink = `https://www.himastechdigi.com/api/reviews/approve?data=${signedData}&sig=${sig}`;
    const rejectLink = `https://www.himastechdigi.com/api/reviews/reject?data=${signedData}&sig=${sig}`;

    // 2. Dispatch email to Cloudflare Email Routing address: info@himastechdigi.com
    const params = new URLSearchParams();
    params.append("_subject", `★ New Client Endorsement: ${name} (${company})`);
    params.append("name", name);
    params.append("company", company);
    params.append("designation", designation);
    params.append("phone", phone);
    params.append("rating", `${rating} / 5 Stars`);
    params.append("message", reviewText);
    params.append("CLICK_TO_APPROVE", approveLink);
    params.append("CLICK_TO_REJECT", rejectLink);
    params.append("_template", "table");
    params.append("_captcha", "false");

    const emailRes = await fetch("https://formsubmit.co/ajax/himastechdigi@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Origin": "https://www.himastechdigi.com",
        "Referer": "https://www.himastechdigi.com",
      },
      body: params.toString(),
    });

    const emailJson = await emailRes.json().catch(() => ({}));
    console.log("FormSubmit review dispatch status:", emailRes.status, emailJson);

    return NextResponse.json({
      success: true,
      message: "Review received and submitted for verification!",
      delivery: emailJson,
    });
  } catch (error: any) {
    console.error("Unhandled error in /api/reviews/submit:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to submit review. Please try again." },
      { status: 500 }
    );
  }
}
