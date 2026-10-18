import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export interface CourseItem {
  id: string;
  category: "all" | "excel" | "affiliate" | "ai" | "design" | "realty";
  categoryLabel: string;
  badge: string;
  title: string;
  description: string;
  instructor: string;
  instructorRole: string;
  duration: string;
  lessons: number;
  rating: number;
  reviewsCount: number;
  originalPrice: string;
  discountedPrice: string;
  language: string;
  image: string;
  modules: string[];
  isActive?: boolean;
}

export interface CustomerRegistration {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  createdAt: string;
  status: "New" | "Contacted" | "Converted" | "Archived";
  source?: string;
  notes?: string;
}

export interface AdminSettings {
  adminPassword: string;
  notificationPhone: string;
  portalName: string;
  lastUpdated?: string;
}

const COURSES_FILE = path.join(process.cwd(), "src/data/coursesData.json");
const REGISTRATIONS_FILE = path.join(process.cwd(), "src/data/registrationsData.json");
const SETTINGS_FILE = path.join(process.cwd(), "src/data/adminSettings.json");

// Helper to ensure file exists
async function ensureFile(filePath: string, defaultData: unknown) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), "utf-8");
  }
}

// Courses
export async function getStoredCourses(): Promise<CourseItem[]> {
  try {
    await ensureFile(COURSES_FILE, []);
    const data = await fs.readFile(COURSES_FILE, "utf-8");
    return JSON.parse(data) as CourseItem[];
  } catch (err) {
    console.error("Error reading courses:", err);
    return [];
  }
}

export async function saveStoredCourses(courses: CourseItem[]): Promise<boolean> {
  try {
    await ensureFile(COURSES_FILE, []);
    await fs.writeFile(COURSES_FILE, JSON.stringify(courses, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error saving courses:", err);
    return false;
  }
}

export async function updateCourse(id: string, updates: Partial<CourseItem>): Promise<CourseItem | null> {
  const courses = await getStoredCourses();
  const idx = courses.findIndex(c => c.id === id);
  if (idx === -1) return null;

  courses[idx] = { ...courses[idx], ...updates };
  await saveStoredCourses(courses);
  return courses[idx];
}

export async function addCourse(newCourse: Omit<CourseItem, "id"> & { id?: string }): Promise<CourseItem> {
  const courses = await getStoredCourses();
  const courseId = newCourse.id || `course-${Date.now()}`;
  const course: CourseItem = {
    ...newCourse,
    id: courseId,
    isActive: newCourse.isActive !== undefined ? newCourse.isActive : true
  };
  courses.push(course);
  await saveStoredCourses(courses);
  return course;
}

export async function deleteCourse(id: string): Promise<boolean> {
  const courses = await getStoredCourses();
  const filtered = courses.filter(c => c.id !== id);
  if (filtered.length === courses.length) return false;
  await saveStoredCourses(filtered);
  return true;
}

// Registrations
export async function getStoredRegistrations(): Promise<CustomerRegistration[]> {
  try {
    await ensureFile(REGISTRATIONS_FILE, []);
    const data = await fs.readFile(REGISTRATIONS_FILE, "utf-8");
    const parsed = JSON.parse(data) as CustomerRegistration[];
    // Sort descending by date
    return parsed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (err) {
    console.error("Error reading registrations:", err);
    return [];
  }
}

export async function addRegistration(entry: {
  name: string;
  phone: string;
  email: string;
  course: string;
  notes?: string;
  source?: string;
}): Promise<CustomerRegistration> {
  const list = await getStoredRegistrations();
  const newRecord: CustomerRegistration = {
    id: `reg_${Date.now()}_${randomUUID().slice(0, 6)}`,
    name: entry.name.trim(),
    phone: entry.phone.trim(),
    email: entry.email.trim(),
    course: entry.course.trim(),
    createdAt: new Date().toISOString(),
    status: "New",
    source: entry.source || "Website Registration Modal",
    notes: entry.notes || ""
  };
  list.unshift(newRecord);
  await fs.writeFile(REGISTRATIONS_FILE, JSON.stringify(list, null, 2), "utf-8");
  return newRecord;
}

export async function updateRegistrationStatus(
  id: string, 
  status: "New" | "Contacted" | "Converted" | "Archived",
  notes?: string
): Promise<CustomerRegistration | null> {
  const list = await getStoredRegistrations();
  const item = list.find(r => r.id === id);
  if (!item) return null;

  item.status = status;
  if (notes !== undefined) item.notes = notes;

  await fs.writeFile(REGISTRATIONS_FILE, JSON.stringify(list, null, 2), "utf-8");
  return item;
}

export async function deleteRegistration(id: string): Promise<boolean> {
  const list = await getStoredRegistrations();
  const filtered = list.filter(r => r.id !== id);
  if (filtered.length === list.length) return false;
  await fs.writeFile(REGISTRATIONS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

// Admin Settings
export async function getAdminSettings(): Promise<AdminSettings> {
  try {
    await ensureFile(SETTINGS_FILE, {
      adminPassword: "himas2026",
      notificationPhone: "+91 6304989071",
      portalName: "HIMASTECH Executive Admin Portal"
    });
    const data = await fs.readFile(SETTINGS_FILE, "utf-8");
    return JSON.parse(data) as AdminSettings;
  } catch {
    return {
      adminPassword: "himas2026",
      notificationPhone: "+91 6304989071",
      portalName: "HIMASTECH Executive Admin Portal"
    };
  }
}

export async function updateAdminSettings(settings: Partial<AdminSettings>): Promise<AdminSettings> {
  const current = await getAdminSettings();
  const updated = {
    ...current,
    ...settings,
    lastUpdated: new Date().toISOString()
  };
  await fs.writeFile(SETTINGS_FILE, JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}
