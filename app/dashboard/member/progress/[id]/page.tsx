"use client";

import React from 'react';
import Link from "next/link";
import { ArrowLeft, Edit2, Camera, Clipboard, CheckCircle2 } from 'lucide-react';

export default function ProgressDetail() {
  return (
    <div className="space-y-6">
      {/* NAVIGATION */}
      <Link href="/dashboard/member/progress" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition text-sm">
        <ArrowLeft size={16} /> Back to History
      </Link>

      {/* MAIN LOG CARD */}
      <div className="bg-[#0b1220] rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-[#0f172a] to-[#020617] border-b border-white/5 flex justify-between items-center">
          <div>
            <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Entry Details</span>
            <h1 className="text-2xl font-bold text-white">October 12, 2025</h1>
          </div>
          <button className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-xl transition border border-white/10">
            <Edit2 size={18} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <DetailStat label="Weight" value="78.0 kg" sub="↓ 2.0kg" />
          <DetailStat label="Body Fat" value="18%" sub="↓ 1.0%" />
          <DetailStat label="Muscle Mass" value="35.0 kg" sub="↑ 0.5kg" />
          <DetailStat label="BMI" value="23.2" sub="Healthy" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FEEDBACK & NOTES */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#0b1220] p-6 rounded-2xl border border-white/5">
            <h2 className="text-white font-semibold flex items-center gap-2 mb-4">
              <Clipboard size={18} className="text-orange-500" />
              Trainer Feedback
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed bg-[#020617] p-4 rounded-xl italic">
              "Your core stability has improved significantly. Focus more on your hydration this week as we increase the cardio intensity. Great progress on the deadlift form!"
            </p>
          </div>

          <div className="bg-[#0b1220] p-6 rounded-2xl border border-white/5">
            <h2 className="text-white font-semibold mb-4">Goal Checklist</h2>
            <div className="space-y-3">
              <GoalItem label="Hit 160g Protein Daily" completed={true} />
              <GoalItem label="8 Hours of Sleep" completed={true} />
              <GoalItem label="No cheat meals this week" completed={false} />
            </div>
          </div>
        </div>

        {/* PHOTO SECTION */}
        <div className="md:col-span-1">
          <div className="bg-[#0b1220] p-6 rounded-2xl border border-white/5 text-center">
            <h2 className="text-white font-semibold mb-4 text-left">Progress Photo</h2>
            <div className="aspect-[3/4] bg-[#020617] rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-orange-500 transition">
              <div className="p-4 bg-white/5 rounded-full group-hover:bg-orange-500/20 transition">
                <Camera className="text-gray-500 group-hover:text-orange-500" size={30} />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-gray-300">No Photo Uploaded</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Stats
function DetailStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-orange-500 font-medium mt-1">{sub}</p>
    </div>
  );
}

// Helper Component for Goals
function GoalItem({ label, completed }: { label: string; completed: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 bg-[#020617] rounded-xl border border-white/5">
      <span className={`text-sm ${completed ? 'text-gray-300' : 'text-gray-500'}`}>{label}</span>
      <CheckCircle2 size={18} className={completed ? 'text-orange-500' : 'text-gray-700'} />
    </div>
  );
}