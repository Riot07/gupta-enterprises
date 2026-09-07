import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-cream-200 py-3 shadow-soft"
          : "bg-white/80 backdrop-blur-sm border-b border-cream-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-white border border-cream-200 flex items-center justify-center p-1 shadow-sm group-hover:border-ochre transition-colors shrink-0">
            <img
              src="/images/logo.png"
              alt="Gupta Enterprises Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-navy-900 uppercase group-hover:text-ochre transition-colors">
              Gupta Enterprises
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Wholesale Distributor • Pune
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs rounded-lg transition-colors ${
                  isActive
                    ? "text-ochre bg-ochre-tint font-bold shadow-2xs border border-ochre-border/60"
                    : "text-navy-700 hover:text-ochre hover:bg-cream-100/60 font-semibold"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-navy-900 hover:text-ochre bg-white border border-cream-200 rounded-xl focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-cream-200 px-4 pt-3 pb-6 overflow-hidden shadow-card text-left"
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-ochre bg-ochre-tint font-bold"
                        : "text-navy-800 hover:text-ochre hover:bg-cream-50 font-semibold"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
