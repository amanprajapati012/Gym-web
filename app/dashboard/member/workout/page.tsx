"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Dumbbell, Calendar, ArrowRight } from "lucide-react";

type Workout = {
  id: string;
  title: string;
  trainer: string;
  date: string;
  progress: number;
};

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    setWorkouts([
      {
        id: "1",
        title: "Chest & Triceps",
        trainer: "Aman Raj",
        date: "Today",
        progress: 40,
      },
      {
        id: "2",
        title: "Back & Biceps",
        trainer: "Aman Raj",
        date: "Tomorrow",
        progress: 70,
      },
    ]);
  }, []);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-5 rounded-2xl border border-white/5">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Dumbbell className="text-orange-500" size={20} />
          My Workouts
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Track your daily assigned workouts
        </p>
      </div>

      {/* WORKOUT CARDS */}
      <div className="grid md:grid-cols-2 gap-4">
        {workouts.map((w) => (
          <div
            key={w.id}
            className="bg-[#0b1220] p-4 rounded-2xl border border-white/5 hover:border-orange-500 transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{w.title}</h2>
              <Dumbbell className="text-orange-500" size={18} />
            </div>

            <p className="text-xs text-gray-400 mt-1">
              Trainer: {w.trainer}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <Calendar size={14} /> {w.date}
            </div>

            {/* PROGRESS */}
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Progress</span>
                <span>{w.progress}%</span>
              </div>

              <div className="h-2 bg-[#020617] rounded-full mt-1">
                <div
                  className="h-2 bg-orange-500 rounded-full"
                  style={{ width: `${w.progress}%` }}
                />
              </div>
            </div>

            {/* BUTTON */}
            <Link
              href={`/dashboard/member/workout/${w.id}`}
              className="mt-4 flex items-center justify-between text-sm 
              text-orange-500 hover:text-orange-400 transition"
            >
              Start Workout <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}