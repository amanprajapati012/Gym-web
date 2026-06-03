"use client";

import {
  Users,
  CheckCircle,
  XCircle,
  Activity,
  Dumbbell,
  MessageCircle,
} from "lucide-react";

export default function TrainerMembersPage() {
  const members = [
    {
      name: "Rahul Sharma",
      plan: "Weight Loss",
      status: "active",
      attendance: "present",
      progress: 70,
    },
    {
      name: "Aman Verma",
      plan: "Muscle Gain",
      status: "active",
      attendance: "missed",
      progress: 45,
    },
    {
      name: "Vikas Yadav",
      plan: "Fitness",
      status: "inactive",
      attendance: "present",
      progress: 85,
    },
    {
      name: "Neha Singh",
      plan: "Yoga",
      status: "active",
      attendance: "present",
      progress: 60,
    },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-5 md:p-6 rounded-2xl border border-white/5">
        <div className="flex items-center gap-3">
          <Users className="text-orange-500" />
          <h1 className="text-lg md:text-xl font-bold">My Members</h1>
        </div>
        <p className="text-gray-400 text-xs md:text-sm mt-2">
          Manage assigned members, attendance & progress
        </p>
      </div>

      {/* STATS (mobile scroll fix) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">

        {[
          { label: "Total", value: "24", color: "text-white" },
          { label: "Active", value: "18", color: "text-green-400" },
          { label: "Missed", value: "3", color: "text-red-400" },
          { label: "Avg", value: "68%", color: "text-blue-400" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-[#0b1220] p-4 rounded-xl border border-white/5"
          >
            <p className="text-gray-400 text-xs">{s.label}</p>
            <h2 className={`text-xl md:text-2xl font-bold mt-1 ${s.color}`}>
              {s.value}
            </h2>
          </div>
        ))}

      </div>

      {/* MEMBERS */}
      <div className="bg-[#0b1220] p-4 md:p-5 rounded-2xl border border-white/5">
        <h2 className="text-base md:text-lg font-semibold mb-4">
          Member Overview
        </h2>

        <div className="space-y-4">

          {members.map((m, i) => (
            <div
              key={i}
              className="
                bg-[#020617] p-4 rounded-xl border border-white/5
                flex flex-col gap-3
                md:flex-row md:items-center md:justify-between
              "
            >

              {/* LEFT */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold">
                  {m.name[0]}
                </div>

                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    {m.name}
                  </h3>
                  <p className="text-xs text-gray-400">{m.plan}</p>
                </div>
              </div>

              {/* MIDDLE */}
              <div className="flex flex-wrap items-center gap-3 md:gap-6">

                {/* attendance */}
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  {m.attendance === "present" ? (
                    <CheckCircle className="text-green-400" size={14} />
                  ) : (
                    <XCircle className="text-red-400" size={14} />
                  )}
                  <span className="text-gray-300">{m.attendance}</span>
                </div>

                {/* status */}
                <div
                  className={`text-[10px] md:text-xs px-2 py-1 rounded-full ${
                    m.status === "active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {m.status}
                </div>

                {/* progress */}
                <div className="w-24 md:w-28">
                  <div className="h-2 bg-[#0f172a] rounded-full">
                    <div
                      className="h-2 bg-orange-500 rounded-full"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* ACTIONS (mobile full width) */}
              <div className="flex gap-2 md:justify-end">

                <button className="flex-1 md:flex-none p-2 bg-[#0f172a] rounded-lg hover:bg-white/10 transition">
                  <Dumbbell size={16} />
                </button>

                <button className="flex-1 md:flex-none p-2 bg-[#0f172a] rounded-lg hover:bg-white/10 transition">
                  <MessageCircle size={16} />
                </button>

                <button className="flex-1 md:flex-none p-2 bg-[#0f172a] rounded-lg hover:bg-white/10 transition">
                  <Activity size={16} />
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}