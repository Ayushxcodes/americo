"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string; // URL or local path
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      title: "Smart Wearable for Cardiac Monitoring",
      description: "Enabled early detection of arrhythmia in real-world patients",
      image: "/Cardiologist-bro.png",
    },
    {
      title: "Real-World Evidence Analytics for Post-Market Safety",
      description: "Improved detection of adverse events across multiple geographies",
      image: "/Vaccine development-bro.png",
    },
  ];

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900">Case Studies & Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real-world applications of our AI and MedTech expertise driving impactful outcomes.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECT CARD -------------------- */

function ProjectCard({ title, description, image }: Project) {
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
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition-all"
    >
      <div className="relative">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
