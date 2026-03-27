"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Subtle wave/gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14B8A6"
            fillOpacity="0.05"
            d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,138.7C672,128,768,96,864,85.3C960,75,1056,85,1152,122.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-teal-100 hover:border-teal-400 transition-colors duration-300 flex flex-col items-center"
        >
          <img
            src="/Business_mission-bro.png"
            alt="Mission Icon"
            className="w-40 h-40 mb-4 object-contain"
          />
          <h3 className="text-3xl font-bold text-teal-500 mb-4">Mission</h3>
          <p className="text-gray-600 text-center">
            To transform healthcare by integrating AI, scientific research, and medical technologies, enabling faster development of safer drugs, smarter devices, and better patient outcomes.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-teal-100 hover:border-teal-400 transition-colors duration-300 flex flex-col items-center"
        >
          <img
            src="/Imagination-bro.png"
            alt="Vision Icon"
            className="w-40 h-40 mb-4 object-contain"
          />
          <h3 className="text-3xl font-bold text-teal-500 mb-4">Vision</h3>
          <p className="text-gray-600 text-center">
            A future where intelligent healthcare systems, predictive analytics, and next-generation medical devices work together seamlessly to improve quality of life globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
