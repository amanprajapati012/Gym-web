"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-28 bg-[#0a0a0a] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[120px] rounded-full top-10 left-10" />
      <div className="absolute w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full bottom-10 right-10" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT CONTENT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Why Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Our Gym?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mb-6"
          >
            We provide AI-powered workout tracking, smart diet plans,
            and real-time progress analytics to help you achieve your goals faster.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-full shadow-lg"
          >
            Explore Features
          </motion.button>

        </div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-[-20px] left-[-20px] bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-lg">
            <p className="text-sm text-gray-300">🔥 Daily Active Users</p>
            <h4 className="text-lg font-bold">10K+</h4>
          </div>
        </motion.div>

      </div>
    </section>
  );
}