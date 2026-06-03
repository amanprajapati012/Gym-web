import { LucideIcon } from "lucide-react";

export type Role = "owner" | "trainer" | "member" | "admin";

export interface MenuItem {
  name: string;
  icon: LucideIcon;
  path: string; // ✅ FIXED (required)
}

export interface SidebarProps {
  open: boolean;
  role: Role;
}

export interface HeaderProps {
  toggle: () => void;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  role: Role;
}