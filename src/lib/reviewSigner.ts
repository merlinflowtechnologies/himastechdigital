import { createHmac } from "crypto";

export interface ReviewPayload {
  id: string;
  name: string;
  company: string;
  designation: string;
  phone: string;
  rating: number;
  message: string;
  timestamp: number;
}

const SECRET = process.env.REVIEW_APPROVAL_SECRET || "himastech-secure-review-approval-secret-key-2026";

export function signReviewPayload(payload: ReviewPayload): { data: string; sig: string } {
  const jsonStr = JSON.stringify(payload);
  const data = Buffer.from(jsonStr, "utf-8").toString("base64url");
  const sig = createHmac("sha256", SECRET).update(data).digest("hex");
  return { data, sig };
}

export function verifyReviewPayload(data: string, sig: string): ReviewPayload | null {
  try {
    const expectedSig = createHmac("sha256", SECRET).update(data).digest("hex");
    if (expectedSig !== sig) {
      return null;
    }
    const jsonStr = Buffer.from(data, "base64url").toString("utf-8");
    return JSON.parse(jsonStr) as ReviewPayload;
  } catch (err) {
    console.error("Failed to verify review payload:", err);
    return null;
  }
}
