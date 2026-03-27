"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ---------------- SLIDE DATA ---------------- //
const slides = [
  {
    title: (
      <>
        Advancing Healthcare & Innovation with{" "}
        <span className="text-teal-600">AI–Driven Pharmaceutical and Medical Technology Solutions</span>
      </>
    ),
    subtitle:
      "From molecule to monitoring — bridging research, devices and real-world impact.",
    image: "/Doctors-bro.png",
    footerText:
      "Empowering healthcare teams with intelligent automation and breakthrough digital innovation.",

    // RECTANGLE SHAPE BLOCKS (Slide 1)
    shapes: (
      <div className="mt-10 space-y-6">
        {/* Blue Rectangle */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-100 rounded-xl p-8"
        >
          <h2 className="text-4xl font-bold text-blue-900">8+</h2>
          <p className="mt-2 text-gray-700 font-medium">
            Programs in Development
          </p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Explore Pipeline →
          </button>
        </motion.div>

        {/* Teal Rectangle */}
        
      </div>
    ),
  },

  // ---------------- SLIDE 2 ---------------- //
  {
    title: (
      <>
        Transforming R&D Pipelines with{" "}
        <span className="text-blue-600">Predictive AI & Real-World Insights</span>
      </>
    ),
    subtitle:
      "Accelerating drug discovery, device engineering, and quality operations.",
    image: "/Chat_bot.gif",
    footerText:
      "AI models optimized for biotech, pharmaceuticals, and clinical research.",

    // RECTANGLE SHAPE BLOCKS (Slide 2)
    shapes: (
      <div className="mt-10 space-y-6">
        {/* Mint Rectangle */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-teal-50 border border-teal-100 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-teal-700">AI-Powered Insights</h2>
          <p className="mt-2 text-gray-700">
            Real-time analytics enabling faster decision-making.
          </p>
        </motion.div>

        {/* Blue Rectangle */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-100 rounded-xl p-8"
        >
          <h2 className="text-xl font-bold text-blue-900">
            Enhanced Data Security
          </h2>
          <p className="mt-2 text-gray-700">
            Built for regulated healthcare environments.
          </p>
        </motion.div>
      </div>
    ),
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative bg-white py-10 md:py-20 overflow-hidden">

      {/* Arrows */}
      {/* Arrows - stack on mobile, side on desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg px-4 py-3 rounded-full hover:bg-gray-200"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg px-4 py-3 rounded-full hover:bg-gray-200"
      >
        →
      </button>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                {slides[index].title}
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-lg">
                {slides[index].subtitle}
              </p>

              {/* Rectangle shape blocks */}
              <div className="w-full">{slides[index].shapes}</div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center text-center mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-xs h-[260px] sm:h-[320px] md:w-[420px] md:h-[420px]"
              >
                <Image
                  src={slides[index].image}
                  alt="Hero Illustration"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 sm:mt-6 max-w-xs sm:max-w-sm text-gray-600 text-base sm:text-lg"
              >
                {slides[index].footerText}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
