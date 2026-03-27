"use client";

import { motion } from "framer-motion";

const items = [
  "AI-based diagnostic and automation tools",
  "Intelligent predictive systems for hospitals and medical labs",
  "Process automation to reduce manual workload and errors",
  "Customized AI models tailored to specific medical needs",
];

export default function AIInnovationSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background Wave */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-[0.08]"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#14B8A6"
            d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,192C672,171,768,181,864,165.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Force image left on large screens */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image Column (Now Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-full h-[350px] bg-gray-100 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center">
              <img
                src="/Cyborg-bro.png"
                alt="AI and Medical Automation"
                className="object-contain w-full h-full opacity-90"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold text-teal-600 mb-4"
            >
              AI & Automation-Driven Medical Innovation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-gray-700 text-lg mb-6 font-medium"
            >
              AI-Powered Medical Innovation Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gray-600 leading-relaxed mb-10"
            >
              We specialize in developing advanced AI and automation solutions for the healthcare and Medical Technology sectors. Our systems enhance accuracy, improve clinical workflows, and accelerate decision-making across diverse medical environments.
            </motion.p>

            {/* List Items */}
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
