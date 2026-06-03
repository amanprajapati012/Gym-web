"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Workout Tracking",
    desc: "Track your daily fitness",
    img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
  },
  {
    title: "Diet Planning",
    desc: "AI-based meal plans",
    img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
  {
    title: "AI Scanner",
    desc: "Scan food calories",
    img: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-[#0a0a0a] text-white px-6">

      <h2 className="text-4xl font-bold mb-12 text-center">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >
            <img src={f.img} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}