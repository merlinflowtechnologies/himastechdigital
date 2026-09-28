import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  if (!id || !token) {
    return new NextResponse("Missing review ID or token", { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return new NextResponse("Database not configured", { status: 503 });
  }

  const { data: review } = await supabase
    .from("reviews")
    .select("*")
    .eq("id", id)
    .single();

  if (!review || review.approval_token !== token) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  await supabase
    .from("reviews")
    .update({ status: "rejected" })
    .eq("id", id);

  return new NextResponse(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Review Rejected</title>
  <style>
    body { background: #07090e; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .box { background: #0f131c; padding: 30px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: center; max-width: 400px; }
    h2 { color: #f87171; margin-top: 0; }
    p { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="box">
    <h2>Review Rejected</h2>
    <p>This review from <strong>${review.name}</strong> will not be published to the website.</p>
  </div>
</body>
</html>`, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
