"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { TrendingUp, Plus, ChevronRight, Activity, Scale, X } from 'lucide-react';

export default function ProgressPage() {
  // 1. STATE FOR LOGS (Working Mock Data)
  const [logs, setLogs] = useState([
    { id: "1", date: "Oct 12, 2025", weight: "78", bodyFat: "18", muscleMass: "35" },
    { id: "2", date: "Sept 28, 2025", weight: "80", bodyFat: "19", muscleMass: "34.5" },
  ]);

  // 2. STATE FOR MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    bodyFat: '',
    muscleMass: ''
  });

  // 3. HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLog = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      weight: formData.weight,
      bodyFat: formData.bodyFat,
      muscleMass: formData.muscleMass
    };
    
    setLogs([newLog, ...logs]); // Naya log sabse upar add hoga
    setIsModalOpen(false); // Modal close
    setFormData({ weight: '', bodyFat: '', muscleMass: '' }); // Form clear
  };

  return (
    <div className="space-y-6 relative">
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#020617] p-6 rounded-2xl border border-white/5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2 text-white">
            <TrendingUp className="text-orange-500" size={22} />
            My Progress
          </h1>
          <p className="text-sm text-gray-400 mt-1">Track your transformation journey</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2"
        >
          <Plus size={18} /> Add Log
        </button>
      </div>

      {/* QUICK STATS (Dynamic based on last log) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Current Weight" value={`${logs[0]?.weight || 0} kg`} icon={<Scale className="text-orange-500" />} />
        <StatCard label="Body Fat" value={`${logs[0]?.bodyFat || 0}%`} icon={<Activity className="text-orange-500" />} />
        <StatCard label="Total Logs" value={logs.length.toString()} icon={<TrendingUp className="text-orange-500" />} />
      </div>

      {/* LOGS TABLE */}
      <div className="bg-[#0b1220] rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-5 border-b border-white/5 text-white font-semibold">Progress History</div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#020617] text-gray-400 text-[11px] uppercase tracking-widest">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Weight</th>
                <th className="px-6 py-4">Body Fat %</th>
                <th className="px-6 py-4">Muscle Mass</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.02] transition group">
                  <td className="px-6 py-4 text-sm text-gray-200">{log.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{log.weight}kg</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{log.bodyFat}%</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{log.muscleMass}kg</td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/dashboard/member/progress/${log.id}`} className="text-orange-500 hover:bg-orange-500/10 p-2 rounded-lg inline-block">
                      <ChevronRight size={18} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0b1220] border border-white/10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Log Today's Stats</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="text-xs text-gray-400 uppercase font-bold mb-1 block">Weight (kg)</label>
                <input 
                  required name="weight" type="number" step="0.1" value={formData.weight} onChange={handleChange}
                  className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                  placeholder="e.g. 75.5"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 uppercase font-bold mb-1 block">Body Fat %</label>
                  <input 
                    name="bodyFat" type="number" value={formData.bodyFat} onChange={handleChange}
                    className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                    placeholder="e.g. 15"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-bold mb-1 block">Muscle Mass (kg)</label>
                  <input 
                    name="muscleMass" type="number" value={formData.muscleMass} onChange={handleChange}
                    className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                    placeholder="e.g. 32"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition mt-4 shadow-lg shadow-orange-500/20"
              >
                Save Progress
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#0b1220] p-5 rounded-2xl border border-white/5">
      <div className="p-2 bg-white/5 w-fit rounded-lg mb-4">{icon}</div>
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}