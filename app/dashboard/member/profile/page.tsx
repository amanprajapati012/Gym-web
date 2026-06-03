"use client";

import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Camera, Edit2, 
  Calendar, CreditCard, ShoppingBag, CheckCircle2, 
  Clock, LogOut, ChevronRight, Weight, Ruler
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function MemberProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Megha Na Patel",
    email: "megha@example.com",
    phone: "+91 98765 43210",
    location: "Fatehpur, UP",
    weight: "65kg",
    height: "5'6\""
  });

  const [orders] = useState([
    { id: "#ORD-9921", item: "Nitro Tech Whey Gold", date: "15 Apr 2026", status: "Picked Up", price: "₹5,499" },
    { id: "#ORD-8812", item: "C4 Pre-Workout", date: "02 Apr 2026", status: "Ready for Pickup", price: "₹2,100" }
  ]);

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      
      {/* 1. PROFILE HEADER & AVATAR */}
      <div className="bg-[#0b1220] rounded-[2.5rem] border border-white/5 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-0" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-xl text-[#020617] hover:scale-110 transition">
              <Camera size={18} />
            </button>
          </div>

          <div className="text-center md:text-left space-y-2 flex-grow">
            <h1 className="text-3xl font-black text-white">{userData.name}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 text-sm font-medium">
              <span className="flex items-center gap-1.5"><Mail size={14} /> {userData.email}</span>
              <span className="flex items-center gap-1.5"><Phone size={14} /> {userData.phone}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {userData.location}</span>
            </div>
          </div>

          <button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${
              isEditing ? 'bg-emerald-500 text-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
            }`}
          >
            {isEditing ? <><CheckCircle2 size={18} /> Save Changes</> : <><Edit2 size={18} /> Edit Profile</>}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. PLAN & MEMBERSHIP STATUS */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-500/10">
            <div className="flex justify-between items-start mb-6">
               <div className="bg-white/20 p-3 rounded-2xl"><CreditCard size={24} /></div>
               <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Pro Plan</span>
            </div>
            <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-1">Expires In</p>
            <h2 className="text-4xl font-black mb-4">24 Days</h2>
            
            <div className="w-full bg-black/20 h-2 rounded-full mb-4">
               <div className="bg-white w-[70%] h-full rounded-full" />
            </div>
            <p className="text-orange-100 text-xs font-medium">Expiry Date: <b className="text-white">May 14, 2026</b></p>
          </div>

          {/* Fitness Mini Stats */}
          <div className="bg-[#0b1220] p-6 rounded-3xl border border-white/5 grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Weight</p>
                <div className="flex items-center gap-2">
                   <Weight className="text-orange-500" size={16} />
                   <span className="text-white font-bold">{userData.weight}</span>
                </div>
             </div>
             <div className="space-y-1 border-l border-white/5 pl-4">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Height</p>
                <div className="flex items-center gap-2">
                   <Ruler className="text-orange-500" size={16} />
                   <span className="text-white font-bold">{userData.height}</span>
                </div>
             </div>
          </div>
        </div>

        {/* 3. ORDER HISTORY & RECENT ACTIVITY */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0b1220] rounded-[2.5rem] border border-white/5 overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
               <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="text-orange-500" size={20} /> Order History
               </h3>
               <button className="text-xs text-orange-500 font-bold hover:underline">View All</button>
            </div>
            
            <div className="divide-y divide-white/5">
              {orders.map((order, i) => (
                <div key={i} className="p-8 flex items-center justify-between group hover:bg-white/[0.01] transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{order.item}</p>
                      <p className="text-gray-500 text-xs mt-1">{order.id} • {order.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black text-sm mb-1">{order.price}</p>
                    <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
                      order.status === 'Picked Up' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/10' : 'bg-orange-500/10 text-orange-500 border border-orange-500/10'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DANGER ZONE / SETTINGS */}
          <div className="bg-red-500/5 rounded-3xl border border-red-500/10 p-6 flex items-center justify-between">
            <div>
               <h4 className="text-red-500 font-bold text-sm">Account Security</h4>
               <p className="text-red-500/50 text-xs">Logged in since 2 hours ago from Fatehpur</p>
            </div>
            <button className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-500/10 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}