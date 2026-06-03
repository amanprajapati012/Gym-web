"use client";

import React, { useState } from 'react';
import { ShoppingBag, Star, Zap, CheckCircle2, CreditCard, Package, Info } from 'lucide-react';
import toast from 'react-hot-toast';

// 1. Mock Data (In reality, this comes from your Gym Owner's DB)
const SUPPLEMENTS = [
  {
    id: 'prod_1',
    name: 'Nitro Tech Whey Gold',
    brand: 'MuscleTech',
    price: 5499,
    image: 'https://images.unsplash.com/photo-1593095191071-82b0fdd64a18?auto=format&fit=crop&q=80&w=300',
    tags: ['Muscle Gain', 'High Protein'],
    rating: 4.8
  },
  {
    id: 'prod_2',
    name: 'C4 Pre-Workout',
    brand: 'Cellucor',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=300',
    tags: ['Energy', 'Focus'],
    rating: 4.5
  },
  {
    id: 'prod_3',
    name: 'Creatine Monohydrate',
    brand: 'ON (Optimum Nutrition)',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=300',
    tags: ['Strength', 'Recovery'],
    rating: 4.9
  }
];

export default function SupplementShop() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // Razorpay Payment Function
  const handlePurchase = async (product: typeof SUPPLEMENTS[0]) => {
    setLoadingId(product.id);
    
    // Step 1: Create Order on Backend (API call)
    // const res = await fetch('/api/create-order', { method: 'POST', body: JSON.stringify({ amount: product.price }) });
    
    // Step 2: Open Razorpay (Mocking the process)
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Demo purposes
      amount: product.price * 100, // Amount in paisa
      currency: "INR",
      name: "Mom-licious Gym Store",
      description: `Purchase ${product.name}`,
      handler: function (response: any) {
        toast.success(`Payment Successful! Order ID: ${response.razorpay_payment_id}`);
        toast("Visit the gym counter to collect your supplement.", { icon: '🎁', duration: 6000 });
        setLoadingId(null);
      },
      prefill: {
        name: "Member Name",
        email: "member@example.com"
      },
      theme: { color: "#f97316" }
    };

    // Simulate Payment delay
    setTimeout(() => {
        setLoadingId(null);
        // In real app: const rzp = new (window as any).Razorpay(options); rzp.open();
        toast.success("Redirecting to Razorpay...");
        // Mocking success for demo
        options.handler({ razorpay_payment_id: "pay_XYZ123456" });
    }, 1500);
  };

  return (
    <div className="space-y-8 pb-10">
      
      {/* SHOP HEADER */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-8 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-black text-white mb-2">Gym Supplements</h1>
          <p className="text-gray-400 text-sm">Buy original supplements & collect them during your workout.</p>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-2xl flex items-center gap-3">
            <Package className="text-orange-500" />
            <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Collection Point</p>
                <p className="text-white text-sm font-bold">Main Reception Counter</p>
            </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPLEMENTS.map((item) => (
          <div key={item.id} className="bg-[#0b1220] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col hover:border-orange-500/30 transition-all group">
            {/* Image Placeholder */}
            <div className="h-56 bg-[#020617] relative flex items-center justify-center p-6 overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-bold text-white">{item.rating}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.brand}</p>
              <h3 className="text-white text-lg font-bold mb-3">{item.name}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] bg-white/5 text-gray-400 px-2 py-1 rounded-md font-bold uppercase">{tag}</span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Best Price</p>
                    <p className="text-white text-xl font-black">₹{item.price}</p>
                </div>
                <button 
                  onClick={() => handlePurchase(item)}
                  disabled={loadingId === item.id}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-800 text-white font-black px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  {loadingId === item.id ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                      <>
                        <ShoppingBag size={18} /> Buy Now
                      </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INFO FOOTER */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
        <Info className="text-orange-500 shrink-0" size={20} />
        <div>
            <h4 className="text-white text-sm font-bold mb-1">How it works?</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
                Pay online securely with Razorpay. After payment, show the invoice in your "Profile &gt; Orders" section to the gym staff. They will verify and hand over the original supplement to you immediately.
            </p>
        </div>
      </div>
    </div>
  );
}