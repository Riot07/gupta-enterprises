import React from "react";
import { Coins, ShieldCheck, Award, Zap, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { WHY_CHOOSE_US } from "@/data/content";

const ICONS = [Coins, ShieldCheck, Award, Zap];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Gupta Enterprises"
          title="The Distributor Advantage for Your"
          highlight="Bulk Commercial Supply."
          description="We focus on four straightforward commitments: competitive wholesale margins, dependable inventory in Pune, authentic quality assurance, and punctual dispatch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICONS[idx] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="card-clean p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ochre-tint border border-ochre-border flex items-center justify-center text-ochre mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-cream-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
