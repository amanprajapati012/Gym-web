"use client";

import {
  Settings,
  Bell,
  Lock,
  Smartphone,
  Globe,
  CreditCard,
  UserCircle,
  LogOut,
  ShieldCheck,
  Save,
  Trash2,
  Camera
} from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-8 text-white p-2 max-w-6xl mx-auto">
      
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-black italic tracking-tighter uppercase">Gym Settings</h1>
        <p className="text-gray-400 text-sm">Configure your gym identity, security, and member preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="space-y-2">
          {[
            { label: "General", icon: Settings, active: true },
            { label: "Account", icon: UserCircle, active: false },
            { label: "Notifications", icon: Bell, active: false },
            { label: "Security", icon: Lock, active: false },
            { label: "Billing", icon: CreditCard, active: false },
            { label: "App Settings", icon: Smartphone, active: false },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                item.active 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-500/10 transition-all">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* MAIN SETTINGS FORM */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* GYM PROFILE CARD */}
          <div className="bg-[#0b1220] rounded-[2.5rem] border border-white/5 p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <UserCircle className="text-orange-500" /> Gym Profile
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative group">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-3xl font-black shadow-2xl">
                  ZF
                </div>
                <button className="absolute -bottom-2 -right-2 p-2 bg-[#020617] border border-white/10 rounded-xl text-orange-500 hover:scale-110 transition">
                  <Camera size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 w-full">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Gym Name</label>
                  <input type="text" defaultValue="Zyrafit HQ" className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Contact Email</label>
                  <input type="email" defaultValue="admin@zyrafit.com" className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Location Address</label>
                  <input type="text" defaultValue="Street 10, Fitness Plaza, New Delhi" className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition" />
                </div>
              </div>
            </div>
          </div>

          {/* SYSTEM PREFERENCES */}
          <div className="bg-[#0b1220] rounded-[2.5rem] border border-white/5 p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-green-500" /> Business Rules
            </h2>
            
            <div className="space-y-6">
              {[
                { label: "Automatic Dues Reminder", desc: "Send WhatsApp/SMS to members when plan expires.", enabled: true },
                { label: "Member Self Check-In", desc: "Allow members to scan QR code for attendance.", enabled: true },
                { label: "Public Profile", desc: "Make your gym visible on the Zyrafit Marketplace.", enabled: false },
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div>
                    <h4 className="text-sm font-bold">{setting.label}</h4>
                    <p className="text-xs text-gray-500 mt-1">{setting.desc}</p>
                  </div>
                  <button className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${setting.enabled ? 'bg-orange-500' : 'bg-gray-800'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${setting.enabled ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* DANGER ZONE */}
          <div className="bg-red-500/5 rounded-[2.5rem] border border-red-500/10 p-8">
            <h2 className="text-xl font-bold text-red-500 mb-2 italic uppercase tracking-tighter">Danger Zone</h2>
            <p className="text-xs text-red-500/60 mb-6">Irreversible actions that affect your entire business database.</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black rounded-xl hover:bg-red-500 transition-all hover:text-white">
                RESET ATTENDANCE LOGS
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-white/40 text-xs font-black rounded-xl hover:bg-red-600 hover:text-white transition-all">
                DELETE GYM ACCOUNT
              </button>
            </div>
          </div>

          {/* SAVE BUTTON FLOAT */}
          <div className="flex justify-end pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-sm font-black italic uppercase tracking-widest transition-all flex items-center gap-3 shadow-2xl shadow-orange-500/40">
              <Save size={20} /> Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}