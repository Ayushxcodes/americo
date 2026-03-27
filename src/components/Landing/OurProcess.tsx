"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProcessStep {
  title: string;
  description: string;
  image: string; // URL or local path for illustration
}

export default function HowWeWorkTimelineWithImages() {
  const steps: ProcessStep[] = [
    {
      title: "Consult & Understand Needs",
      description:
        "We analyse your objectives, regulatory constraints, and realistic timelines.",
      image: "/Doctors-bro.png",
    },
    {
      title: "Design & Strategy Planning",
      description:
        "Align drug/device pipelines, data architecture, compliance and roadmap.",
      image: "/Medical prescription-bro.png",
    },
    {
      title: "Implementation & Development",
      description:
        "AI-modeling, device design, data integration, trial infrastructure.",
      image: "/Laboratory-bro.png",
    },
    {
      title: "Deployment & Monitoring",
      description:
        "Post-market surveillance, feedback loops, continuous improvement.",
      image: "/Retroviruses-bro.png",
    },
  ];

  return (
    <section className="relative py-12 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600">
            How we deliver impactful outcomes from concept to deployment.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-green-300 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Slide-in Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="w-full max-w-xs mx-auto mb-6 md:mb-0 md:w-64 flex-shrink-0"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </motion.div>

                {/* Step Card */}
                <StepCardWithNumber {...step} stepNumber={i + 1} />

                {/* Connector Dot with Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-teal-400 border-4 border-white rounded-full flex items-center justify-center top-0 md:top-1/2 md:-translate-y-1/2 text-white font-bold text-base md:text-lg z-20">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STEP CARD WITH NUMBER -------------------- */

interface StepCardProps {
  title: string;
  description: string;
  image: string;
  stepNumber: number;
}

const StepCardWithNumber = ({ title, description }: StepCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={{
        y: hover ? -6 : 0,
        scale: hover ? 1.02 : 1,
        boxShadow: hover
          ? "0 16px 40px -10px rgba(0,140,160,0.2)"
          : "0 8px 30px -12px rgba(0,0,0,0.05)",
      }}
      className="bg-white rounded-2xl border border-gray-200 p-8 md:w-96 relative z-10 cursor-pointer transition-all"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};
