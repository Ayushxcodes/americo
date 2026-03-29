"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaTwitter, FaResearchgate } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Stay Connected</h2>
          <p className="mt-4 text-lg text-gray-600">
            Reach out to us or follow our latest updates across platforms.
          </p>
        </motion.div>

        {/* Only Contact Info, centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">Email: <a href="mailto:contact@example.com" className="text-teal-500">nimishchandra@americoemedico.ai</a></p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
