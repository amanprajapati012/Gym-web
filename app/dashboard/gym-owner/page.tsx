"use client";

import {
  Users,
  TrendingUp,
  DollarSign,
  UserPlus,
  ArrowUpRight,
  MoreVertical,
  Activity,
  CreditCard,
} from "lucide-react";

export default function OwnerDashboard() {
  const stats = {
    totalRevenue: "₹4,52,000",
    revenueGrowth: "+15.4%",
    activeMembers: 1240,
    newAdmissions: 45,
    pendingPayments: 12,
    totalTrainers: 18,
  };

  const recentSales = [
    { name: "Rahul Sharma", plan: "Annual Gold", amount: "₹12,000", status: "Paid" },
    { name: "Aditi Verma", plan: "Monthly Silver", amount: "₹2,500", status: "Paid" },
    { name: "Vikas Gupta", plan: "Quarterly", amount: "₹6,000", status: "Pending" },
  ];

  return (
    <div className="space-y-6 text-white p-2">
      
      {/* OWNER HEADER & QUICK STATS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Overview</h1>
          <p className="text-gray-400 text-sm">Welcome back, here is what's happening with Zyrafit today.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2">
          <UserPlus size={18} /> Add New Member
        </button>
      </div>

      {/* PRIMARY KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5 relative overflow-hidden">
          <DollarSign className="text-green-500 mb-3" size={24} />
          <p className="text-xs text-gray-400">Total Revenue</p>
          <h2 className="text-2xl font-bold">{stats.totalRevenue}</h2>
          <span className="text-xs text-green-400 flex items-center mt-1">
            <ArrowUpRight size={12} /> {stats.revenueGrowth} this month
          </span>
        </div>

        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <Users className="text-blue-500 mb-3" size={24} />
          <p className="text-xs text-gray-400">Active Members</p>
          <h2 className="text-2xl font-bold">{stats.activeMembers}</h2>
          <p className="text-xs text-gray-500 mt-1">Across all branches</p>
        </div>

        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <Activity className="text-orange-500 mb-3" size={24} />
          <p className="text-xs text-gray-400">New Admissions</p>
          <h2 className="text-2xl font-bold">{stats.newAdmissions}</h2>
          <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
        </div>

        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <CreditCard className="text-red-500 mb-3" size={24} />
          <p className="text-xs text-gray-400">Pending Dues</p>
          <h2 className="text-2xl font-bold">{stats.pendingPayments}</h2>
          <p className="text-xs text-red-400 mt-1">Action required</p>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* RECENT TRANSACTIONS */}
        <div className="lg:col-span-2 bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-lg">Recent Transactions</h2>
            <button className="text-xs text-orange-500 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentSales.map((sale, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#020617] rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-sm">
                    {sale.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{sale.name}</p>
                    <p className="text-xs text-gray-500">{sale.plan}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{sale.amount}</p>
                  <p className={`text-[10px] uppercase tracking-wider ${sale.status === 'Paid' ? 'text-green-400' : 'text-orange-400'}`}>
                    {sale.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STAFF & PERFORMANCE */}
        <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
          <h2 className="font-semibold text-lg mb-6">Top Performing Trainers</h2>
          <div className="space-y-6">
            {[
              { name: "Aman Raj", clients: 48, performance: 95 },
              { name: "Sneha Kapoor", clients: 32, performance: 88 },
              { name: "Arjun Dixit", clients: 25, performance: 72 },
            ].map((trainer, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">{trainer.name}</span>
                  <span className="text-gray-500">{trainer.clients} Clients</span>
                </div>
                <div className="h-1.5 bg-[#020617] rounded-full">
                  <div 
                    className="h-1.5 bg-orange-500 rounded-full" 
                    style={{ width: `${trainer.performance}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-xs font-medium hover:bg-white/5 transition">
            Manage All Staff
          </button>
        </div>

      </div>

      {/* QUICK ACTION TILES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Financial Reports", icon: TrendingUp },
          { label: "Member Directory", icon: Users },
          { label: "Inventory/Stock", icon: MoreVertical },
          { label: "Gym Settings", icon: Activity },
        ].map((item, i) => (
          <button key={i} className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all group">
            <item.icon className="text-gray-400 group-hover:text-orange-500 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-300">{item.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}