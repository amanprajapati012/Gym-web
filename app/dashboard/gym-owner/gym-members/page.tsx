"use client";

import {
  Users,
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  CheckCircle2,
  XCircle,
  AlertCircle,
  CreditCard,
  Mail,
  Phone
} from "lucide-react";

export default function OwnerMemberManagement() {
  const members = [
    {
      id: "M101",
      name: "Rahul Sharma",
      plan: "Annual Gold",
      status: "Active",
      expiry: "15 May 2026",
      lastSeen: "Today",
      payment: "Paid",
    },
    {
      id: "M102",
      name: "Sanya Malhotra",
      plan: "Monthly Silver",
      status: "Expired",
      expiry: "20 April 2026",
      lastSeen: "3 Days ago",
      payment: "Pending",
    },
    {
      id: "M103",
      name: "Vicky Kaushal",
      plan: "Quarterly",
      status: "Active",
      expiry: "10 June 2026",
      lastSeen: "Yesterday",
      payment: "Paid",
    },
    {
      id: "M104",
      name: "Pooja Hegde",
      plan: "Monthly Silver",
      status: "Pending",
      expiry: "01 May 2026",
      lastSeen: "Today",
      payment: "Partial",
    },
  ];

  return (
    <div className="space-y-6 text-white">
      
      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Member Directory</h1>
          <p className="text-gray-400 text-sm">Track, manage and communicate with your gym members.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-semibold transition">
            Export List
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2">
            <UserPlus size={18} /> New Member
          </button>
        </div>
      </div>

      {/* QUICK STATS FOR MEMBERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Members", val: "1,240", color: "text-blue-400" },
          { label: "Active Now", val: "85", color: "text-green-400" },
          { label: "Expired Plans", val: "12", color: "text-red-400" },
          { label: "New this month", val: "+42", color: "text-orange-400" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#0b1220] p-4 rounded-2xl border border-white/5">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{stat.label}</p>
            <h3 className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.val}</h3>
          </div>
        ))}
      </div>

      {/* SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-4 items-center bg-[#0b1220] p-4 rounded-2xl border border-white/5">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, ID, or phone number..." 
            className="w-full bg-[#020617] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500 transition"
          />
        </div>
        <div className="flex gap-2 w-full lg:w-auto">
          <select className="bg-[#020617] border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Expired</option>
          </select>
          <select className="bg-[#020617] border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-500">
            <option>All Plans</option>
            <option>Annual</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>

      {/* MEMBERS TABLE */}
      <div className="bg-[#0b1220] rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#020617]/50 text-gray-400 uppercase text-[10px] font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Member</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Expiry Date</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center font-bold text-xs">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-[10px] text-gray-500 tracking-tight">ID: {member.id} • Seen {member.lastSeen}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{member.plan}</td>
                  <td className="px-6 py-4">
                    {member.status === "Active" && (
                      <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                        <CheckCircle2 size={14} /> Active
                      </span>
                    )}
                    {member.status === "Expired" && (
                      <span className="flex items-center gap-1.5 text-red-400 text-xs font-semibold">
                        <XCircle size={14} /> Expired
                      </span>
                    )}
                    {member.status === "Pending" && (
                      <span className="flex items-center gap-1.5 text-yellow-400 text-xs font-semibold">
                        <AlertCircle size={14} /> Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-400">{member.expiry}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      member.payment === 'Paid' ? 'border-green-500/20 text-green-500 bg-green-500/5' :
                      member.payment === 'Pending' ? 'border-red-500/20 text-red-500 bg-red-500/5' :
                      'border-yellow-500/20 text-yellow-500 bg-yellow-500/5'
                    }`}>
                      {member.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-lg transition" title="Message">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 hover:bg-orange-500/10 text-orange-500 rounded-lg transition" title="Call">
                        <Phone size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 text-gray-400 rounded-lg transition">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* PAGINATION */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
          <p>Showing 1-4 of 1,240 members</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white/5 rounded hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-white/5 rounded hover:bg-white/10">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}