import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { QUALITY_STANDARDS } from "@/data/content";

export default function TrustStrip() {
  return (
    <section className="py-5 bg-white border-b border-cream-200 overflow-hidden">
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-6 animate-marquee select-none">
          {[...QUALITY_STANDARDS, ...QUALITY_STANDARDS].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-800"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-ochre shrink-0" />
              <span>{item}</span>
              <span className="text-cream-300 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
