import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-white via-cream-50 to-cream-100/60 border-b border-cream-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white border border-cream-200 text-navy-900 mb-6 shadow-soft"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Wholesale Distributor</span>
          <span className="text-slate-300">•</span>
          <span className="text-ochre flex items-center gap-1 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Pune, Maharashtra
          </span>
        </motion.div>

        {/* Main Headline - Broad Wholesale Focused */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6"
        >
          Powering Businesses, Retailers &amp; Institutions with{" "}
          <span className="text-ochre">Direct Wholesale Distribution</span>.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
        >
          Gupta Enterprises is your trusted wholesale distribution partner in Pune, Maharashtra.
          Supplying corporate offices, educational institutions, commercial facilities, and retail
          stores with reliable commercial goods, direct bulk pricing, and prompt local delivery.
        </motion.p>
      </div>
    </section>
  );
}

