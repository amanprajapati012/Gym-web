"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, LogIn, LogOut } from "lucide-react";

export default function TrainerSelfAttendance() {
  const { id } = useParams();
  const router = useRouter();

  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [checkOut, setCheckOut] = useState<string | null>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => {
    setCheckIn(new Date().toLocaleTimeString());
    setCheckOut(null);
  };

  const handleCheckOut = () => {
    setCheckOut(new Date().toLocaleTimeString());
  };

  return (
    <div className="space-y-6">

      {/* BACK */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-white"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Clock className="text-green-500" />
          Trainer Attendance #{id}
        </h1>

        <p className="text-green-400 mt-2 text-lg">{time}</p>
      </div>

      {/* STATUS */}
      <div className="bg-[#0b1220] p-6 rounded-2xl border border-white/10 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Check In</span>
          <span>{checkIn || "--:--"}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Check Out</span>
          <span>{checkOut || "--:--"}</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span className="text-green-400">
            {checkIn && !checkOut
              ? "Working"
              : checkOut
              ? "Completed"
              : "Not Started"}
          </span>
        </div>

      </div>

      {/* ACTIONS */}
      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={handleCheckIn}
          className="bg-green-500 hover:bg-green-600 p-4 rounded-xl text-white flex items-center justify-center gap-2"
        >
          <LogIn size={18} /> Check In
        </button>

        <button
          onClick={handleCheckOut}
          className="bg-red-500 hover:bg-red-600 p-4 rounded-xl text-white flex items-center justify-center gap-2"
        >
          <LogOut size={18} /> Check Out
        </button>

      </div>

    </div>
  );
}