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
            Comprehensive solutions to streamline clinic operations and enhance patient care.
          </p>
        </div>

        {/* ---------- SERVICES GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* SERVICE 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              Implement AI-powered diagnostic and monitoring devices — from imaging and wearable systems to connected health solutions for seamless patient care.
            </p>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
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
              Regulatory & Compliance Monitoring
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Ensure your clinic meets healthcare regulations with built-in compliance tools, automated safety monitoring, and quality assurance workflows.
            </p>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-2xl hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              {/* Dashboard Icon */}
              <svg width="30" height="30" fill="none" stroke="#14b8a6" strokeWidth="2">
                <path d="M3 12h18M12 3v18" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Smart Clinic Workflow & Analytics
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Use AI-driven analytics to monitor patient flow, optimize staff scheduling, and improve overall clinic efficiency.
            </p>
          </motion.div>

          {/* SERVICE 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-2xl hover:shadow-md transition"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              {/* Cloud Sync Icon */}
              <svg width="30" height="30" fill="none" stroke="#14b8a6" strokeWidth="2">
                <path d="M4 15a7 7 0 1 1 14 0h-2a5 5 0 1 0-10 0H4z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Secure & Standards-Compliant Data
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Protect patient information with secure, HIPAA-compliant storage and data management systems designed for modern healthcare environments.
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
              Consulting & Strategy for Clinic Growth
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We guide healthcare providers on software adoption, workflow optimization, compliance, and scaling clinic operations efficiently.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}