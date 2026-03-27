"use client";

import { motion } from "framer-motion";

const whyChooseItems = [
  "Integrated expertise across pharma, AI, and devices",
  "AI-driven innovation to reduce cost, time, and risk",
  "End-to-end support from concept to commercialization",
  "Experience working with startups and global organizations",
  "Transparent communication, ethical frameworks, and high-quality outcomes",
];

export default function PartnersSection() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Wave-like background */}
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
            d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,160C672,149,768,139,864,144C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-teal-50 via-white to-teal-100 border-2 border-teal-100 rounded-3xl shadow-xl px-2 py-8 md:px-24 md:py-16 flex flex-col items-center text-center mb-12 relative w-full"
        >
          {/* Left image */}
          <img
            src="/Conversation-bro.png"
            alt="Healthcare Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-56 h-auto object-contain hidden md:block"
            style={{ zIndex: 2 }}
          />
          {/* Right image */}
          <img
            src="/Mobile Marketing-bro.png"
            alt="Healthcare Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-56 h-auto object-contain hidden md:block"
            style={{ zIndex: 2 }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-6"
          >
            Trusted by Innovators Across Healthcare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl mb-6"
          >
            We collaborate with pharmaceutical companies, research institutes, technology partners, and MedTech startups to accelerate innovation. Our partnerships help us stay at the forefront of scientific discovery and deliver solutions aligned with global healthcare needs.
          </motion.p>
          <ul className="grid gap-3 text-left w-full max-w-xl mx-auto mb-4">
            {whyChooseItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 text-gray-800 text-base md:text-lg"
              >
                <span className="inline-block text-teal-400 text-xl">•</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-teal-500 mb-4">Shaping the Future of Healthcare Together</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We believe the next big breakthroughs in medicine will come from collaboration, curiosity, and cutting-edge innovation. Whether you are a research institute, a pharmaceutical company, or a MedTech startup, we’re here to support your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
          >
            Connect With Us
          </a>
        </motion.div>
      </div>

    </section>
  );
}
