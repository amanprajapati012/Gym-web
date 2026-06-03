"use client";

import React, { useState } from 'react';
import { 
  Flame, 
  Plus, 
  Camera, 
  Sparkles, 
  Search, 
  History, 
  ChevronRight,
  Info
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function CalorieTracker() {
  const [activeTab, setActiveTab] = useState('quick-add');
  
  // Data State
  const [totalCal] = useState(2000);
  const [consumed] = useState(0);

  return (
    <div className="min-h-screen bg-[#0f111a] text-white p-4 md:p-8">
      {/* 1. HEADER & TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Calorie Tracker</h1>
        <p className="text-gray-400">Track your nutrition with AI-powered tools</p>
      </div>

      {/* 2. TODAY'S PROGRESS CARD (Image 1 Style) */}
      <div className="bg-[#1a1d27] rounded-3xl p-8 mb-6 border border-white/5">
        <h2 className="text-lg font-semibold mb-6">Today's Progress</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative">
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold">{consumed}</span>
              <span className="text-gray-500 font-medium">/ {totalCal} cal</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">{totalCal - consumed} cal remaining</p>
            {/* Progress Bar */}
            <div className="w-full bg-white/5 h-2 rounded-full mt-4 overflow-hidden">
               <div className="bg-[#86efac] h-full" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Macros Boxes */}
          <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
            <MacroBox label="Protein" value={0} unit="g" />
            <MacroBox label="Carbs" value={0} unit="g" />
            <MacroBox label="Fats" value={0} unit="g" />
          </div>
        </div>
      </div>

      {/* 3. ACTION TABS (Quick Add, Scan, AI) */}
      <div className="grid grid-cols-3 gap-2 bg-[#1a1d27] p-2 rounded-2xl mb-6 border border-white/5">
        <ActionButton 
          active={activeTab === 'quick-add'} 
          onClick={() => setActiveTab('quick-add')}
          icon={<Plus size={18} />} 
          label="Quick Add" 
        />
        <ActionButton 
          active={activeTab === 'scan'} 
          onClick={() => setActiveTab('scan')}
          icon={<Camera size={18} />} 
          label="Scan Food" 
        />
        <ActionButton 
          active={activeTab === 'ai'} 
          onClick={() => setActiveTab('ai')}
          icon={<Sparkles size={18} />} 
          label="AI Dietitian" 
        />
      </div>

      {/* 4. QUICK ADD FORM (Image 2 & 3 Style) */}
      <div className="bg-[#1a1d27] rounded-3xl p-8 border border-white/5 mb-6">
        <h3 className="text-lg font-semibold mb-2">Quick Add Entry</h3>
        <p className="text-gray-500 text-sm mb-8">Enter food manually or use AI to estimate nutrition</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Food Name *</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g., Chicken breast, Apple, Rice bowl"
                className="w-full bg-[#0f111a] border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-[#86efac] transition"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                <Sparkles size={18} />
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Meal Type</label>
            <select className="w-full bg-[#0f111a] border border-white/10 rounded-xl py-3 px-4 outline-none">
              <option>Snack</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <InputGroup label="Calories *" placeholder="0" />
          <InputGroup label="Protein (g)" placeholder="0" />
          <InputGroup label="Carbs (g)" placeholder="0" />
          <InputGroup label="Fats (g)" placeholder="0" />
        </div>

        <button className="w-full bg-[#86efac] hover:bg-[#6ee7b7] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition">
          <Plus size={20} strokeWidth={3} /> Add Entry
        </button>
      </div>

      {/* 5. TODAY'S MEALS SECTION */}
      <div className="bg-[#1a1d27] rounded-3xl p-8 border border-white/5 min-h-[200px] flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold self-start mb-10 w-full text-left">Today's Meals</h3>
        <div className="text-gray-600">
          <p className="text-lg">No entries yet today. Start tracking!</p>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function MacroBox({ label, value, unit }: { label: string, value: number, unit: string }) {
  return (
    <div className="bg-[#0f111a] p-6 rounded-2xl border border-white/5 text-center min-w-[100px]">
      <p className="text-2xl font-bold">{value}{unit}</p>
      <p className="text-gray-500 text-xs mt-1 uppercase font-semibold">{label}</p>
    </div>
  );
}

function ActionButton({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition ${
        active ? 'bg-[#0f111a] text-white shadow-sm' : 'text-gray-500 hover:text-white'
      }`}
    >
      {icon} {label}
    </button>
  );
}

function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-400 uppercase">{label}</label>
      <input 
        type="number" 
        placeholder={placeholder}
        className="w-full bg-[#0f111a] border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-[#86efac]"
      />
    </div>
  );
}