import React from "react";
import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short Introduction about Gupta Enterprises */}
      <section className="py-20 sm:py-24 bg-cream-50/70 border-b border-cream-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Introduction"
            title="Reliable Commercial Supply for"
            highlight="Offices, Institutions &amp; Retail."
            description="Gupta Enterprises is a premier wholesale distributor based in Pune, Maharashtra, simplifying bulk procurement for businesses and retailers."
          />

          <div className="max-w-4xl mx-auto card-clean p-8 sm:p-10 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-cream-50 text-navy-900 border border-cream-200">
              <MapPin className="w-3.5 h-3.5 text-ochre" />
              <span>BASED IN PUNE, MAHARASHTRA</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight leading-snug">
              Connecting Quality Manufacturers with Commercial Buyers Across Pune.
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              At <strong>Gupta Enterprises</strong>, we specialize in bulk wholesale distribution for corporate workplaces, educational campuses, hospitals, and retail stores across Pune and Maharashtra. We provide direct distributor pricing, verified quality standards, and dependable local inventory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Direct wholesale pricing with volume-based savings",
                "Ready local inventory in Pune for prompt fulfillment",
                "Supplying copier paper, drinking water & stationery",
                "Dependable doorstep delivery across Pune & PCMC",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-navy-800 font-medium">
                  <CheckCircle className="w-4 h-4 text-ochre shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-cream-100 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 transition-all shadow-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-ochre" />
              </Link>
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-900 bg-white hover:bg-cream-100 border border-cream-200 hover:border-ochre transition-all shadow-soft"
              >
                <span>View Products Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-ochre" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
