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
      className="sticky top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-sm shadow-md border-b border-neutral-200 px-4 sm:px-6 py-3 flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-3">
        <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 2L15 8H9L12 2Z" fill="white" />
            <path d="M12 22L9 16H15L12 22Z" fill="white" />
          </svg>
        </span>
        <span className="font-bold text-lg sm:text-xl text-neutral-800 tracking-tight">Americo-E-Medico</span>
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        <nav className="flex gap-6 items-center" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-neutral-700 font-medium transition-colors duration-200 group"
            >
              <span className="inline-block py-1">{link.name}</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform duration-200" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="ml-2 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-semibold shadow-sm transition"
        >
          Get in touch
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="relative w-6 h-6 flex items-center justify-center">
          <motion.span
            initial={false}
            animate={menuOpen ? { rotate: 45, top: 12 } : { rotate: 0, top: 6 }}
            className="absolute left-0 w-6 h-0.5 bg-neutral-700 rounded"
            style={{ top: 6 }}
          />
          <motion.span
            initial={false}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute left-0 w-6 h-0.5 bg-neutral-700 rounded"
            style={{ top: 12 }}
          />
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-4 top-full mt-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center py-6 gap-4 md:hidden"
          >
            <div className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-full text-center text-neutral-800 hover:text-teal-600 font-medium text-lg transition-colors duration-200 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-neutral-100 w-full flex items-center justify-center">
              <Link href="/contact" className="bg-teal-600 text-white px-5 py-2 rounded-md font-semibold shadow-sm">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
