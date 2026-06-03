"use client";

import {
  ShieldCheck,
  Lock,
  Key,
  Eye,
  ShieldAlert,
  Fingerprint,
  Globe,
  Database,
  History,
  AlertTriangle,
  RefreshCcw,
  UserX
} from "lucide-react";

export default function SaasSecuritySection() {
  const securityLogs = [
    { event: "Unusual Login Attempt", user: "Admin (Titan Gym)", location: "Russia", time: "5 mins ago", severity: "High" },
    { event: "API Key Regenerated", user: "Owner (Genz Fitness)", location: "Mumbai, IN", time: "1 hour ago", severity: "Low" },
    { event: "Database Backup Success", user: "System Auto", location: "AWS-West", time: "3 hours ago", severity: "Normal" },
    { event: "Multiple Failed Passwords", user: "User-8821", location: "Delhi, IN", time: "6 hours ago", severity: "Medium" },
  ];

  return (
    <div className="space-y-8 text-white p-2">
      
      {/* SECURITY HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="text-green-500" size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500">Security Core v2.0</span>
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">Security & Oversight</h1>
          <p className="text-gray-400 text-sm">Manage platform-wide firewalls, encryption keys, and access logs.</p>
        </div>
        
        <button className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-3 rounded-2xl text-xs font-black uppercase hover:bg-red-500 hover:text-white transition-all flex items-center gap-2 shadow-lg shadow-red-500/10">
          <AlertTriangle size={18} /> Emergency Lockout
        </button>
      </div>

      {/* QUICK STATUS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0b1220] p-6 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group">
          <div className="p-4 bg-green-500/10 rounded-3xl text-green-500 group-hover:scale-110 transition">
            <ShieldCheck size={32} />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase">Firewall Status</p>
            <h3 className="text-xl font-black italic">ACTIVE & SHIELDED</h3>
          </div>
        </div>
        
        <div className="bg-[#0b1220] p-6 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group">
          <div className="p-4 bg-blue-500/10 rounded-3xl text-blue-500 group-hover:scale-110 transition">
            <Lock size={32} />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase">Data Encryption</p>
            <h3 className="text-xl font-black italic">AES-256 BIT</h3>
          </div>
        </div>

        <div className="bg-[#0b1220] p-6 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group">
          <div className="p-4 bg-orange-500/10 rounded-3xl text-orange-500 group-hover:scale-110 transition">
            <Globe size={32} />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase">Global IP Whitelist</p>
            <h3 className="text-xl font-black italic">14 REGIONS</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LIVE THREAT LOGS */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-[3rem] border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
            <h3 className="text-xl font-bold italic flex items-center gap-2 uppercase tracking-tighter">
              <History className="text-orange-500" size={20} /> Access & Audit Logs
            </h3>
            <button className="text-[10px] font-black uppercase text-gray-500 hover:text-white flex items-center gap-2">
              <RefreshCcw size={12} /> Clear Filter
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/20 text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-4">Event Description</th>
                  <th className="px-8 py-4">Identity / Location</th>
                  <th className="px-8 py-4">Severity</th>
                  <th className="px-8 py-4 text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm font-medium">
                {securityLogs.map((log, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <ShieldAlert size={14} className={log.severity === 'High' ? 'text-red-500' : 'text-blue-500'} />
                        {log.event}
                      </div>
                    </td>
                    <td className="px-8 py-5 italic text-gray-400">
                      {log.user} <span className="mx-2 text-gray-700">|</span> {log.location}
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        log.severity === 'High' ? 'bg-red-500/20 text-red-500' : 
                        log.severity === 'Medium' ? 'bg-orange-500/20 text-orange-500' : 'bg-green-500/20 text-green-500'
                      }`}>
                        {log.severity}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right text-gray-500 text-xs">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECURITY ACTIONS SIDEBAR */}
        <div className="space-y-6">
          
          {/* AUTHENTICATION CONTROLS */}
          <div className="bg-[#0b1220] p-8 rounded-[3rem] border border-white/5">
            <h3 className="text-lg font-bold italic mb-6 flex items-center gap-2">
              <Fingerprint className="text-purple-500" size={20} /> Access Control
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-xs font-bold text-gray-400">2FA Enforcement</span>
                <div className="w-10 h-5 bg-orange-500 rounded-full relative shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                   <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-xs font-bold text-gray-400">Session Timeout</span>
                <span className="text-xs font-black text-white italic">30 MINS</span>
              </div>
            </div>
          </div>

          {/* DATABASE SNAPSHOT */}
          <div className="bg-gradient-to-br from-[#020617] to-[#0f172a] p-8 rounded-[3rem] border border-white/5 border-dashed">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-blue-400" size={20} />
              <h3 className="text-lg font-bold italic">Cloud Backup</h3>
            </div>
            <p className="text-[10px] text-gray-500 mb-6 font-bold uppercase tracking-widest leading-relaxed">
              Last backup synced to AWS Mumbai S3 Bucket. Next cycle in 4 hours.
            </p>
            <button className="w-full py-3 bg-blue-500/10 border border-blue-500/40 text-blue-400 rounded-2xl text-[10px] font-black uppercase hover:bg-blue-500 hover:text-white transition-all tracking-widest">
              Trigger Manual Backup
            </button>
          </div>

          {/* BAN / BLACKLIST ACTIONS */}
          <div className="bg-red-500/5 p-8 rounded-[3rem] border border-red-500/10">
            <h3 className="text-lg font-bold italic text-red-500 mb-4 flex items-center gap-2">
              <UserX size={20} /> IP Blacklist
            </h3>
            <div className="flex gap-2">
               <input type="text" placeholder="Add IP Address..." className="bg-black border border-red-500/20 rounded-xl px-4 py-2 text-xs flex-1 outline-none focus:border-red-500" />
               <button className="bg-red-500 p-2.5 rounded-xl"><Key size={14}/></button>
            </div>
            <p className="text-[8px] text-red-500/40 mt-3 font-bold uppercase tracking-widest">Warning: Blacklisted IPs cannot access Zyrafit Portal.</p>
          </div>

        </div>
      </div>

    </div>
  );
}