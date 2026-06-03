import {
  Home,
  Users,
  Dumbbell,
  Salad,
  CreditCard,
  Settings,
  LineChart,
  UserPlus,
  Calendar,
  ClipboardList,
  Building2,
  DollarSign,
  Activity,
  Shield,
  Flame,
  User,
} from "lucide-react";

import { Role, MenuItem } from "@/types";

export const menu: Record<Role, MenuItem[]> = {

  // 🟣 WEB OWNER (ADMIN)
  admin: [
    { name: "Dashboard", icon: Home, path: "/dashboard/web-owner" },
    { name: "All Gyms", icon: Building2, path: "/dashboard/web-owner/gyms" },
    { name: "Gym Owners", icon: Users, path: "/dashboard/web-owner/owners" },
    { name: "Revenue", icon: DollarSign, path: "/dashboard/web-owner/revenue" },
    { name: "Analytics", icon: LineChart, path: "/dashboard/web-owner/analytics" },
    { name: "Security", icon: Shield, path: "/dashboard/web-owner/security" },
  ],

  // 🟠 GYM OWNER
  owner: [
    { name: "Dashboard", icon: Home, path: "/dashboard/gym-owner" },
    { name: "Trainers", icon: Users, path: "/dashboard/gym-owner/trainers" },
    { name: "Members", icon: UserPlus, path: "/dashboard/gym-owner/gym-members" },
    { name: "Attendance", icon: Calendar, path: "/dashboard/gym-owner/attendance" },
    { name: "Plans", icon: CreditCard, path: "/dashboard/gym-owner/plans" },
    { name: "Payments", icon: DollarSign, path: "/dashboard/gym-owner/payments" },
    { name: "Reports", icon: LineChart, path: "/dashboard/gym-owner/reports" },
    { name: "Settings", icon: Settings, path: "/dashboard/gym-owner/settings" },
  ],

  // 🟢 TRAINER
  trainer: [
    { name: "Dashboard", icon: Home, path: "/dashboard/trainer" },
    { name: "My Members", icon: Users, path: "/dashboard/trainer/members" },
    { name: "Workout Plans", icon: Dumbbell, path: "/dashboard/trainer/workout" },
    { name: "Diet Plans", icon: Salad, path: "/dashboard/trainer/diet" },
    { name: "Progress", icon: Activity, path: "/dashboard/trainer/progress" },
    { name: "Attendance", icon: Calendar, path: "/dashboard/trainer/attendance" },
    { name: "Schedule", icon: ClipboardList, path: "/dashboard/trainer/schedule" },
  ],

  // 🔵 MEMBER
  member: [
    { name: "Dashboard", icon: Home, path: "/dashboard/member" },
    { name: "My Workout", icon: Dumbbell, path: "/dashboard/member/workout" },
    { name: "Diet Plan", icon: Salad, path: "/dashboard/member/diet" },
    { name: "Progress", icon: Activity, path: "/dashboard/member/progress" },
    { name: "Attendance", icon: Calendar, path: "/dashboard/member/attendance" },
    { name: "Membership", icon: CreditCard, path: "/dashboard/member/membership" },
    { name: "Calories", icon: Flame, path: "/dashboard/member/calories" },
    { name: "Shop", icon: ClipboardList, path: "/dashboard/member/shop" },
    { name: "profile", icon: User, path: "/dashboard/member/profile" },


  ],
};