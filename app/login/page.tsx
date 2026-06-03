"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.identifier || !form.password) {
      toast.error("Please fill all fields");
      setIsLoading(false);
      return;
    }

    toast.success("Welcome Back! 💪");
    const role =
      typeof window !== "undefined"
        ? localStorage.getItem("selectedRole")
        : null;

    setTimeout(() => {
      router.push(role || "/roles");
    }, 1000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
      {/* BACKGROUND IMAGE - Fixed Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
          className="w-full h-full object-cover opacity-70"
          alt="Fitness Background"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4 border border-red-500/20">
              <LogIn className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="text-gray-400 mt-2">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Email address"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all outline-none"
                onChange={(e) =>
                  setForm({ ...form, identifier: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all outline-none"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 py-4 rounded-xl font-bold shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "Authenticating..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-400">
              New here?{" "}
              <Link
                href="/register"
                className="text-red-400 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
