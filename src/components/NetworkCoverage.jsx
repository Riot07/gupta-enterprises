import React from "react";
import { motion } from "framer-motion";
import { MapPin, Truck, Clock, Navigation } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { DELIVERY_AREAS } from "@/data/content";
import { getWhatsAppUrl } from "@/lib/utils";

export default function NetworkCoverage() {
  return (
    <section id="delivery" className="py-20 sm:py-24 bg-cream-50/70 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Delivery Coverage"
          title="Prompt Local Delivery Across"
          highlight="Pune &amp; Maharashtra."
          description="Gupta Enterprises provides regular delivery across commercial centers, industrial zones, and IT corridors in Pune and PCMC."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 text-left">
          {DELIVERY_AREAS.map((area) => (
            <div
              key={area.area}
              className="card-clean p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-ochre-tint border border-ochre-border flex items-center justify-center text-ochre mb-3 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-navy-900 mb-2">{area.area}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{area.locations}</p>
              </div>

              <div className="pt-3 border-t border-cream-100 flex items-center gap-1.5 text-xs font-semibold text-ochre">
                <Clock className="w-3.5 h-3.5" />
                <span>{area.timing}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Delivery Check */}
        <div className="p-6 rounded-2xl bg-white border border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-soft">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-ochre shrink-0" />
            <span className="text-sm font-semibold text-navy-900">
              Need dependable bulk delivery to your facility in Pune?
            </span>
          </div>
          <a
            href={getWhatsAppUrl(
              "Hello Gupta Enterprises, can you confirm delivery schedule and availability for bulk supplies to my address in Pune?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shrink-0 transition-colors"
          >
            Check Your Delivery Area
          </a>
        </div>
      </div>
    </section>
  );
}
