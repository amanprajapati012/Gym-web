"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { DashboardLayoutProps } from "@/types";

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("closeSidebar", close);
    return () => window.removeEventListener("closeSidebar", close);
  }, []);

  return (
    <div className="h-screen flex bg-[#020617] text-white overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar open={open} role={role} />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* HEADER */}
        <Header toggle={() => setOpen(!open)} role={role} />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="w-full max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}