"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aman",
    text: "Best gym platform! My transformation is insane 🔥",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rahul",
    text: "AI diet and workout plan helped me a lot 💪",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha",
    text: "Clean UI and amazing experience ❤️",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#0a0a0a] text-white px-6">

      <h2 className="text-4xl text-center mb-14">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h4 className="font-semibold">{t.name}</h4>
            </div>

            <p className="text-gray-300">{t.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}