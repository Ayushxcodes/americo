"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ---------------- SLIDE DATA ---------------- //
// ---------------- SLIDE DATA ---------------- //
const slides = [
  {
    title: (
      <>
        Streamlining Clinic Operations with{" "}
        <span className="text-teal-600">Smart AI-Enabled Software</span>
      </>
    ),
    subtitle:
      "Simplify scheduling, patient management, and analytics for efficient healthcare delivery.",
    image: "/Doctors-bro.png",
    footerText:
      "Empowering clinics with intelligent automation and seamless workflow management.",

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
          <h2 className="text-4xl font-bold text-blue-900">Simplified Operations</h2>
          <p className="mt-2 text-gray-700 font-medium">
            Streamline appointment scheduling, billing, and patient records.
          </p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More →
          </button>
        </motion.div>

        {/* Teal Rectangle */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-teal-50 border border-teal-100 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-teal-700">Quick Implementation</h2>
          <p className="mt-2 text-gray-700">
            Get your clinic running efficiently from day one.
          </p>
        </motion.div>
      </div>
    ),
  },

  // ---------------- SLIDE 2 ---------------- //
  {
    title: (
      <>
        Ensuring Compliance & Secure Patient Data with{" "}
        <span className="text-blue-600">Standards-Aligned Systems</span>
      </>
    ),
    subtitle:
      "HIPAA-compliant, secure, and reliable software for modern clinics.",
    image: "/Chat_bot.gif",
    footerText:
      "Protecting sensitive healthcare data while optimizing operations.",

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
            Real-time analytics to optimize clinic workflows and patient care.
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
            Secure & Standards-Compliant
          </h2>
          <p className="mt-2 text-gray-700">
            Built on trusted healthcare standards to safeguard patient data.
          </p>
        </motion.div>
      </div>
    ),
  },
];
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-white to-slate-50 py-10 md:py-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Arrows */}
      {/* Arrows - stack on mobile, side on desktop */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg px-4 py-3 rounded-full hover:bg-gray-200"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
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
                className="relative w-full max-w-xs h-[260px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-xl overflow-hidden shadow-xl"
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

              <div className="mt-4">
                <button
                  onClick={() => alert('Contact us — implement form')}
                  className="bg-teal-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile controls + dots */}
        <div className="md:hidden flex flex-col items-center mt-6">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="bg-white shadow px-3 py-2 rounded-md"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === index ? "bg-teal-600 w-3 h-3" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="bg-white shadow px-3 py-2 rounded-md"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
