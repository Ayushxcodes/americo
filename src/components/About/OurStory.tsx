"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Full background wave pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14B8A6"
            fillOpacity="0.08"
            d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,154.7C672,192,768,224,864,224C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text content on left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-teal-500 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-3">
            Our journey began with a simple belief — that the next generation of healthcare breakthroughs will come from the seamless fusion of science, data, and intelligent technologies.
          </p>
          <p className="text-gray-600 mb-3">
            Recognizing the growing need for faster, safer, and more precise innovations in pharmaceuticals and medical devices, we set out to build an organization that works across disciplines to accelerate progress.
          </p>
          <p className="text-gray-600">
            Today, we support partners across pharma, biotech, MedTech, and clinical research with solutions that enhance discovery, improve diagnostics, and advance patient care. From molecular modeling and AI-driven screening to device development and real-world evidence analytics, we help turn complex challenges into measurable outcomes.
          </p>
        </motion.div>

        {/* Image on right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <img
            src="/Storyboard-bro.png"
            alt="Our Story"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border border-teal-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
