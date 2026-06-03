"use client";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    title: "Strength Training",
  },
  {
    src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    title: "Cardio Workout",
  },
  {
    src: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg",
    title: "Gym Session",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-28 bg-[#0a0a0a] text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-red-500/10 blur-[120px] top-10 left-10 rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-orange-500/10 blur-[120px] bottom-10 right-10 rounded-full" />

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl text-center mb-16 font-bold"
      >
        Our Gym Moments
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-xl border border-white/10"
          >

            {/* Image */}
            <img
              src={img.src}
              className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />

            {/* Text Slide Animation */}
            <div className="absolute bottom-[-50px] left-0 w-full p-6 group-hover:bottom-0 transition-all duration-500">
              <h3 className="text-xl font-semibold">
                {img.title}
              </h3>
              <p className="text-gray-300 text-sm">
                Push your limits & transform your body
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}