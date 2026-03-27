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

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">Email: <a href="mailto:contact@example.com" className="text-teal-500">nimishchandra9@gmail.com</a></p>
            <p className="text-gray-600">Phone: <a href="tel:+1234567890" className="text-teal-500">+1(937)(367)(6512)</a></p>
            <p className="text-gray-600">Address: Long Island, New York, USA</p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 transition">
                <FaResearchgate size={24} />
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe for updates, insights, and news.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm space-x-6"
        >
          <a href="/terms" className="hover:text-teal-500 transition">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-teal-500 transition">Privacy Policy</a>
        </motion.div>
      </div>
    </footer>
  );
}
