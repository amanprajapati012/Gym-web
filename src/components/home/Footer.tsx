"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-gray-400 py-10 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-red-500/10 blur-[120px] top-0 left-0 rounded-full" />

      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Gym AI 💪
        </motion.h2>

        <p className="text-gray-500 mb-4">
          Transforming fitness with AI-powered solutions.
        </p>

        <p className="text-sm text-gray-600">
          © 2026 All rights reserved
        </p>

        <p className="text-sm mt-2">
          🚀 Owner: <span className="text-white font-semibold">Aman Prajapati</span>
        </p>

      </div>

    </footer>
  );
}