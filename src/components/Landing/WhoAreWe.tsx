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
              src="/Medicine-bro.png"  // ← Your illustration
              alt="About Us Illustration"
              fill
              className="object-contain relative z-10"
            />
          </div>
        </motion.div>

        {/* ---------- RIGHT: ABOUT CONTENT + LOGO GRID ---------- */}
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
            We are an integrated innovation partner at the intersection of
            pharmaceutical science, medical devices, and artificial intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            Our mission is to accelerate the integration of AI powered Healthcare Technology and Smart Diagnostic Instruments and AI-powered healthcare technologies
            that make meaningful impact in real-world settings.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Combining deep scientific expertise with cutting-edge computational
            tools, we provide end-to-end support — from research and design to
            validation, regulatory alignment, and commercialization.
          </motion.p>

          {/* ---------- LOGOS WITH TEXT ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">

            {/* LOGO ITEM 1 – Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Flask/Discovery Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M10 2v4l-5 9a5 5 0 0 0 4 7h6a5 5 0 0 0 4-7l-5-9V2" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-sm text-gray-600">Breakthrough R&D and AI-driven discovery</p>
              </div>
            </motion.div>

            {/* LOGO ITEM 2 – MedTech Systems */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Device/Chip Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">MedTech Systems</h4>
                <p className="text-sm text-gray-600">Smart devices & diagnostics</p>
              </div>
            </motion.div>

            {/* LOGO ITEM 3 – AI Systems */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Brain/AI Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M12 3a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0V8a5 5 0 0 1 5-5z" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">AI Systems</h4>
                <p className="text-sm text-gray-600">Predictive & assistive intelligence</p>
              </div>
            </motion.div>

            {/* LOGO ITEM 4 – Validation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-lg flex items-center justify-center">
                {/* Shield/Check Icon */}
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2">
                  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Validation</h4>
                <p className="text-sm text-gray-600">Compliance, QA & commercialization</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
