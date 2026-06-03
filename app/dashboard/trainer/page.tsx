"use client";

import {
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";

export default function TrainerPage() {
  const trainer = {
    name: "Aman Raj",
    experience: "5 Years",
    specialization: "Strength & Conditioning",
    rating: 4.8,
    members: 48,
    active: 42,
    missed: 6,
    completed: 128,
  };

  const missedMembers = [
    { name: "Rahul", reason: "Absent" },
    { name: "Aman", reason: "Late" },
    { name: "Vikas", reason: "No Show" },
  ];

  return (
    <div className="space-y-6">

      {/* PROFILE HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-4 sm:p-6 rounded-2xl border border-white/5 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

        {/* LEFT PROFILE */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500 flex items-center justify-center text-lg sm:text-xl font-bold">
            A
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold">{trainer.name}</h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              {trainer.specialization}
            </p>
            <p className="text-gray-500 text-xs">
              Experience: {trainer.experience} • ⭐ {trainer.rating}
            </p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5">
            <Users className="text-orange-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Members</p>
            <h2 className="text-base sm:text-lg font-bold">{trainer.members}</h2>
          </div>

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5">
            <Users className="text-green-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Active</p>
            <h2 className="text-base sm:text-lg font-bold">{trainer.active}</h2>
          </div>

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5">
            <XCircle className="text-red-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Missed</p>
            <h2 className="text-base sm:text-lg font-bold">{trainer.missed}</h2>
          </div>

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5">
            <CheckCircle className="text-blue-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Completed</p>
            <h2 className="text-base sm:text-lg font-bold">{trainer.completed}</h2>
          </div>

        </div>
      </div>

      {/* ALERT + MISSED MEMBERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-[#0b1220] p-4 sm:p-5 rounded-2xl border border-white/5">
          <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2 mb-4">
            <AlertTriangle className="text-red-500" size={18} />
            Today Alerts
          </h2>

          <div className="space-y-3">
            {missedMembers.map((m, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#020617] p-3 rounded-xl border border-white/5 gap-2"
              >
                <p className="font-medium text-sm sm:text-base">{m.name}</p>
                <span className="text-xs text-red-400">{m.reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance */}
        <div className="bg-[#0b1220] p-4 sm:p-5 rounded-2xl border border-white/5">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Weekly Attendance
          </h2>

          {[
            { day: "Mon", v: 80 },
            { day: "Tue", v: 65 },
            { day: "Wed", v: 90 },
            { day: "Thu", v: 70 },
            { day: "Fri", v: 85 },
          ].map((d, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-xs text-gray-400">
                <span>{d.day}</span>
                <span>{d.v}%</span>
              </div>

              <div className="h-2 bg-[#020617] rounded-full mt-1">
                <div
                  className="h-2 bg-orange-500 rounded-full"
                  style={{ width: `${d.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SESSIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
          <h2 className="text-xs text-gray-400">Today's Sessions</h2>
          <p className="text-xl sm:text-2xl font-bold mt-2">8</p>
        </div>

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
          <h2 className="text-xs text-gray-400">Workout Plans</h2>
          <p className="text-xl sm:text-2xl font-bold mt-2">24</p>
        </div>

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
          <h2 className="text-xs text-gray-400">Growth</h2>
          <p className="text-xl sm:text-2xl font-bold mt-2 text-green-400">
            +12%
          </p>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

        {[
          "Assign Workout",
          "Mark Attendance",
          "Create Diet Plan",
          "Message Member",
        ].map((a, i) => (
          <button
            key={i}
            className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-3 sm:p-4 rounded-xl border border-white/5 hover:scale-105 transition text-xs sm:text-sm"
          >
            {a}
          </button>
        ))}

      </div>

    </div>
  );
}