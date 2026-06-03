"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Plus,
  User,
  Dumbbell,
} from "lucide-react";

type Session = {
  id: number;
  client: string;
  time: string;
  type: string;
  status: "upcoming" | "ongoing" | "completed";
};

export default function TrainerSchedulePage() {
  const [open, setOpen] = useState(false);

  const [sessions, setSessions] = useState<Session[]>([
    {
      id: 1,
      client: "Rahul Sharma",
      time: "08:00 AM",
      type: "Workout",
      status: "completed",
    },
    {
      id: 2,
      client: "Aman Verma",
      time: "10:00 AM",
      type: "Diet Consultation",
      status: "ongoing",
    },
    {
      id: 3,
      client: "Priya Singh",
      time: "06:00 PM",
      type: "Workout",
      status: "upcoming",
    },
  ]);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10 w-full">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="text-green-500" />
            Trainer Schedule
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Manage your daily sessions & client bookings
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="ml-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-white"
        >
          <Plus size={18} />
          Add
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-between bg-[#0b1220] p-5 rounded-2xl border border-white/10 hover:border-green-500/30 transition"
          >
            <div className="flex items-center gap-4">
              <User className="text-gray-400" />

              <div>
                <p className="font-medium">{s.client}</p>
                <p className="text-xs text-gray-400">{s.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">

              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={16} />
                {s.time}
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full
                ${
                  s.status === "completed"
                    ? "bg-green-500/10 text-green-400"
                    : s.status === "ongoing"
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {s.status}
              </span>

            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <AddSessionModal setOpen={setOpen} setSessions={setSessions} />
      )}

    </div>
  );
}

/* ---------------- MODAL ---------------- */

function AddSessionModal({ setOpen, setSessions }: any) {
  const [client, setClient] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const handleAdd = () => {
    setSessions((prev: any) => [
      ...prev,
      {
        id: Date.now(),
        client,
        time,
        type,
        status: "upcoming",
      },
    ]);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-[#020617] p-6 rounded-2xl w-full max-w-md border border-white/10">

        <h2 className="text-xl font-bold mb-4">Add Session</h2>

        <div className="space-y-3">

          <input
            placeholder="Client Name"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-white/10"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-white/10"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-white/10"
          >
            <option value="">Select Type</option>
            <option>Workout</option>
            <option>Diet Consultation</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gray-700 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-500 rounded-lg text-white"
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
}