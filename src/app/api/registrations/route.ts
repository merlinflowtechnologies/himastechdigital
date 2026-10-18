import { NextResponse } from "next/server";
import { 
  getStoredRegistrations, 
  addRegistration, 
  updateRegistrationStatus, 
  deleteRegistration 
} from "@/lib/adminData";

export async function GET() {
  try {
    const registrations = await getStoredRegistrations();
    return NextResponse.json({ success: true, registrations });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch registrations" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: "Name and Phone number are required" }, { status: 400 });
    }

    const created = await addRegistration({
      name: body.name,
      phone: body.phone,
      email: body.email || "",
      course: body.course || "General Consultation",
      notes: body.notes || "",
      source: body.source || "Website Registration Modal"
    });

    return NextResponse.json({ success: true, registration: created });
  } catch (error) {
    console.error("Error creating registration:", error);
    return NextResponse.json({ success: false, error: "Failed to save registration" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    if (!body.id || !body.status) {
      return NextResponse.json({ success: false, error: "Registration ID and status are required" }, { status: 400 });
    }

    const updated = await updateRegistrationStatus(body.id, body.status, body.notes);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Registration not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, registration: updated });
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json({ success: false, error: "Failed to update status" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Registration ID is required" }, { status: 400 });
    }

    const deleted = await deleteRegistration(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json({ success: false, error: "Failed to delete registration" }, { status: 500 });
  }
}
