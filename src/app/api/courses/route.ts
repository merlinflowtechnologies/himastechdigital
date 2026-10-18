import { NextResponse } from "next/server";
import { getStoredCourses, saveStoredCourses, updateCourse, addCourse, deleteCourse } from "@/lib/adminData";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const showAll = searchParams.get("all") === "true";
    const courses = await getStoredCourses();

    if (showAll) {
      return NextResponse.json({ success: true, courses });
    }
    const activeCourses = courses.filter(c => c.isActive !== false);
    return NextResponse.json({ success: true, courses: activeCourses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch courses" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.discountedPrice) {
      return NextResponse.json({ success: false, error: "Title and Discounted Price are required" }, { status: 400 });
    }
    const created = await addCourse(body);
    return NextResponse.json({ success: true, course: created });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json({ success: false, error: "Failed to create course" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ success: false, error: "Course ID is required" }, { status: 400 });
    }
    const updated = await updateCourse(body.id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Course not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, course: updated });
  } catch (error) {
    console.error("Error updating course:", error);
    return NextResponse.json({ success: false, error: "Failed to update course" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Course ID is required" }, { status: 400 });
    }
    const deleted = await deleteCourse(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json({ success: false, error: "Failed to delete course" }, { status: 500 });
  }
}
