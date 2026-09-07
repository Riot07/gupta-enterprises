import React from "react";
import {
  ShieldCheck,
  Truck,
  Layers,
  CheckCircle,
  MapPin,
  Package,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  const pillars = [
    {
      icon: Layers,
      title: "Direct Wholesale Pricing",
      desc: "Competitive bulk distributor rates across all product lines, giving businesses and retailers maximum margin advantage.",
    },
    {
      icon: Package,
      title: "Core Commercial Products",
      desc: "Supplying high-demand A4 paper, water bottles (branded & customisable with logos), and essential stationery consumables.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Packaging Standards",
      desc: "Standard factory-sealed packaging, genuine products, and careful quality verification prior to dispatch.",
    },
    {
      icon: Truck,
      title: "Local Pune & Regional Delivery",
      desc: "Prompt delivery across Pune city, PCMC industrial belts, Hinjawadi IT parks, and bulk delivery across Maharashtra.",
    },
  ];

  return (
    <div className="pt-28 lg:pt-36">
      {/* Full Company Information Section */}
      <section className="pb-24 bg-cream-50/70 border-b border-cream-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About Gupta Enterprises"
            title="Your Trusted Partner for"
            highlight="Wholesale Distribution in Pune."
            description="Gupta Enterprises is a premier wholesale distributor based in Pune, Maharashtra, supplying high-demand commercial essentials with dependable service and prompt local delivery."
          />

          {/* Two Column Story Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Story */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-white text-navy-900 border border-cream-200 shadow-soft">
                <MapPin className="w-3.5 h-3.5 text-ochre" />
                <span>BASED IN PUNE, MAHARASHTRA</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
                Consistent Commercial Supply for{" "}
                <span className="text-ochre">Offices, Institutions &amp; Retail</span>.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At <strong>Gupta Enterprises</strong>, we simplify procurement for businesses, schools,
                colleges, and retail outlets. Our wholesale distribution network bridges top manufacturers
                with commercial buyers, ensuring dependable product availability at genuine wholesale rates.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We specialize in bulk <strong>A4 Paper</strong>, <strong>Water Bottles</strong> (available in both branded and customized logo-printed options), and essential <strong>Stationery Items</strong>. With ready inventory in Pune, we cater to recurring monthly orders, corporate gifting, and institutional tenders.
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Direct wholesale distributor pricing on small, medium, and bulk orders",
                  "Water bottles available in both branded and custom logo-printed options",
                  "A4 paper in standard 500-sheet reams and 5-ream master cartons",
                  "Prompt delivery across Pune city, PCMC, and nearby districts in Maharashtra",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-ochre shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="card-clean p-6 flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-ochre-tint border border-ochre-border flex items-center justify-center text-ochre mb-4 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-navy-900 mb-2">{pillar.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-cream-100 flex items-center gap-2 text-[11px] font-semibold text-ochre">
                      <span>Pune, Maharashtra</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500">Ready Stock</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
