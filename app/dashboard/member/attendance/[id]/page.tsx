"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, User, Activity } from 'lucide-react';

export default function DayDetail({ params }: { params: { date: string } }) {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
        <ArrowLeft size={18} /> Back to Calendar
      </button>

      <div className="bg-[#0b1220] rounded-3xl border border-white/5 overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-orange-500 to-orange-600">
          <h1 className="text-3xl font-black text-white">{params.date}</h1>
          <p className="text-white/80 font-medium">Daily Attendance Summary</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Check-in Time</p>
                <p className="text-xl font-bold text-white">07:32 AM</p>
              </div>
            </div>
            <span className="px-4 py-1 bg-emerald-500/20 text-emerald-500 rounded-full text-xs font-black">ON TIME</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-xs text-gray-500 uppercase font-bold flex items-center gap-1"><MapPin size={12}/> Location</p>
              <p className="text-white font-medium">Mom-licious Cafe & Gym, Fatehpur</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500 uppercase font-bold flex items-center gap-1"><User size={12}/> Verified By</p>
              <p className="text-white font-medium">System Auto-Check</p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
             <div className="flex items-center gap-2 text-orange-500 font-bold mb-2">
                <Activity size={16} /> Workout Summary
             </div>
             <p className="text-gray-400 text-sm italic">You completed <b>Chest & Triceps</b> session on this day with 85% intensity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}