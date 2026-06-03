"use client";

import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Dumbbell,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react";

export default function WorkoutDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const exercises = [
    { name: "Bench Press", sets: "4 x 10", done: true },
    { name: "Incline Dumbbell", sets: "3 x 12", done: true },
    { name: "Push Ups", sets: "3 x 15", done: false },
    { name: "Cable Fly", sets: "3 x 12", done: false },
  ];

  const completed = exercises.filter((e) => e.done).length;
  const total = exercises.length;
  const progress = (completed / total) * 100;

  return (
    <div className="space-y-6">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Dumbbell className="text-orange-500" />
          Workout Plan #{id}
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Track your workout progress & performance
        </p>

        {/* PROGRESS BAR */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1 text-gray-400">
            <span>Progress</span>
            <span>{completed}/{total} Completed</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* EXERCISES */}
      <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Exercises</h2>

        <div className="space-y-3">
          {exercises.map((ex, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#020617] p-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition group"
            >
              <div>
                <p className="font-medium group-hover:text-orange-400 transition">
                  {ex.name}
                </p>
                <p className="text-xs text-gray-400">{ex.sets}</p>
              </div>

              <div className="flex items-center gap-2">
                {ex.done ? (
                  <>
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-xs text-green-400">Done</span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-500" size={18} />
                    <span className="text-xs text-red-400">Pending</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid md:grid-cols-3 gap-4">

        <button className="flex items-center justify-center gap-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 p-4 rounded-xl transition shadow hover:shadow-orange-500/20">
          <UserPlus size={18} />
          Assign to Member
        </button>

        <button className="flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 p-4 rounded-xl transition shadow hover:shadow-blue-500/20">
          <Edit size={18} />
          Edit Plan
        </button>

        <button className="flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 p-4 rounded-xl transition shadow hover:shadow-red-500/20">
          <Trash2 size={18} />
          Delete Plan
        </button>

      </div>

    </div>
  );
}