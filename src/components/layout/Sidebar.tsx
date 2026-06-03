"use client";

import { useRouter, usePathname } from "next/navigation";
import { SidebarProps } from "@/types";
import { menu } from "@/constants/menu";
import { X, LogOut } from "lucide-react";

export default function Sidebar({ open, role }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();              

  const items = menu[role] || menu["member"];

  return (
    <>
      {/* MOBILE BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-sm"
          onClick={() => window.dispatchEvent(new Event("closeSidebar"))}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static left-0 z-50
          top-14 md:top-0
          h-[calc(100vh-3.5rem)] md:h-screen
          w-64

          bg-gradient-to-b from-[#0f172a] to-[#020617]
          border-r border-white/10
          shadow-2xl

          flex flex-col justify-between

          transition-transform duration-300 ease-in-out

          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* LOGO */}
        <div>
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span className="text-orange-500 font-bold text-lg tracking-wide">
              ZYRAFIT
            </span>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => window.dispatchEvent(new Event("closeSidebar"))}
            >
              <X size={18} />
            </button>
          </div>

          {/* MENU */}
          <ul className="px-3 mt-4 space-y-1">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <li
                  key={i}
                  onClick={() => router.push(item.path)}
                  className={`
                    flex items-center gap-3
                    px-3 py-2.5 rounded-xl
                    cursor-pointer text-sm
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-orange-500 text-white shadow-md"
                        : "text-gray-400 hover:bg-white/10 hover:text-white hover:translate-x-1"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="truncate">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}