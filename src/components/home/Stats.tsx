"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Active Members",
    desc: "People transforming daily",
  },
  {
    value: "50+",
    label: "Expert Trainers",
    desc: "Certified professionals",
  },
  {
    value: "100+",
    label: "Workout Plans",
    desc: "Customized routines",
  },
  {
    value: "95%",
    label: "Success Rate",
    desc: "Proven results",
  },
];

export default function Stats() {
  return (
    <section className="py-28 bg-[#0a0a0a] text-white px-6">

      <h2 className="text-4xl font-bold text-center mb-14">
        Our Impact
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-red-500 mb-2">
              {item.value}
            </h2>
            <p className="font-semibold">{item.label}</p>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}