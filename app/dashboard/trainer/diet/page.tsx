"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Utensils, Flame } from "lucide-react";

type DietPlan = {
  id: number;
  name: string;
  calories: number;
};

export default function DietPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const plans: DietPlan[] = [
    { id: 1, name: "Weight Loss Plan", calories: 1500 },
    { id: 2, name: "Muscle Gain Plan", calories: 2800 },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Utensils className="text-green-500" />
          Diet Plans
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-white"
        >
          <Plus size={18} />
          Add Plan
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 gap-4">
        {plans.map((p) => (
          <div
            key={p.id}
            className="bg-[#0b1220] p-5 rounded-2xl border border-white/10 hover:border-green-500/30 transition"
          >
            <h2 className="text-lg font-semibold">{p.name}</h2>

            <div className="flex items-center gap-2 text-orange-400 mt-2">
              <Flame size={16} />
              {p.calories} kcal
            </div>

            <button
              onClick={() => router.push(`/dashboard/trainer/diet/${p.id}`)}
              className="mt-4 w-full bg-green-500/10 hover:bg-green-500/20 text-green-400 p-2 rounded-lg"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && <AddDietModal setOpen={setOpen} />}
    </div>
  );
}

/* ---------------- MODAL ---------------- */

function AddDietModal({ setOpen }: { setOpen: (v: boolean) => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#020617] w-full max-w-lg p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl font-bold mb-4">Create Diet Plan</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Plan Name"
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-white/10 outline-none"
          />

          <input
            type="number"
            placeholder="Total Calories"
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-white/10 outline-none"
          />

          {["Breakfast", "Lunch", "Snack", "Dinner"].map((meal, i) => (
            <div key={i} className="space-y-2">
              <p className="text-sm text-gray-400">{meal}</p>
              <input
                type="text"
                placeholder={`${meal} items`}
                className="w-full p-2 rounded-lg bg-[#0b1220] border border-white/10"
              />
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gray-700 rounded-lg"
          >
            Cancel
          </button>

          <button className="px-4 py-2 bg-green-500 rounded-lg text-white">
            Save Plan
          </button>
        </div>
      </div>
    </div>
  );
}
