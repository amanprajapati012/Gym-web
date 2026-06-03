"use client";

import {
  DollarSign,
  TrendingUp,
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  Wallet,
  Receipt,
  Download,
  Filter,
  Search,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function AdminPayments() {
  const transactions = [
    { id: "TX-9921", member: "Rahul Sharma", amount: "₹4,500", method: "UPI", status: "Completed", date: "Today, 02:30 PM" },
    { id: "TX-9920", member: "Sneha Kapoor", amount: "₹18,000", method: "Card", status: "Completed", date: "Today, 11:15 AM" },
    { id: "TX-9919", member: "Vikas Gupta", amount: "₹2,500", method: "Cash", status: "Pending", date: "Yesterday" },
    { id: "TX-9918", member: "Aditi Verma", amount: "₹6,000", method: "UPI", status: "Failed", date: "21 April" },
  ];

  return (
    <div className="space-y-6 text-white p-2">
      
      {/* REVENUE HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Financial Analytics</h1>
          <p className="text-gray-400 text-sm font-medium">Monitor your gym's revenue, transactions, and dues.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#0b1220] border border-white/10 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/5 transition flex items-center gap-2">
            <Download size={16} /> Get Report
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-orange-500/20">
            <Receipt size={16} /> New Invoice
          </button>
        </div>
      </div>

      {/* TOP ANALYTICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Collection */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 bg-orange-500/10 w-24 h-24 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all" />
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500">
              <Wallet size={24} />
            </div>
            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-lg flex items-center gap-1">
              <TrendingUp size={12} /> +12.5%
            </span>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Monthly Collection</p>
          <h2 className="text-3xl font-black mt-1">₹4,52,800</h2>
        </div>

        {/* Pending Dues */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-500">
              <AlertCircle size={24} />
            </div>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Pending Dues</p>
          <h2 className="text-3xl font-black mt-1 text-red-400">₹24,200</h2>
          <p className="text-[10px] text-gray-500 mt-2">Across 12 members</p>
        </div>

        {/* Expense/Payouts */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
              <ArrowUpRight size={24} />
            </div>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Staff Payouts</p>
          <h2 className="text-3xl font-black mt-1">₹1,15,000</h2>
          <p className="text-[10px] text-gray-500 mt-2">Paid for April cycle</p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* TRANSACTION LIST */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-[2rem] border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="font-bold text-lg italic">Recent Transactions</h2>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-48">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                <input type="text" placeholder="Search..." className="w-full bg-[#020617] border border-white/10 rounded-lg py-1.5 pl-9 text-xs focus:outline-none focus:border-orange-500" />
              </div>
              <button className="bg-[#020617] border border-white/10 p-2 rounded-lg text-gray-500 hover:text-white transition"><Filter size={14}/></button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-black/20">
                <tr>
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Member</th>
                  <th className="px-6 py-4">Method</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-white/[0.02] transition">
                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{tx.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold">{tx.member}</p>
                      <p className="text-[10px] text-gray-500">{tx.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 text-gray-400">
                        <CreditCard size={14} /> {tx.method}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                        tx.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                        tx.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-black">{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full py-4 text-xs font-bold text-gray-500 hover:text-orange-500 transition-all border-t border-white/5">
            SEE ALL TRANSACTIONS
          </button>
        </div>

        {/* REVENUE BY SOURCE */}
        <div className="space-y-6">
          <div className="bg-[#0b1220] p-6 rounded-[2rem] border border-white/5">
            <h2 className="font-bold text-lg mb-6 italic">Payment Modes</h2>
            <div className="space-y-5">
              {[
                { mode: "UPI / QR Code", percentage: 65, color: "bg-orange-500" },
                { mode: "Cash Payments", percentage: 20, color: "bg-blue-500" },
                { mode: "Card / POS", percentage: 15, color: "bg-green-500" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400 font-medium">{item.mode}</span>
                    <span className="font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-1.5 bg-[#020617] rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-[2rem] shadow-xl shadow-orange-500/10">
            <h3 className="text-lg font-black italic text-white uppercase">Growth Tip</h3>
            <p className="text-xs text-white/80 mt-2 leading-relaxed">
              UPI payments have increased by 40% this month. Ensure your QR code is clearly visible at the front desk.
            </p>
            <button className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl text-[10px] font-black uppercase tracking-tighter transition">
              Analysis Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}