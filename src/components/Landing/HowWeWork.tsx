"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WhyPoint {
  title: string;
  description: string;
  Icon: (props: { color: string }) => React.JSX.Element; // <-- use React.JSX.Element
  GrayLogo: () => React.JSX.Element;
  ColorLogo: () => React.JSX.Element;
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 md:py-32 bg-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('/grid.svg')] bg-contain"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why We Stand Out</h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600">
            What makes our approach different — and trusted by innovators across Pharma & MedTech.
          </p>
        </motion.div>

        {/* Grid with center image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center">
          {/* Left Cards */}
          <div className="space-y-6 md:space-y-8">
            {whyPoints.slice(0, 2).map((item, i) => (
              <WhyCard key={i} {...item} delay={i * 0.15} />
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-8 md:my-0">
            <img
              src="/Medical prescription-bro.png"
              alt="Central Illustration"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Right Cards */}
          <div className="space-y-6 md:space-y-8">
            {whyPoints.slice(2).map((item, i) => (
              <WhyCard key={i + 2} {...item} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY CARD -------------------- */

interface WhyCardProps {
  title: string;
  description: string;
  Icon: (props: { color: string }) => React.JSX.Element; // <-- use React.JSX.Element
  GrayLogo: () => React.JSX.Element;
  ColorLogo: () => React.JSX.Element;

  delay: number;
}

function WhyCard({ title, description, Icon, GrayLogo, ColorLogo, delay }: WhyCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        animate={{
          y: hover ? -8 : 0,
          scale: hover ? 1.02 : 1,
          boxShadow: hover
            ? "0 16px 45px -12px rgba(0,140,160,0.25)"
            : "0 8px 30px -12px rgba(0,0,0,0.05)",
        }}
        className="rounded-2xl bg-white border border-gray-200 p-8 transition-all cursor-pointer"
      >
        {/* Icon */}
        <motion.div
          animate={{ scale: hover ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-teal-100 to-blue-100"
        >
          <Icon color={hover ? "#0ea5e9" : "#0284c7"} />
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-6">{hover ? <ColorLogo /> : <GrayLogo />}</div>
      </motion.div>
    </motion.div>
  );
}

/* -------------------- DATA STRUCTURE -------------------- */

const whyPoints: WhyPoint[] = [
  {
    title: "End-to-End Integration",
    description:
      "From drug discovery to devices, clinical trials, and post-market AI monitoring — we support the full lifecycle.",
    Icon: ({ color }) => (
      <svg width="36" height="36" stroke={color} strokeWidth="2" fill="none">
        <path d="M3 8h18M3 16h18M3 24h18" />
        <circle cx="27" cy="8" r="3" />
        <circle cx="27" cy="16" r="3" />
        <circle cx="27" cy="24" r="3" />
      </svg>
    ),
    GrayLogo: () => (
      <img src="https://cdn.simpleicons.org/openbadges/9ca3af" className="h-6 opacity-70" />
    ),
    ColorLogo: () => (
      <img src="https://cdn.simpleicons.org/openbadges/0ea5e9" className="h-6" />
    ),
  },
  {
    title: "Multidisciplinary Expertise",
    description:
      "A deep-tech team combining pharma R&D, AI/ML, medical-device design, and regulatory engineering.",
    Icon: ({ color }) => (
      <svg width="36" height="36" fill="none" stroke={color} strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <circle cx="6" cy="20" r="4" />
        <circle cx="18" cy="20" r="4" />
        <path d="M10 11l-3 6M14 11l3 6" />
      </svg>
    ),
    GrayLogo: () => (
      <img src="https://cdn.simpleicons.org/protocols/9ca3af" className="h-6 opacity-70" />
    ),
    ColorLogo: () => (
      <img src="https://cdn.simpleicons.org/protocols/14b8a6" className="h-6" />
    ),
  },
  {
    title: "AI-First, Evidence-Driven",
    description:
      "Using cutting-edge models + robust data methodologies to generate reproducible, validated outcomes.",
    Icon: ({ color }) => (
      <svg width="36" height="36" fill="none" stroke={color} strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    GrayLogo: () => (
      <img src="https://cdn.simpleicons.org/python/9ca3af" className="h-6 opacity-70" />
    ),
    ColorLogo: () => (
      <img src="https://cdn.simpleicons.org/python/0ea5e9" className="h-6" />
    ),
  },
  {
    title: "Quality & Compliance Focus",
    description:
      "We embed QA, regulatory workflows, and safety evaluation early — ensuring reliability and trust.",
    Icon: ({ color }) => (
      <svg width="36" height="36" fill="none" stroke={color} strokeWidth="2">
        <path d="M12 2l8 4v6c0 6-4 11-8 12-4-1-8-6-8-12V6l8-4z" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
    GrayLogo: () => (
      <img src="https://cdn.simpleicons.org/checkmarx/9ca3af" className="h-6 opacity-70" />
    ),
    ColorLogo: () => (
      <img src="https://cdn.simpleicons.org/checkmarx/14b8a6" className="h-6" />
    ),
  },
  {
    title: "Custom Solutions & Flexibility",
    description:
      "Tailored support for startups, research institutes, and established pharma + MedTech global teams.",
    Icon: ({ color }) => (
      <svg width="36" height="36" fill="none" stroke={color} strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M20 9l6 3-6 3" />
      </svg>
    ),
    GrayLogo: () => (
      <img src="https://cdn.simpleicons.org/modrinth/9ca3af" className="h-6 opacity-70" />
    ),
    ColorLogo: () => (
      <img src="https://cdn.simpleicons.org/modrinth/0ea5e9" className="h-6" />
    ),
  },
];
