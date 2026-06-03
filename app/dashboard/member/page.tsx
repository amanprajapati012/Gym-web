"use client";

import {
  User,
  Dumbbell,
  Apple,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity,
  Target,
} from "lucide-react";

export default function MemberPage() {
  const member = {
    name: "Rahul Sharma",
    plan: "Premium Gold",
    trainer: "Aman Raj",
    weight: "72 KG",
    goal: "Muscle Gain",
  };

  return (
    <div className="space-y-6">

      {/* PROFILE HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-4 sm:p-6 rounded-2xl border border-white/5 flex flex-col lg:flex-row justify-between gap-6">

        {/* LEFT PROFILE */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500 flex items-center justify-center text-lg sm:text-xl font-bold">
            R
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold">{member.name}</h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              Plan: {member.plan} • Trainer: {member.trainer}
            </p>
            <p className="text-gray-500 text-xs">
              Goal: {member.goal}
            </p>
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5">
            <User className="text-blue-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Weight</p>
            <h2 className="text-base sm:text-lg font-bold">{member.weight}</h2>
          </div>

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5">
            <Dumbbell className="text-orange-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Workout</p>
            <h2 className="text-base sm:text-lg font-bold text-green-400">
              Active
            </h2>
          </div>

          <div className="bg-[#0b1220] p-3 sm:p-4 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
            <Apple className="text-green-500" size={18} />
            <p className="text-xs text-gray-400 mt-2">Diet</p>
            <h2 className="text-base sm:text-lg font-bold text-blue-400">
              On Track
            </h2>
          </div>

        </div>
      </div>

      {/* TODAY STATUS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs text-gray-400">Today's Workout</h2>
            <Dumbbell className="text-orange-500" size={18} />
          </div>
          <p className="text-base sm:text-lg font-bold mt-2">
            Chest + Triceps
          </p>
          <p className="text-xs text-gray-500 mt-1">6 Exercises</p>
        </div>

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs text-gray-400">Attendance</h2>
            <Calendar className="text-blue-500" size={18} />
          </div>

          <p className="text-base sm:text-lg font-bold mt-2 text-green-400 flex items-center gap-2">
            <CheckCircle size={18} /> Present Today
          </p>
        </div>

        <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs text-gray-400">Status</h2>
            <TrendingUp className="text-green-500" size={18} />
          </div>

          <p className="text-base sm:text-lg font-bold mt-2 flex items-center gap-2">
            <Activity size={18} className="text-green-400" />
            Improving
          </p>
        </div>

      </div>

      {/* WORKOUT + DIET */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* WORKOUT PLAN */}
        <div className="bg-[#0b1220] p-4 sm:p-5 rounded-2xl border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Dumbbell className="text-orange-500" size={18} />
            Workout Plan
          </h2>

          {[
            { ex: "Bench Press", done: true },
            { ex: "Incline Dumbbell", done: true },
            { ex: "Push Ups", done: false },
            { ex: "Cable Fly", done: false },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#020617] p-3 rounded-xl border border-white/5 mb-2"
            >
              <p className="text-sm">{item.ex}</p>

              {item.done ? (
                <CheckCircle className="text-green-400" size={18} />
              ) : (
                <XCircle className="text-red-400" size={18} />
              )}
            </div>
          ))}
        </div>

        {/* DIET PLAN */}
        <div className="bg-[#0b1220] p-4 sm:p-5 rounded-2xl border border-white/5">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Apple className="text-green-500" size={18} />
            Diet Plan
          </h2>

          {[
            { meal: "Breakfast", done: true },
            { meal: "Lunch", done: true },
            { meal: "Snack", done: false },
            { meal: "Dinner", done: false },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#020617] p-3 rounded-xl border border-white/5 mb-2"
            >
              <p className="text-sm">{item.meal}</p>

              {item.done ? (
                <CheckCircle className="text-green-400" size={18} />
              ) : (
                <XCircle className="text-red-400" size={18} />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* PROGRESS */}
      <div className="bg-[#0b1220] p-4 sm:p-5 rounded-2xl border border-white/5">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target className="text-blue-500" size={18} />
          Weekly Progress
        </h2>

        {[
          { week: "Week 1", v: 60 },
          { week: "Week 2", v: 70 },
          { week: "Week 3", v: 85 },
          { week: "Week 4", v: 90 },
        ].map((d, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between text-xs text-gray-400">
              <span>{d.week}</span>
              <span>{d.v}%</span>
            </div>

            <div className="h-2 bg-[#020617] rounded-full mt-1">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${d.v}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ALERT */}
      <div className="bg-[#0b1220] p-4 sm:p-5 rounded-2xl border border-white/5">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <AlertTriangle className="text-yellow-500" size={18} />
          Alerts
        </h2>

        <p className="text-sm text-gray-400">
          🔔 You missed 1 workout this week. Stay consistent to reach your goal!
        </p>
      </div>

    </div>
  );
}