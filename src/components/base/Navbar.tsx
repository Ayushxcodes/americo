
"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="sticky top-0 left-0 w-full z-50 bg-white shadow border-b border-neutral-200 px-6 py-3 flex items-center justify-between"
    >
      <Link href="/" className="font-bold text-xl text-neutral-800 tracking-tight">
        Americo-E-Medico
      </Link>
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-neutral-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* Mobile menu button with improved burger icon */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="relative w-6 h-6 flex items-center justify-center">
          {/* Top line */}
          <motion.span
            initial={false}
            animate={menuOpen ? { rotate: 45, top: 12 } : { rotate: 0, top: 6 }}
            className="absolute left-0 w-6 h-0.5 bg-neutral-700 rounded"
            style={{ top: 6 }}
          />
          {/* Middle line */}
          <motion.span
            initial={false}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute left-0 w-6 h-0.5 bg-neutral-700 rounded"
            style={{ top: 12 }}
          />
          {/* Bottom line */}
          <motion.span
            initial={false}
            animate={menuOpen ? { rotate: -45, top: 12 } : { rotate: 0, top: 18 }}
            className="absolute left-0 w-6 h-0.5 bg-neutral-700 rounded"
            style={{ top: 18 }}
          />
        </span>
      </button>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-lg flex flex-col items-center py-4 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;