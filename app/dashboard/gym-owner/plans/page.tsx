"use client";

import {
  Plus,
  CalendarDays,
  CheckCircle2,
  Settings,
  Trash2,
  Users2,
  Zap,
  Clock3,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function DayBasedPlans() {
  const plans = [
    {
      id: 1,
      title: "Quick Starter",
      days: 15,
      price: "1,200",
      activeMembers: 12,
      intensity: "Basic",
      features: ["Gym Access", "Locker"],
      tag: "Trial"
    },
    {
      id: 2,
      title: "Transformation Sprint",
      days: 45,
      price: "4,500",
      activeMembers: 84,
      intensity: "High",
      features: ["Personal Trainer", "Diet Chart", "Protein Bar Access"],
      tag: "Most Popular"
    },
    {
      id: 3,
      title: "Elite Warrior",
      days: 100,
      price: "9,000",
      activeMembers: 36,
      intensity: "Pro",
      features: ["All Gym Access", "Unlimited Steam", "Recovery Zone"],
      tag: "Best Value"
    }
  ];

  return (
    <div className="space-y-8 text-white p-2">
      
      {/* UNIQUE HEADER */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <CalendarDays size={120} />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-black italic tracking-tighter">FLEXI-DAYS PLANS</h1>
          <p className="text-gray-400 mt-2 max-w-md">
            Don't limit members to months. Create custom day-based validity plans for maximum flexibility.
          </p>
          <button className="mt-6 bg-white text-black hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2">
            <Plus size={18} /> Design New Day-Plan
          </button>
        </div>
      </div>

      {/* PLANS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.id} className="relative group">
            {/* PLAN CARD */}
            <div className="bg-[#0b1220] border border-white/5 rounded-[2.5rem] p-8 hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col shadow-2xl">
              
              {/* TOP SECTION */}
              <div className="flex justify-between items-start mb-8">
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 text-orange-500 border border-orange-500/20`}>
                  {plan.tag}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition text-gray-400"><Settings size={14}/></button>
                </div>
              </div>

              {/* DAYS DISPLAY (BIG & BOLD) */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-orange-500 mb-1">
                  <Zap size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-widest">{plan.intensity} Level</span>
                </div>
                <h2 className="text-5xl font-black flex items-baseline gap-2">
                  {plan.days} <span className="text-xl font-normal text-gray-500 italic">Days</span>
                </h2>
                <p className="text-gray-400 font-medium mt-1">{plan.title}</p>
              </div>

              {/* PRICE TAG */}
              <div className="bg-[#020617] rounded-2xl p-4 mb-8 flex justify-between items-center border border-white/5">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Price</p>
                  <p className="text-xl font-bold italic">₹{plan.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Avg/Day</p>
                  <p className="text-sm font-semibold text-green-400">₹{(parseInt(plan.price.replace(',',''))/plan.days).toFixed(0)}</p>
                </div>
              </div>

              {/* FEATURES */}
              <div className="space-y-4 flex-1">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                    <ShieldCheck size={16} className="text-orange-500 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                    <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{f}</span>
                  </div>
                ))}
              </div>

              {/* BOTTOM ANALYTICS */}
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0b1220] bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                      U{i}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#0b1220] bg-orange-500 flex items-center justify-center text-[10px] font-bold">
                    +{plan.activeMembers}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Retention</p>
                  <p className="text-xs font-bold text-green-400">+12%</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* QUICK SETTINGS TABLE FOR DAYS */}
      <div className="bg-[#0b1220] rounded-[2rem] border border-white/5 p-8">
        <div className="flex items-center gap-3 mb-8">
          <Clock3 className="text-orange-500" />
          <h2 className="text-xl font-bold tracking-tighter uppercase italic">Expiring Soon (Next 7 Days)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Rahul Singh", daysLeft: 2, plan: "45 Days Plan" },
            { name: "Suman Devi", daysLeft: 5, plan: "100 Days Plan" },
          ].map((m, i) => (
            <div key={i} className="bg-[#020617] p-4 rounded-2xl border border-white/5 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-black">!</div>
                <div>
                  <h4 className="font-bold text-sm">{m.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-medium">{m.plan}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-red-400">{m.daysLeft} Days Left</p>
                <button className="text-[10px] text-orange-500 hover:underline font-bold uppercase mt-1">Remind</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}