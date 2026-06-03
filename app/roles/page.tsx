"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Web Owner",
    desc: "Manage the entire platform",
    icon: "🌐",
    path: "/dashboard/web-owner",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Gym Owner",
    desc: "Manage gym operations",
    icon: "🏋️",
    path: "/dashboard/gym-owner",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Trainer",
    desc: "Assign workouts & track progress",
    icon: "💪",
    path: "/dashboard/trainer",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Member",
    desc: "Track workouts & fitness",
    icon: "🧑",
    path: "/dashboard/member",
    color: "from-blue-400 to-cyan-500",
  },
];

export default function RolePage() {
  const router = useRouter();

  const handleSelectRole = (path: string) => {
    localStorage.setItem("selectedRole", path);
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-6">Choose Your Role 🚀</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelectRole(role.path)}
            className={`cursor-pointer p-6 rounded-xl bg-gradient-to-br ${role.color}`}
          >
            <div className="text-4xl">{role.icon}</div>
            <h2 className="text-xl font-semibold mt-3">{role.title}</h2>
            <p className="text-sm opacity-80">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}