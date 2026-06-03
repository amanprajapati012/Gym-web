"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, CheckCircle2, Clock, MapPin, Fingerprint, ChevronLeft, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AttendancePage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hasMarkedToday, setHasMarkedToday] = useState(false);

  // Mock Data: In real app, this will come from DB
  const attendanceDays = {
    "2026-04-19": "present",
    "2026-04-18": "absent",
    "2026-04-15": "present",
  };

  const handleMarkAttendance = () => {
    toast.promise(
      new Promise((res) => setTimeout(res, 2000)),
      {
        loading: 'Syncing with gym network...',
        success: <b>Check-in successful! 🔥</b>,
        error: <b>Error marking attendance.</b>,
      },
      { style: { background: '#0b1220', color: '#fff', border: '1px solid #ffffff10' } }
    ).then(() => setHasMarkedToday(true));
  };

  // --- Calendar Logic ---
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });

  const renderDays = () => {
    const cells = [];
    for (let i = 0; i < firstDayOfMonth; i++) cells.push(<div key={`empty-${i}`} />);
    
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const status = attendanceDays[dateStr as keyof typeof attendanceDays];
      
      cells.push(
        <Link 
          href={`/dashboard/member/attendance/${dateStr}`} 
          key={d}
          className={`h-12 flex flex-col items-center justify-center rounded-xl border transition-all
            ${status === 'present' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 
              status === 'absent' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 
              'bg-white/5 border-transparent text-gray-500 hover:border-white/10'}`}
        >
          <span className="text-xs font-bold">{d}</span>
          {status === 'present' && <div className="w-1 h-1 bg-emerald-500 rounded-full mt-1" />}
        </Link>
      );
    }
    return cells;
  };

  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div className="bg-[#0b1220] p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <CalendarIcon className="text-orange-500" /> Attendance Tracker
          </h1>
          <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
            <MapPin size={14} className="text-orange-500" /> Fatehpur, UP
          </p>
        </div>

        {hasMarkedToday ? (
          <div className="bg-emerald-500/10 text-emerald-500 px-6 py-3 rounded-2xl font-bold border border-emerald-500/10 flex items-center gap-2">
            <CheckCircle2 size={18} /> In-Gym Now
          </div>
        ) : (
          <button onClick={handleMarkAttendance} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-2xl transition flex items-center gap-2 shadow-lg shadow-orange-500/20">
            <Fingerprint size={18} /> Mark Today
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CALENDAR CARD */}
        <div className="lg:col-span-2 bg-[#0b1220] p-6 rounded-3xl border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-bold">{monthName} {currentMonth.getFullYear()}</h2>
            <div className="flex gap-2">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="p-2 bg-white/5 rounded-lg hover:bg-white/10"><ChevronLeft size={16}/></button>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="p-2 bg-white/5 rounded-lg hover:bg-white/10"><ChevronRight size={16}/></button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['S','M','T','W','T','F','S'].map(day => (
              <span key={day} className="text-[10px] font-black text-gray-600">{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {renderDays()}
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="space-y-4">
          <StatMini label="Monthly Consistency" value="78%" color="text-orange-500" />
          <StatMini label="Days This Month" value="15 / 30" color="text-emerald-500" />
          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-6 rounded-3xl border border-white/5">
            <h4 className="text-white font-bold text-sm mb-2 italic">Trainer's Note:</h4>
            <p className="text-gray-400 text-xs leading-relaxed">"You missed 2 days last week. Consistency is key for muscle growth. Let's aim for a 5-day streak!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatMini({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{label}</p>
      <p className={`text-2xl font-black mt-1 ${color}`}>{value}</p>
    </div>
  );
}