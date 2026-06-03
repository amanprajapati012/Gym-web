"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg",
    title: "Train Smarter 💪",
    highlight: "AI + Trainer Support",
    desc: "Personalized workout plans with guidance from expert trainers.",
  },
  {
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    title: "Expert Trainers 🧑",
    highlight: "Trainer Panel System",
    desc: "Trainers manage workouts, assign plans & track member progress.",
  },
  {
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    title: "Track Everything 📊 ",
    highlight: "Attendance & Analytics",
    desc: "Monitor workouts, attendance & performance in real-time.",
  },
  {
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", // FIXED FOOD IMAGE
    title: "Eat Smart 🍎",
    highlight: "AI Food Scanner",
    desc: "Scan meals & get calories, macros & nutrition instantly.",
  },
  {
    image: "https://images.pexels.com/photos/669578/pexels-photo-669578.jpeg",
    title: "Premium Experience 🏆",
    highlight: "Plans & Store",
    desc: "Buy memberships, packages & fitness products easily.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* IMAGE */}
      <AnimatePresence>
        <motion.img
          key={slide.image}
          src={slide.image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* LIGHT OVERLAY (less dark now) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

      {/* SOFT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[120px] top-10 left-10 rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-20 text-white">
        {/* TITLE */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            {slide.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              {slide.highlight}
            </span>
          </motion.h1>
        </AnimatePresence>

        {/* DESC */}
        <AnimatePresence mode="wait">
          <motion.p
            key={slide.desc}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-200 max-w-xl mb-8"
          >
            {slide.desc}
          </motion.p>
        </AnimatePresence>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => router.push("/roles")}
          className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 rounded-full shadow-lg"
        >
          Get Started
        </motion.button>

        {/* SLIDER DOTS */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-6 rounded-full ${
                i === current ? "bg-red-500" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
