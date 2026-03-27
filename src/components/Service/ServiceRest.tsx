"use client";

import { motion } from "framer-motion";

/* --------------------------------------------- */
/* ---------- SERVICE CONTENT ARRAYS ----------- */
/* --------------------------------------------- */

const startupItems = [
  "End-to-end regulatory guidance (FDA pathways, documentation, compliance)",
  "Go-to-market strategy and branding support",
  "Market entry planning & competitor positioning",
  "Assistance with business development, partnerships, and outreach",
  "Guidance on setting up operational, financial, and quality systems",
];

const manufacturingItems = [
  "Facility planning & infrastructure layout",
  "Machinery selection & vendor coordination",
  "GMP-aligned architecture and process flow",
  "Quality control & quality assurance setup",
  "Compliance with FDA, US-FDA, EU-GMP, WHO-GMP standards",
  "SOP development & documentation support",
];

const supplyChainItems = [
  "AI-powered inventory forecasting",
  "Smart re-order point automation",
  "Automated payment follow-ups & invoicing",
  "Supplier management dashboards",
  "Real-time stock monitoring across multiple locations",
  "Integration with ERP, purchasing systems, and warehouse tools",
];

const hospitalItems = [
  "Patient registration & OPD/IPD management",
  "Doctor scheduling & clinical workflow management",
  "Billing, insurance claims & payment automation",
  "Laboratory & radiology management",
  "Pharmacy management",
  "Bed allocation & ward monitoring",
  "HR & staff management",
  "Integrated reporting and analytics",
];

const medicalRecordsItems = [
  "Digital EMR/EHR creation & automation",
  "AI-powered data extraction and classification",
  "Secure cloud-based storage with encryption",
  "Seamless integration with hospital systems",
  "Automated documentation & coding assistance",
  "Predictive analytics built from patient history",
];

/* --------------------------------------------- */
/* ---------- WAVE BACKGROUND COMPONENT -------- */
/* --------------------------------------------- */

function WaveBG() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#14B8A6"
          d="M0,96L80,122.7C160,149,320,203,480,218.7C640,235,800,213,960,170.7C1120,128,1280,64,1360,32L1440,0V320H0Z"
        />
      </svg>
    </div>
  );
}

/* --------------------------------------------- */
/* ---------- LIST ITEM COMPONENT -------------- */
/* --------------------------------------------- */

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className="flex items-start gap-3"
        >
          <div className="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
          <p className="text-gray-700 text-lg">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* --------------------------------------------- */
/* ---------- GENERIC ALTERNATING SECTION ------ */
/* --------------------------------------------- */

function ServiceBlock({
  title,
  subtitle,
  description,
  items,
  image,
  reverse = false,
}: {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <WaveBG />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div
          className={`flex flex-col lg:flex-row ${
            reverse ? "lg:flex-row-reverse" : ""
          } gap-16 items-center`}
        >
          {/* Text Column */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-teal-600 mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 text-lg font-semibold mb-4"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            <BulletList items={items} />
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="w-full h-[360px] bg-gray-100 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/* ---------- FULL SERVICES SECTIONS ----------- */
/* --------------------------------------------- */

export default function FullServicesSections() {
  return (
    <>
      <ServiceBlock
        title="Medical Start-up Launch Support (USA Focus)"
        subtitle="Launching & Scaling Medical Startups in the USA"
        description="Entering the U.S. medical market requires strategic navigation, regulatory preparation, and strong commercialization support."
        items={startupItems}
        image="/Online Doctor-bro.png"
        reverse={false}
      />

      <ServiceBlock
        title="Pharma Manufacturing Setup Solutions"
        subtitle="Pharma Manufacturing Setup & Expansion Support"
        description="We assist organizations planning to establish or upgrade pharmaceutical manufacturing units to meet global standards."
        items={manufacturingItems}
        image="/Laboratory-bro.png"
        reverse={true}
      />

      <ServiceBlock
        title="AI-Based Inventory & Supply Chain Solutions"
        subtitle="Smart Inventory & Supply Chain Automation"
        description="We streamline pharmacy, hospital, and distributor supply chains using predictive AI and automated workflows."
        items={supplyChainItems}
        image="/Data extraction-bro.png"
        reverse={false}
      />

      <ServiceBlock
        title="Hospital Management Systems (HMS)"
        subtitle="End-to-End Hospital Management System"
        description="Our HMS platform digitizes complete hospital operations including billing, labs, pharmacy, wards, HR & more."
        items={hospitalItems}
        image="/Hospital building-bro.png"
        reverse={true}
      />

      <ServiceBlock
        title="AI-Based Medical Records & Data Management"
        subtitle="AI-Enabled Medical Records Solutions"
        description="We provide secure AI-powered EMR/EHR systems enabling automation, structured extraction & predictive analytics."
        items={medicalRecordsItems}
        image="/Android-bro.png"
        reverse={false}
      />
    </>
  );
}
