"use client";

import { Menu, Bell, Sun, Moon, Search, User, LogOut, Settings, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { HeaderProps, Role } from "@/types";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ toggle, role }: HeaderProps & { role: Role }) {
  const [theme, setTheme] = useState("dark");
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    // Close dropdown on click outside
    const handleClickOutside = (e: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const roleTitleMap: Record<string, string> = {
    owner: "Gym Owner",
    trainer: "Gym Trainer",
    member: "Gym Member",
    admin: "Web Owner",
  };

  const notifications = [
    { id: 1, title: "Plan Expiring Soon!", desc: "Your Pro Plan expires in 5 days.", time: "2h ago", type: "urgent" },
    { id: 2, title: "New Supplement In Stock", desc: "Nitro Tech is now available in the shop.", time: "5h ago", type: "info" },
  ];

  return (
    <header className="h-16 sticky top-0 z-50 bg-[#0b1220]/80 backdrop-blur-md border-b border-white/5 px-4 md:px-6">
      <div className="h-full flex items-center justify-between gap-4">
        
        {/* LEFT: Branding & Menu */}
        <div className="flex items-center gap-4">
          <button onClick={toggle} className="md:hidden p-2 rounded-xl hover:bg-white/5 text-gray-400">
            <Menu size={20} />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-sm font-black text-white uppercase tracking-[2px]">{roleTitleMap[role] || "Dashboard"}</h1>
           
          </div>
        </div>

        {/* CENTER: SEARCH (Enhanced) */}
        <div className="hidden md:flex flex-1 justify-center max-w-lg">
          <div className="group flex items-center w-full bg-[#020617]/50 px-4 py-2 rounded-2xl border border-white/5 focus-within:border-orange-500/50 transition-all duration-300">
            <Search size={16} className="text-gray-500 group-focus-within:text-orange-500" />
            <input
              placeholder="Search exercises, diet, shop..."
              className="bg-transparent ml-3 outline-none w-full text-sm text-gray-300 placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2.5 rounded-xl transition relative ${showNotifications ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#0b1220]"></span>
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-80 bg-[#0b1220] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden shadow-black/50"
                >
                  <div className="p-5 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold text-sm">Notifications</h3>
                    <button className="text-[10px] text-orange-500 font-bold uppercase hover:underline">Mark all read</button>
                  </div>
                  <div className="max-h-[350px] overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-4 hover:bg-white/5 transition flex gap-3 border-b border-white/5 last:border-0">
                        <div className={`mt-1 shrink-0 w-2 h-2 rounded-full ${n.type === 'urgent' ? 'bg-red-500' : 'bg-orange-500'}`} />
                        <div>
                          <p className="text-xs font-bold text-white">{n.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{n.desc}</p>
                          <p className="text-[9px] text-gray-600 mt-2 font-medium">{n.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-4 text-xs font-bold text-gray-400 hover:text-white bg-white/5 transition">
                    View All Notifications
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile Link */}
          <Link href="/dashboard/member/profile">
            <div className="flex items-center gap-3 pl-2 pr-1 py-1 hover:bg-white/5 rounded-2xl border border-transparent hover:border-white/5 transition group">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-xs font-bold text-white group-hover:text-orange-500 transition">Aman</span>
                <span className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">Pro Member</span>
              </div>
              <div className="w-9 h-9 bg-gradient-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-[#020617] font-black shadow-lg shadow-orange-500/20 group-hover:scale-105 transition">
                A
              </div>
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}