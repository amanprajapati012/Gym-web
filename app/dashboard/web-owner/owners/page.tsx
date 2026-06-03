"use client";

import {
  UserCheck,
  ShieldAlert,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  Key,
  Ban,
  CheckCircle,
  ExternalLink
} from "lucide-react";

export default function SaaSGymOwnerManagement() {
  const owners = [
    {
      id: "OWN-771",
      name: "Rishabh Singh",
      gym: "Zyrafit HQ",
      email: "rishabh@zyrafit.com",
      joined: "12 Oct 2025",
      subscription: "Enterprise",
      status: "Verified",
    },
    {
      id: "OWN-772",
      name: "Aman Raj",
      gym: "Power House",
      email: "aman@gym.com",
      joined: "05 Jan 2026",
      subscription: "Pro",
      status: "Pending",
    },
    {
      id: "OWN-773",
      name: "Sumit Vyas",
      gym: "Gold's Fitness",
      email: "sumit@v.com",
      joined: "20 Feb 2026",
      subscription: "Basic",
      status: "Verified",
    },
    {
      id: "OWN-774",
      name: "Neha Dixit",
      gym: "Oxygen Gym",
      email: "neha@oxy.com",
      joined: "15 April 2026",
      subscription: "Enterprise",
      status: "Suspended",
    },
  ];

  return (
    <div className="space-y-6 text-white p-2">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black italic tracking-tight uppercase">Owner Management</h1>
          <p className="text-gray-400 text-sm">Review gym owners, manage account security and subscription tiers.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-bold transition">
            Export Owner Data
          </button>
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-4 bg-[#0b1220] p-4 rounded-2xl border border-white/5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by owner name, gym name or email..." 
            className="w-full bg-[#020617] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500 transition"
          />
        </div>
        <div className="flex gap-2">
          <select className="bg-[#020617] border border-white/10 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-orange-500 font-bold">
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
          <button className="bg-[#020617] border border-white/10 p-2.5 rounded-xl text-gray-400">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* OWNERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {owners.map((owner) => (
          <div key={owner.id} className="bg-[#0b1220] rounded-3xl border border-white/5 p-6 flex flex-col group hover:border-white/20 transition-all">
            
            {/* TOP CARD ACTIONS */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${
                owner.status === 'Verified' ? 'bg-green-500/10 text-green-500' : 
                owner.status === 'Suspended' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
              }`}>
                <UserCheck size={24} />
              </div>
              <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 transition">
                <MoreVertical size={18} />
              </button>
            </div>

            {/* INFO */}
            <div className="mb-6">
              <h3 className="text-lg font-bold">{owner.name}</h3>
              <p className="text-orange-500 text-xs font-black italic uppercase tracking-widest">{owner.gym}</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <Mail size={14} className="text-gray-600" />
                {owner.email}
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <Calendar size={14} className="text-gray-600" />
                Joined: {owner.joined}
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <ShieldAlert size={14} className="text-gray-600" />
                Plan: <span className="text-white font-bold">{owner.subscription}</span>
              </div>
            </div>

            {/* STATUS & QUICK ACTIONS */}
            <div className="mt-auto space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/40 rounded-2xl border border-white/5">
                <span className="text-[10px] font-black uppercase text-gray-500">Account Status</span>
                <span className={`text-[10px] font-black uppercase ${
                  owner.status === 'Verified' ? 'text-green-500' : 
                  owner.status === 'Suspended' ? 'text-red-500' : 'text-yellow-500'
                }`}>
                  {owner.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-tighter transition">
                  <Key size={12} /> Reset Pwd
                </button>
                <button className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tighter transition ${
                  owner.status === 'Suspended' ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20' : 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
                }`}>
                  {owner.status === 'Suspended' ? <CheckCircle size={12} /> : <Ban size={12} />} 
                  {owner.status === 'Suspended' ? 'Unban' : 'Suspend'}
                </button>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                Login as Owner <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ))}

        {/* ADD NEW OWNER PLACEHOLDER */}
        <button className="border-2 border-dashed border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 group hover:border-orange-500/40 hover:bg-orange-500/5 transition-all min-h-[400px]">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
            <UserCheck size={32} />
          </div>
          <div className="text-center">
            <h4 className="font-black italic text-gray-400 group-hover:text-white transition uppercase">Manual Onboarding</h4>
            <p className="text-xs text-gray-600 mt-1 max-w-[150px]">Create a new gym owner account manually</p>
          </div>
        </button>
      </div>

    </div>
  );
}