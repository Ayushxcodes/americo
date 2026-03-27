"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">

        {/* ---------- SECTION TITLE ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services & Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Integrated solutions across pharmaceuticals, MedTech, AI, and real-world healthcare.
          </p>
        </div>

        {/* ---------- SERVICES GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* SERVICE 1 */}
          

          {/* SERVICE 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-2xl hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              {/* Heart Monitor Icon */}
              <svg width="30" height="30" fill="none" stroke="#14b8a6" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 10h4l2 4 3-6 2 4h5" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Smart Medical Devices & Diagnostics Integration
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We design and implement AI-powered diagnostic and monitoring 
              devices — from imaging and metabolic monitoring to wearable 
              and connected health systems.
            </p>
          </motion.div>

          {/* SERVICE 3 */}
          

          {/* SERVICE 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-2xl hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              {/* Shield Check Icon */}
              <svg width="30" height="30" fill="none" stroke="#14b8a6" strokeWidth="2">
                <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Regulatory & Safety Monitoring + Post-Market Surveillance
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We provide AI-assisted pharmacovigilance, safety monitoring, quality 
              control and compliance support to ensure continuous product quality.
            </p>
          </motion.div>

          {/* SERVICE 5 (Full width on small screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-2xl hover:shadow-md transition md:col-span-2"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              {/* Strategy Icon */}
              <svg width="30" height="30" fill="none" stroke="#0ea5e9" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Consulting & Strategy for Pharma + MedTech Startups
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We advise teams on AI adoption, product pipeline development,
              regulatory navigation, and scaling integrated drug-device and 
              diagnostic technologies.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
