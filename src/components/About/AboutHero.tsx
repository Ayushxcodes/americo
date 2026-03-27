"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* SVG pattern behind content */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14B8A6"
            fillOpacity="0.18"
            d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,208C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-20">
        {/* Image on left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <img
            src="/About us page-bro.png"
            alt="About Hero"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover border border-teal-100"
          />
        </motion.div>

        {/* Text on right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-4 text-left"
          >
            About Us
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-700 mb-6 font-semibold text-left"
          >
            Advancing healthcare innovation through AI, pharmaceutical research, and intelligent medical technologies.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 text-gray-600 max-w-2xl text-base md:text-lg text-left"
          >
            We are a research-driven organization committed to transforming the future of medicine by integrating advanced artificial intelligence, drug development expertise, and cutting-edge medical devices. Our work bridges scientific rigor with technological excellence to deliver solutions that create lasting impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
