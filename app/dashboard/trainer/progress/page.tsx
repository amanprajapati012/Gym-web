"use client";

import { TrendingUp, User, Flame, Dumbbell, Activity } from "lucide-react";
import { useRouter } from "next/navigation";

type Member = {
  id: number;
  name: string;
  weight: number;
  goal: string;
  progress: number;
  diet: number;
  workout: number;
};

export default function TrainerProgressPage() {
    const router = useRouter();
  const members: Member[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      weight: 78,
      goal: "Weight Loss",
      progress: 70,
      diet: 80,
      workout: 65,
    },
    {
      id: 2,
      name: "Aman Verma",
      weight: 65,
      goal: "Muscle Gain",
      progress: 50,
      diet: 60,
      workout: 55,
    },
    {
      id: 3,
      name: "Priya Singh",
      weight: 58,
      goal: "Fitness",
      progress: 85,
      diet: 90,
      workout: 88,
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="text-green-500" />
          Trainer Progress Dashboard
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Track your members performance, diet & workouts
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard title="Total Members" value="24" icon={<User />} />
        <StatCard title="Avg Workout" value="72%" icon={<Dumbbell />} />
        <StatCard title="Avg Diet" value="78%" icon={<Flame />} />
      </div>

      {/* MEMBERS */}
      <div className="grid md:grid-cols-2 gap-4">
        {members.map((m) => (
          <div
            key={m.id}
            className="bg-[#0b1220] p-5 rounded-2xl border border-white/10 hover:border-green-500/30 transition"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{m.name}</h2>
                <p className="text-xs text-gray-400">{m.goal}</p>
              </div>

              <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                {m.progress}% Progress
              </span>
            </div>

            {/* BODY */}
            <div className="mt-4 space-y-3">
              {/* Weight */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Weight</span>
                <span>{m.weight} kg</span>
              </div>

              {/* WORKOUT */}
              <ProgressBar
                label="Workout"
                value={m.workout}
                color="bg-blue-500"
              />

              {/* DIET */}
              <ProgressBar label="Diet" value={m.diet} color="bg-green-500" />
            </div>

            {/* ACTION */}
            <button
              onClick={() => router.push(`/dashboard/trainer/progress/${m.id}`)}
              className="mt-4 w-full bg-green-500/10 hover:bg-green-500/20 text-green-400 p-2 rounded-lg"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* WEEKLY GRAPH (UI ONLY) */}
      <div className="bg-[#0b1220] p-6 rounded-2xl border border-white/10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Activity className="text-orange-400" />
          Weekly Activity
        </h2>

        <div className="flex items-end gap-3 h-40">
          {[40, 60, 80, 50, 70, 90, 65].map((v, i) => (
            <div key={i} className="flex-1">
              <div
                className="bg-green-500 rounded-md transition-all"
                style={{ height: `${v}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

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
