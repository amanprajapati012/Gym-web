"use client";

import {
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function OwnerAttendance() {
  const recentCheckIns = [
    { name: "Rahul Sharma", id: "ZY-101", time: "06:15 AM", type: "Member", status: "Present" },
    { name: "Aman Raj", id: "TR-05", time: "07:00 AM", type: "Trainer", status: "Late" },
    { name: "Sanya Malhotra", id: "ZY-102", time: "07:10 AM", type: "Member", status: "Present" },
    { name: "Vikas Gupta", id: "ZY-105", time: "07:30 AM", type: "Member", status: "Present" },
  ];

  return (
    <div className="space-y-6 text-white p-2">
      
      {/* HEADER WITH DATE */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Daily Attendance</h1>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <Calendar size={14} /> Wednesday, 22 April 2026
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-[#0b1220] border border-white/10 px-4 py-2 rounded-xl text-sm flex items-center justify-center gap-2">
            <Calendar size={16} /> History
          </button>
          <button className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2">
            <CheckCircle size={16} /> Manual Punch-In
          </button>
        </div>
      </div>

      {/* ATTENDANCE SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Total Present</p>
              <h2 className="text-2xl font-bold mt-1">142</h2>
            </div>
            <Users className="text-blue-500" size={20} />
          </div>
          <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[70%]" />
          </div>
          <p className="text-[10px] text-gray-500 mt-2">70% of total strength</p>
        </div>

        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Trainers On Duty</p>
              <h2 className="text-2xl font-bold mt-1">12/15</h2>
            </div>
            <MapPin className="text-green-500" size={20} />
          </div>
          <p className="text-[10px] text-green-400 mt-4 flex items-center gap-1">
            <TrendingUp size={10} /> Full staff coverage today
          </p>
        </div>

        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Peak Hour</p>
              <h2 className="text-2xl font-bold mt-1">07 AM - 09 AM</h2>
            </div>
            <Clock className="text-orange-500" size={20} />
          </div>
          <p className="text-[10px] text-gray-500 mt-4 italic">65 Check-ins in this slot</p>
        </div>

        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Absentees</p>
              <h2 className="text-2xl font-bold mt-1">28</h2>
            </div>
            <XCircle className="text-red-500" size={20} />
          </div>
          <button className="text-[10px] text-orange-500 hover:underline mt-4">Send Reminders</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LIVE CHECK-IN FEED */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-2xl border border-white/5 flex flex-col">
          <div className="p-5 border-b border-white/5 flex justify-between items-center">
            <h2 className="font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live Check-in Feed
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
              <input 
                type="text" 
                placeholder="Search member ID..." 
                className="bg-[#020617] border border-white/10 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          <div className="p-5 space-y-4">
            {recentCheckIns.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-[#020617] rounded-xl border border-white/5 group hover:border-white/20 transition">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${item.type === 'Trainer' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'}`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{item.name}</h4>
                    <p className="text-[10px] text-gray-500">{item.id} • <span className="text-gray-400 font-medium">{item.type}</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-medium text-gray-300">{item.time}</p>
                    <p className={`text-[10px] ${item.status === 'Late' ? 'text-yellow-500' : 'text-green-500'}`}>{item.status}</p>
                  </div>
                  <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 group-hover:text-white transition">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-xs text-gray-500 hover:text-orange-500 transition border-t border-white/5">
            View Full Log
          </button>
        </div>

        {/* ATTENDANCE ANALYTICS / PEAK HOURS */}
        <div className="bg-[#0b1220] rounded-2xl border border-white/5 p-5">
          <h2 className="font-bold mb-6">Traffic Analysis</h2>
          
          <div className="space-y-6">
            {[
              { label: "Morning (6AM-10AM)", val: 85, color: "bg-orange-500" },
              { label: "Afternoon (11AM-4PM)", val: 30, color: "bg-blue-500" },
              { label: "Evening (5PM-10PM)", val: 65, color: "bg-green-500" },
            ].map((slot, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">{slot.label}</span>
                  <span className="font-bold">{slot.val}% Capacity</span>
                </div>
                <div className="h-2 bg-[#020617] rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${slot.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${slot.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-orange-500/5 border border-orange-500/10 rounded-xl">
            <h4 className="text-xs font-bold text-orange-500 mb-1">Quick Note</h4>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Evening attendance is up by 15% compared to last week. Consider adding an extra trainer for the 6PM slot.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}