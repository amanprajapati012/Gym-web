"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Apple, ArrowRight, Calendar } from "lucide-react";

type Diet = {
  id: string;
  title: string;
  trainer: string;
  date: string;
  progress: number;
};

export default function DietPage() {
  const [dietPlans, setDietPlans] = useState<Diet[]>([]);

  useEffect(() => {
    setDietPlans([
      {
        id: "1",
        title: "Muscle Gain Diet",
        trainer: "Aman Raj",
        date: "Today",
        progress: 50,
      },
      {
        id: "2",
        title: "Fat Loss Diet",
        trainer: "Aman Raj",
        date: "Tomorrow",
        progress: 20,
      },
    ]);
  }, []);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-5 rounded-2xl border border-white/5">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Apple className="text-green-500" size={20} />
          My Diet Plans
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Follow your daily nutrition plan
        </p>
      </div>

      {/* DIET CARDS */}
      <div className="grid md:grid-cols-2 gap-4">
        {dietPlans.map((d) => (
          <div
            key={d.id}
            className="bg-[#0b1220] p-4 rounded-2xl border border-white/5 hover:border-green-500 transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{d.title}</h2>
              <Apple className="text-green-500" size={18} />
            </div>

            <p className="text-xs text-gray-400 mt-1">
              Trainer: {d.trainer}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <Calendar size={14} /> {d.date}
            </div>

            {/* PROGRESS */}
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Progress</span>
                <span>{d.progress}%</span>
              </div>

              <div className="h-2 bg-[#020617] rounded-full mt-1">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${d.progress}%` }}
                />
              </div>
            </div>

            {/* BUTTON */}
            <Link
              href={`/dashboard/member/diet/${d.id}`}
              className="mt-4 flex items-center justify-between text-sm 
              text-green-500 hover:text-green-400 transition"
            >
              View Diet <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}