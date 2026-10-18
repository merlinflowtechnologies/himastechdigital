import { NextResponse } from "next/server";
import { getAdminSettings, updateAdminSettings } from "@/lib/adminData";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const settings = await getAdminSettings();

    // Default password or custom password check
    const isValid = password === settings.adminPassword || password === "himas2026" || password === "admin123";

    if (!isValid) {
      return NextResponse.json({ success: false, error: "Invalid Admin Security PIN" }, { status: 401 });
    }

    return NextResponse.json({ 
      success: true, 
      token: "himastech_admin_session_valid",
      portalName: settings.portalName 
    });
  } catch (error) {
    console.error("Error in admin auth:", error);
    return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { currentPassword, newPassword, portalName, notificationPhone } = await request.json();
    const settings = await getAdminSettings();

    const isValid = currentPassword === settings.adminPassword || currentPassword === "himas2026";
    if (!isValid) {
      return NextResponse.json({ success: false, error: "Current password does not match" }, { status: 401 });
    }

    const updates: Record<string, string> = {};
    if (newPassword && newPassword.trim().length >= 4) {
      updates.adminPassword = newPassword.trim();
    }
    if (portalName) updates.portalName = portalName;
    if (notificationPhone) updates.notificationPhone = notificationPhone;

    const updated = await updateAdminSettings(updates);
    return NextResponse.json({ success: true, settings: updated });
  } catch (error) {
    console.error("Error updating admin settings:", error);
    return NextResponse.json({ success: false, error: "Failed to update settings" }, { status: 500 });
  }
}
