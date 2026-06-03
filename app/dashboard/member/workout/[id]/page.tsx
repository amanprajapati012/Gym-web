"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Timer,
  Dumbbell,
} from "lucide-react";

export default function WorkoutDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [exercises, setExercises] = useState<any[]>([]);

  useEffect(() => {
    setExercises([
      { name: "Bench Press", sets: "4 x 10", done: true },
      { name: "Incline DB Press", sets: "3 x 12", done: true },
      { name: "Push Ups", sets: "3 x 20", done: false },
      { name: "Cable Fly", sets: "3 x 15", done: false },
    ]);
  }, [id]);

  const toggleDone = (index: number) => {
    const updated = [...exercises];
    updated[index].done = !updated[index].done;
    setExercises(updated);
  };

  const completed = exercises.filter((e) => e.done).length;
  const progress = Math.round((completed / exercises.length) * 100);

  return (
    <div className="space-y-6">

      {/* BACK */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-orange-500"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-5 rounded-2xl border border-white/5">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Dumbbell className="text-orange-500" />
          Workout Session
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Complete your exercises step by step
        </p>
      </div>

      {/* PROGRESS */}
      <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Progress</span>
          <span>{completed}/{exercises.length}</span>
        </div>

        <div className="h-2 bg-[#020617] rounded-full mt-2">
          <div
            className="h-2 bg-orange-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* EXERCISES */}
      <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5 space-y-3">
        {exercises.map((ex, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#020617] p-3 rounded-xl border border-white/5"
          >
            <div>
              <p className="text-sm">{ex.name}</p>
              <p className="text-xs text-gray-500">{ex.sets}</p>
            </div>

            <div className="flex items-center gap-4">
              {/* TIMER */}
              <button className="text-gray-400 hover:text-orange-500">
                <Timer size={18} />
              </button>

              {/* STATUS */}
              <button onClick={() => toggleDone(i)}>
                {ex.done ? (
                  <CheckCircle className="text-green-400" size={18} />
                ) : (
                  <XCircle className="text-red-400" size={18} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}