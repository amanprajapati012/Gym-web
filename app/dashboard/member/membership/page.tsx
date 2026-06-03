"use client";

import React, { useState } from 'react';
import { Check, Crown, Zap, Star, CreditCard, Calendar, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

// 1. Plan Types Definition
const PLANS = [
  {
    id: 'basic',
    name: 'Starter',
    price: 999,
    duration: 1, // month
    features: ['General Gym Access', 'Locker Room', 'Basic Support'],
    color: 'border-blue-500/20',
    icon: <Zap className="text-blue-500" size={24} />
  },
  {
    id: 'pro',
    name: 'Pro Transformation',
    price: 2499,
    duration: 3,
    features: ['All Gym Access', 'Personalized Diet Plan', 'Steam Bath', 'Priority Support'],
    color: 'border-orange-500/50',
    isPopular: true,
    icon: <Star className="text-orange-500" size={24} />
  },
  {
    id: 'elite',
    name: 'Elite Athlete',
    price: 7999,
    duration: 12,
    features: ['All Gym Access', 'Personal Trainer', 'Nutritionist Support', 'Free Supplements Kit', '24/7 Access'],
    color: 'border-purple-500/50',
    icon: <Crown className="text-purple-500" size={24} />
  }
];

export default function MembershipPage() {
  // Current Membership State (Mock)
  const [currentPlan, setCurrentPlan] = useState({
    name: 'Starter',
    expiry: '2026-05-20',
    status: 'Active'
  });

  const [loading, setLoading] = useState<string | null>(null);

  const handleUpgrade = (planName: string) => {
    setLoading(planName);
    
    toast.promise(
      new Promise((res) => setTimeout(res, 2500)),
      {
        loading: `Processing payment for ${planName}...`,
        success: <b>Membership Upgraded to ${planName}! 🚀</b>,
        error: <b>Payment failed. Please try again.</b>,
      },
      {
        style: { background: '#0b1220', color: '#fff', border: '1px solid #ffffff10' }
      }
    ).then(() => {
        setLoading(null);
        setCurrentPlan({
            name: planName,
            expiry: '2027-04-20', // Annual logic example
            status: 'Active'
        });
    });
  };

  return (
    <div className="space-y-8 pb-10">
      
      {/* CURRENT STATUS HEADER */}
      <div className="bg-[#0b1220] p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
            <Crown size={120} />
        </div>
        <div className="relative z-10">
            <h2 className="text-gray-400 text-xs font-black uppercase tracking-[3px] mb-2">Your Current Status</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-white mb-2">{currentPlan.name} Plan</h1>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/10">
                            <ShieldCheck size={14} /> {currentPlan.status}
                        </span>
                        <span className="text-gray-500 flex items-center gap-1.5">
                            <Calendar size={14} /> Expires on: <b className="text-gray-300">{currentPlan.expiry}</b>
                        </span>
                    </div>
                </div>
                <button className="bg-white/5 hover:bg-white/10 text-white text-xs font-bold px-6 py-3 rounded-xl transition border border-white/5 flex items-center gap-2">
                    <CreditCard size={16} /> View Billing History
                </button>
            </div>
        </div>
      </div>

      {/* PLANS GRID */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Upgrade Your Journey</h2>
        <p className="text-gray-500 text-sm">Choose a plan that fits your transformation goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div 
            key={plan.id}
            className={`bg-[#0b1220] rounded-[2rem] p-6 border-2 transition-all duration-300 flex flex-col ${plan.color} ${plan.isPopular ? 'scale-105 shadow-2xl shadow-orange-500/10' : ''}`}
          >
            {plan.isPopular && (
                <span className="bg-orange-500 text-[#020617] text-[10px] font-black px-4 py-1 rounded-full self-start mb-4 uppercase tracking-widest">
                    Best Seller
                </span>
            )}
            
            <div className="mb-6">
                <div className="p-3 bg-white/5 w-fit rounded-2xl mb-4">{plan.icon}</div>
                <h3 className="text-xl font-black text-white">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">₹{plan.price}</span>
                    <span className="text-gray-500 text-xs font-bold">/ {plan.duration} Month</span>
                </div>
            </div>

            <div className="space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="bg-emerald-500/20 p-1 rounded-full">
                            <Check className="text-emerald-500" size={12} strokeWidth={4} />
                        </div>
                        <span className="text-sm text-gray-400 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <button 
              onClick={() => handleUpgrade(plan.name)}
              disabled={loading === plan.name}
              className={`mt-8 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all
                ${plan.isPopular 
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
            >
              {loading === plan.name ? 'Processing...' : plan.name === currentPlan.name ? 'Already Active' : 'Upgrade Now'}
            </button>
          </div>
        ))}
      </div>

      {/* SECURITY BADGE */}
      <div className="flex flex-col items-center justify-center pt-6 opacity-30">
          <ShieldCheck size={32} className="text-gray-500 mb-2" />
          <p className="text-[10px] text-gray-500 uppercase tracking-[4px] font-bold text-center">
            Secure 256-bit Encrypted Payments
          </p>
      </div>
    </div>
  );
}