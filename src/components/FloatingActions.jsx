import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { CONTACT_CONFIG, getWhatsAppUrl, scrollToSection } from "@/lib/utils";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white border border-cream-200 text-navy-900 hover:border-ochre hover:text-ochre shadow-card flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct Call Button (Mobile) */}
      <a
        href={`tel:${CONTACT_CONFIG.phoneTel}`}
        aria-label="Call Gupta Enterprises directly"
        className="sm:hidden w-12 h-12 rounded-full bg-white border border-cream-200 text-ochre shadow-card flex items-center justify-center pointer-events-auto hover:scale-105 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Action Pill */}
      <a
        href={getWhatsAppUrl(
          "Hello Gupta Enterprises, I would like to inquire about wholesale product pricing and availability for bulk orders in Pune."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-card hover:shadow-hover transition-all transform hover:-translate-y-0.5 active:scale-95"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
        </span>

        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
          WhatsApp Price Quote
        </span>
      </a>
    </div>
  );
}
