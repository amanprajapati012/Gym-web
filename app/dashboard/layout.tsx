"use client";

import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ role निकालो URL से
  const roleFromUrl = pathname.split("/")[2]; 
  // /dashboard/trainer → ["", "dashboard", "trainer"]

  const roleMap: any = {
    "gym-owner": "owner",
    trainer: "trainer",
    member: "member",
    admin: "admin",
    "web-owner": "admin",
  };

  const role = roleMap[roleFromUrl] || "member";

  return <DashboardLayout role={role}>{children}</DashboardLayout>;
}