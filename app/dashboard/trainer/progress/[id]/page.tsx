"use client";

import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Dumbbell,
  Flame,
  TrendingUp,
} from "lucide-react";

export default function MemberProgressDetail() {
  const { id } = useParams();
  const router = useRouter();

  // Dummy data (later API se aayega)
  const member = {
    name: "Rahul Sharma",
    weight: 78,
    goal: "Weight Loss",
    workout: 65,
    diet: 80,
    progress: 70,
  };

  const weeklyWeight = [82, 81, 80, 79, 78];

  return (
    <div className="space-y-6">

      {/* BACK */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <User className="text-green-500" />
          {member.name}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Goal: {member.goal}
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-4">

        <StatCard title="Current Weight" value={`${member.weight} kg`} icon={<TrendingUp />} />
        <StatCard title="Workout" value={`${member.workout}%`} icon={<Dumbbell />} />
        <StatCard title="Diet" value={`${member.diet}%`} icon={<Flame />} />

      </div>

      {/* PROGRESS BARS */}
      <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/10 space-y-4">

        <ProgressBar label="Overall Progress" value={member.progress} color="bg-green-500" />
        <ProgressBar label="Workout Completion" value={member.workout} color="bg-blue-500" />
        <ProgressBar label="Diet Follow" value={member.diet} color="bg-orange-500" />

      </div>

      {/* WEIGHT GRAPH */}
      <div className="bg-[#0b1220] p-6 rounded-2xl border border-white/10">
        <h2 className="text-lg font-semibold mb-4">
          Weight Progress (Weekly)
        </h2>

        <div className="flex items-end gap-3 h-40">
          {weeklyWeight.map((w, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className="bg-green-500 rounded-md"
                style={{ height: `${w}%` }}
              />
              <p className="text-xs mt-1 text-gray-400">{w}kg</p>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="grid md:grid-cols-2 gap-4">

        <button className="bg-blue-500/10 text-blue-400 p-4 rounded-xl">
          Assign Workout
        </button>

        <button className="bg-green-500/10 text-green-400 p-4 rounded-xl">
          Assign Diet
        </button>

      </div>

    </div>
  );
}

/* COMPONENTS */

function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/10 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
      <div className="text-green-400">{icon}</div>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1 text-gray-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div
          className={`h-2 ${color} rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}