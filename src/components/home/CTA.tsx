"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 bg-[#0a0a0a] text-center text-white">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl mb-6"
      >
        Start Your Fitness Journey 🔥
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-r from-red-500 to-orange-500 px-10 py-4 rounded-full shadow-lg"
      >
        Get Started
      </motion.button>

    </section>
  );
}