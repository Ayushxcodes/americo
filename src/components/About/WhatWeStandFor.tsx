"use client";

import { motion } from "framer-motion";

const standForItems = [
  {
    title: "Scientific Integrity",
    description: "Every project is built on strong scientific principles and validated research.",
    icon: "🧬",
  },
  {
    title: "Innovation with Purpose",
    description: "We use AI and emerging technologies to solve real-world challenges — not just create tools.",
    icon: "🤖",
  },
  {
    title: "Collaboration",
    description: "We work hand-in-hand with researchers, clinicians, engineers, and industry partners.",
    icon: "🤝",
  },
  {
    title: "Quality & Compliance",
    description: "We embed regulatory alignment, safety standards, and ethical responsibility from the start.",
    icon: "✅",
  },
  {
    title: "Impact-Driven Work",
    description: "Our focus is on solutions that create measurable benefits for patients, healthcare systems, and communities.",
    icon: "🌍",
  },
];

const coreCompetencies = [
  "AI-assisted diagnostics and imaging tools",
  "Smart wearables & monitoring devices",
  "Real-world evidence and post-market analytics",
  "Regulatory support, quality systems & compliance",
  "Scientific consulting for pharma & MedTech startups",
];

export default function StandForSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative background wave */}
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
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,160C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* What We Stand For: image left, cards right */}
      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
        {/* Image on left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
        >
          <img
            src="/Doctors-bro.png"
            alt="What We Stand For Illustration"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border border-teal-100"
          />
        </motion.div>

        {/* Cards on right */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-teal-500 mb-8 text-left"
          >
            What We Stand For
          </motion.h2>

          {/* List of principles with icons and interactive animation */}
          <div className="grid gap-6 mb-0">
            {standForItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(20,184,166,0.12)" }}
                className="flex items-start space-x-4 bg-white rounded-xl border border-teal-100 shadow-sm p-6 cursor-pointer transition-all duration-200 hover:border-teal-400"
              >
                <span className="text-teal-500 mt-1 text-3xl" aria-label={item.title}>{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Core Competencies: cards left, image right */}
      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Cards on left */}
        <div className="w-full md:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-teal-500 mb-4 text-left"
          >
            Our Core Competencies
          </motion.h3>

          <div className="grid gap-3 mb-0">
            {coreCompetencies.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, color: "#14B8A6" }}
                className="flex items-center space-x-2 bg-white rounded-lg border border-teal-50 p-3 cursor-pointer transition-all duration-200 hover:border-teal-400"
              >
                <span className="text-teal-400 text-lg">•</span>
                <p className="text-gray-600 group-hover:text-teal-500 transition-colors duration-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image on right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
        >
          <img
            src="/Email campaign-bro.png"
            alt="Core Competencies Illustration"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border border-teal-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
