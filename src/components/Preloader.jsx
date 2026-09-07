import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-50 text-navy-900 p-6 select-none"
    >
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated Brand Emblem */}
        <div className="relative mb-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-2xl border border-dashed border-ochre flex items-center justify-center"
          />
          <div className="absolute inset-2 rounded-xl bg-white border border-cream-200 shadow-soft flex items-center justify-center p-2.5 overflow-hidden">
            <img
              src="/images/logo.png"
              alt="Gupta Enterprises"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-xl font-extrabold tracking-tight text-navy-900 uppercase mb-0.5">
          Gupta Enterprises
        </h1>
        <p className="text-xs font-semibold text-ochre uppercase tracking-wider mb-6">
          Wholesale Distributor • Pune
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-cream-200 rounded-full h-2 p-0.5 mb-2 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-navy-900 via-navy-800 to-ochre rounded-full"
            style={{ width: `${percent}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-xs font-mono text-slate-500 px-1">
          <span>Initializing Wholesale Inventory...</span>
          <span className="font-bold text-navy-900">{percent}%</span>
        </div>
      </div>
    </motion.div>
  );
}
