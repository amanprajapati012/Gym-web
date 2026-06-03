"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Apple,
  Utensils,
} from "lucide-react";

export default function DietDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [meals, setMeals] = useState<any[]>([]);

  useEffect(() => {
    setMeals([
      { name: "Breakfast", items: "Oats + Banana + Milk", done: true },
      { name: "Lunch", items: "Rice + Chicken + Salad", done: true },
      { name: "Snack", items: "Peanut Butter + Bread", done: false },
      { name: "Dinner", items: "Roti + Paneer + Veggies", done: false },
    ]);
  }, [id]);

  const toggleDone = (index: number) => {
    const updated = [...meals];
    updated[index].done = !updated[index].done;
    setMeals(updated);
  };

  const completed = meals.filter((m) => m.done).length;
  const progress = Math.round((completed / meals.length) * 100);

  return (
    <div className="space-y-6">

      {/* BACK */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-green-500"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-5 rounded-2xl border border-white/5">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Apple className="text-green-500" />
          Diet Plan Details
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Complete your meals on time
        </p>
      </div>

      {/* PROGRESS */}
      <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Progress</span>
          <span>{completed}/{meals.length}</span>
        </div>

        <div className="h-2 bg-[#020617] rounded-full mt-2">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* MEALS */}
      <div className="bg-[#0b1220] p-4 rounded-2xl border border-white/5 space-y-3">
        {meals.map((meal, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#020617] p-3 rounded-xl border border-white/5"
          >
            <div>
              <p className="text-sm font-medium">{meal.name}</p>
              <p className="text-xs text-gray-500">{meal.items}</p>
            </div>

            <div className="flex items-center gap-3">
              <Utensils className="text-gray-400" size={18} />

              <button onClick={() => toggleDone(i)}>
                {meal.done ? (
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