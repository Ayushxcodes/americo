"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-12 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* ---------- LEFT: Illustration + Shape Background ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-100 rounded-full opacity-40 blur-2xl"></div>
          <div className="absolute bottom-0 -right-10 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-2xl"></div>

          {/* Illustration */}
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg h-[220px] sm:h-[320px] md:h-[420px]">
            <Image
              src="/Medicine-bro.png"  // ← Updated illustration for clinic software
              alt="About Us Illustration"
              fill
              className="object-contain relative z-10"
            />
          </div>
        </motion.div>

        {/* ---------- RIGHT: ABOUT CONTENT + FEATURE GRID ---------- */}
        <div>

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            About Us
          </h2>

          {/* ABOUT CONTENT */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            We create smart clinic software that simplifies healthcare operations while ensuring secure, standards-compliant workflows.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            Our mission is to streamline every aspect of clinical practice — from patient scheduling and record management to analytics and workflow automation — helping healthcare teams focus on what matters most: patient care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Designed for clinics of all sizes, our platform ensures compliance with industry standards such as HIPAA while providing scalable, AI-powered solutions for efficient clinic management.
          </motion.p>

          {/* ---------- FEATURES GRID ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">

            {/* FEATURE 1 – Simplified Operations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Calendar Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Simplified Operations</h4>
                <p className="text-sm text-gray-600">Manage scheduling, billing, and patient records effortlessly</p>
              </div>
            </motion.div>

            {/* FEATURE 2 – Quick Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Lightning Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Quick Implementation</h4>
                <p className="text-sm text-gray-600">Start optimizing your clinic workflow from day one</p>
              </div>
            </motion.div>

            {/* FEATURE 3 – Secure & Compliant */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Shield Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6l9-4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Secure & Compliant</h4>
                <p className="text-sm text-gray-600">Protect patient data and meet HIPAA and industry standards</p>
              </div>
            </motion.div>

            {/* FEATURE 4 – Scalable Platform */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Growth Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2">
                  <path d="M4 20v-6h6v6H4zM14 14v6h6v-6h-6zM4 10h6V4H4v6zM14 10h6V4h-6v6z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Scalable Platform</h4>
                <p className="text-sm text-gray-600">Grows with your clinic and integrates seamlessly with other systems</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}