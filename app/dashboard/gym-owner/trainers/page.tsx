"use client";

import {
  Users,
  Star,
  MoreVertical,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Trash2,
  Edit2
} from "lucide-react";

export default function OwnerTrainerManagement() {
  const trainers = [
    {
      id: 1,
      name: "Aman Raj",
      specialization: "Strength & Conditioning",
      members: 48,
      rating: 4.8,
      status: "Active",
      salary: "₹35,000",
      joiningDate: "12 Jan 2024",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      specialization: "Yoga & Flexibility",
      members: 32,
      rating: 4.9,
      status: "Active",
      salary: "₹28,000",
      joiningDate: "05 Feb 2024",
    },
    {
      id: 3,
      name: "Arjun Dixit",
      specialization: "Bodybuilding",
      members: 25,
      rating: 4.5,
      status: "On Leave",
      salary: "₹40,000",
      joiningDate: "20 Nov 2023",
    },
  ];

  return (
    <div className="space-y-6 text-white">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Staff & Trainers</h1>
          <p className="text-gray-400 text-sm">Manage your team, track performance and payroll.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2">
          <Plus size={18} /> Add New Trainer
        </button>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-col md:flex-row gap-4 items-center bg-[#0b1220] p-4 rounded-2xl border border-white/5">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search trainer by name or specialty..." 
            className="w-full bg-[#020617] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500/50 transition"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#020617] border border-white/10 px-4 py-2.5 rounded-xl text-sm hover:bg-white/5">
            <Filter size={16} /> Filters
          </button>
          <button className="flex-1 md:flex-none bg-[#020617] border border-white/10 px-4 py-2.5 rounded-xl text-sm hover:bg-white/5">
            Payroll Report
          </button>
        </div>
      </div>

      {/* TRAINER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-[#0b1220] rounded-2xl border border-white/5 overflow-hidden group hover:border-orange-500/30 transition-all">
            
            {/* TOP INFO */}
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-xl font-black">
                    {trainer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{trainer.name}</h3>
                    <p className="text-xs text-orange-400 font-medium uppercase tracking-wider">{trainer.specialization}</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-white transition">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* STATS STRIP */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="bg-[#020617] p-3 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-500 uppercase">Members</p>
                  <p className="font-bold text-sm">{trainer.members}</p>
                </div>
                <div className="bg-[#020617] p-3 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-500 uppercase">Rating</p>
                  <p className="font-bold text-sm text-yellow-500 flex items-center justify-center gap-1">
                    {trainer.rating} <Star size={10} fill="currentColor" />
                  </p>
                </div>
                <div className="bg-[#020617] p-3 rounded-xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-500 uppercase">Salary</p>
                  <p className="font-bold text-sm">{trainer.salary}</p>
                </div>
              </div>
            </div>

            {/* FOOTER INFO */}
            <div className="bg-[#020617]/50 p-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {trainer.status === "Active" ? (
                  <span className="flex items-center gap-1 text-[10px] text-green-400 bg-green-400/10 px-2 py-1 rounded-full font-bold">
                    <CheckCircle2 size={10} /> {trainer.status}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full font-bold">
                    <Clock size={10} /> {trainer.status}
                  </span>
                )}
                <span className="text-[10px] text-gray-500 italic">Since {trainer.joiningDate}</span>
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-blue-400 transition" title="Edit">
                  <Edit2 size={14} />
                </button>
                <button className="p-2 bg-white/5 hover:bg-red-500/20 rounded-lg text-red-500 transition" title="Delete">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

          </div>
        ))}

        {/* ADD NEW TRAINER PLACEHOLDER */}
        <button className="border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 p-6 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all text-gray-500 hover:text-orange-500 group">
          <div className="p-3 bg-white/5 rounded-full group-hover:bg-orange-500/10">
            <Plus size={24} />
          </div>
          <span className="text-sm font-semibold">Onboard New Trainer</span>
        </button>
      </div>

      {/* QUICK PAYROLL SUMMARY (Small Table) */}
      <div className="bg-[#0b1220] rounded-2xl border border-white/5 p-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Clock className="text-orange-500" size={20} /> Attendance & Payout Status
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-white/5">
                <th className="pb-3 font-medium">Trainer Name</th>
                <th className="pb-3 font-medium">Present Days</th>
                <th className="pb-3 font-medium">Late Mark</th>
                <th className="pb-3 font-medium">Payout Status</th>
                <th className="pb-3 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: "Aman Raj", days: "24/26", late: 1, status: "Ready" },
                { name: "Sneha Kapoor", days: "26/26", late: 0, status: "Processed" },
              ].map((row, i) => (
                <tr key={i} className="group">
                  <td className="py-4 font-medium">{row.name}</td>
                  <td className="py-4">{row.days}</td>
                  <td className="py-4 text-red-400">{row.late}</td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${row.status === 'Ready' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-orange-500 text-xs font-bold hover:underline">Pay Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}