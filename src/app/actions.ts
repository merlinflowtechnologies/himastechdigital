"use server";

import { randomUUID } from "crypto";
import { signReviewPayload } from "@/lib/reviewSigner";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")?.toString();
  const businessName = formData.get("businessName")?.toString() || formData.get("company")?.toString();
  const phone = formData.get("phone")?.toString();
  const email = formData.get("email")?.toString();
  const serviceRequired = formData.get("serviceRequired")?.toString() || formData.get("serviceGoal")?.toString();
  const businessDetails = formData.get("businessDetails")?.toString() || formData.get("message")?.toString();

  // Validate required fields
  if (!name || !email || !phone || !businessDetails) {
    return { success: false, error: "Please provide your Name, Phone, Email, and details about your business." };
  }

  try {
    const params = new URLSearchParams();
    params.append("_subject", `⚡ New Himastech Lead Inquiry: ${name} (${businessName || "Direct Inquiry"})`);
    params.append("name", name);
    params.append("email", email);
    params.append("phone", phone);
    params.append("company", businessName || "Not provided");
    params.append("service_required", serviceRequired || "Growth Strategy & Audit");
    params.append("message", businessDetails);
    params.append("_template", "table");
    params.append("_captcha", "false");

    await fetch("https://formsubmit.co/ajax/info@himastechdigi.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Origin": "https://www.himastechdigi.com",
        "Referer": "https://www.himastechdigi.com",
      },
      body: params.toString(),
    });

    return { 
      success: true, 
      message: "Thank you! We have received your inquiry and will connect with you within 2 business hours." 
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit inquiry. Please reach out via WhatsApp or phone." };
  }
}

export async function submitReviewAction(data: {
  name: string;
  designation: string;
  company: string;
  phone: string;
  reviewText: string;
  rating?: number;
}) {
  if (!data.name || !data.company || !data.phone || !data.reviewText) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const reviewId = randomUUID();
  const { data: signedData, sig } = signReviewPayload({
    id: reviewId,
    name: data.name,
    company: data.company,
    designation: data.designation || "Client",
    phone: data.phone,
    rating: data.rating || 5,
    message: data.reviewText,
    timestamp: Date.now(),
  });

  const approveLink = `https://www.himastechdigi.com/api/reviews/approve?data=${signedData}&sig=${sig}`;
  const rejectLink = `https://www.himastechdigi.com/api/reviews/reject?data=${signedData}&sig=${sig}`;

  try {
    const params = new URLSearchParams();
    params.append("_subject", `★ New Client Endorsement: ${data.name} (${data.company})`);
    params.append("name", data.name);
    params.append("company", data.company);
    params.append("designation", data.designation || "Not provided");
    params.append("phone", data.phone);
    params.append("rating", `${data.rating || 5} / 5 Stars`);
    params.append("message", data.reviewText);
    params.append("CLICK_TO_APPROVE", approveLink);
    params.append("CLICK_TO_REJECT", rejectLink);
    params.append("_template", "table");
    params.append("_captcha", "false");

    const emailRes = await fetch("https://formsubmit.co/ajax/info@himastechdigi.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Origin": "https://www.himastechdigi.com",
        "Referer": "https://www.himastechdigi.com",
      },
      body: params.toString(),
    });

    const emailData = await emailRes.json().catch(() => ({}));
    console.log("Review dispatch status:", emailRes.status, emailData);

    return { success: true, message: "Review received and submitted for verification!" };
  } catch (error) {
    console.error("Error sending review email notification:", error);
    return { success: true, message: "Review received and submitted for verification!" };
  }
}
