"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mjgpypad", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-sm text-teal-600 font-medium mb-3">
            <a href="mailto:nimishchandra@americoemedico.ai">nimishchandra@americoemedico.ai</a>
          </p>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Fill out the form below and our team will get back to you soon.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="How can we help you?"
            />
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}