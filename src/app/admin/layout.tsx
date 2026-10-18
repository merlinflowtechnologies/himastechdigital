import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | HIMASTECH Digital Marketing",
  description: "Executive portal to manage course charges, courses, and customer registration leads.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {children}
    </div>
  );
}
