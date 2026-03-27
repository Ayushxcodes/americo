"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-32">
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-100">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14B8A6"
            fillOpacity="0.08"
            d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,186.7C672,203,768,181,864,176C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Section */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold text-teal-600 leading-tight mb-6"
            >
              Our Services
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-xl text-gray-700 font-medium mb-6"
            >
              Driving Medical Innovation Through AI, Automation, and Strategic Support
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gray-600 text-lg leading-relaxed max-w-xl"
            >
              We provide end-to-end services across the medical, healthcare, and pharmaceutical ecosystem.
              From AI-powered automation and digital innovation to regulatory support and manufacturing
              solutions, our services are designed to help organizations launch, scale, and optimize
              operations with confidence.
            </motion.p>
          </div>

          {/* Right Image Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex justify-center"
          >
            <div className="w-full h-[350px] bg-white rounded-3xl shadow-xl overflow-hidden flex items-center justify-center">
              <img
                src="/Collab-bro.png" // replace with your actual image
                alt="Services Illustration"
                className="object-cover w-full h-full opacity-90"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
