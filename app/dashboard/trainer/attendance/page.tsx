"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  User,
  CheckCircle,
  XCircle,
} from "lucide-react";

type Member = {
  id: number;
  name: string;
  status: "present" | "absent";
};

export default function TrainerAttendancePage() {
  const router = useRouter();

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "Rahul Sharma", status: "present" },
    { id: 2, name: "Aman Verma", status: "absent" },
    { id: 3, name: "Priya Singh", status: "present" },
    { id: 4, name: "Rohit Kumar", status: "absent" },
  ]);

  const toggleStatus = (id: number) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: m.status === "present" ? "absent" : "present",
            }
          : m
      )
    );
  };

  const presentCount = members.filter(m => m.status === "present").length;
  const absentCount = members.length - presentCount;

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="text-green-500" />
          Attendance Management
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Track member attendance date-wise
        </p>

        {/* DATE */}
        <div className="mt-4 flex gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-[#020617] border border-white/10 p-2 rounded-lg"
          />

          {/* TRAINER ATTENDANCE BUTTON */}
          <button
            onClick={() => router.push(`/dashboard/trainer/attendance/1`)}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
          >
            Trainer Attendance
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard title="Total Members" value={members.length} />
        <StatCard title="Present" value={presentCount} color="text-green-400" />
        <StatCard title="Absent" value={absentCount} color="text-red-400" />
      </div>

      {/* LIST */}
      <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/10 space-y-3">
        {members.map((m) => (
          <div
            key={m.id}
            className="flex items-center justify-between bg-[#020617] p-4 rounded-xl border border-white/5"
          >
            <div className="flex items-center gap-3">
              <User className="text-gray-400" />
              <p>{m.name}</p>
            </div>

            <button
              onClick={() => toggleStatus(m.id)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs
                ${
                  m.status === "present"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
            >
              {m.status === "present" ? (
                <>
                  <CheckCircle size={16} /> Present
                </>
              ) : (
                <>
                  <XCircle size={16} /> Absent
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* SAVE */}
      <button className="w-full bg-green-500 p-3 rounded-xl text-white">
        Save Attendance
      </button>

    </div>
  );
}

function StatCard({ title, value, color = "text-white" }: any) {
  return (
    <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/10">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className={`text-xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}