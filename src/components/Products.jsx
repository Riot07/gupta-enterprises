import React from "react";
import {
  FileText,
  CupSoda,
  PenTool,
  CheckCircle2,
  Package,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PRODUCTS } from "@/data/content";
import { getWhatsAppUrl } from "@/lib/utils";

const ICONS = {
  "a4-paper": FileText,
  "water-bottles": CupSoda,
  "stationery-items": PenTool,
};

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-24 bg-white border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Product Categories"
          title="Wholesale Distribution of"
          highlight="Quality Commercial Products."
          description="Gupta Enterprises supplies high-demand commercial essentials to corporate offices, institutions, retail stores, and commercial buyers across Pune & Maharashtra."
        />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PRODUCTS.map((prod) => {
            const Icon = ICONS[prod.id] || Package;
            const isBottle = prod.id === "water-bottles";

            return (
              <div
                key={prod.id}
                className="card-clean p-6 sm:p-7 flex flex-col justify-between text-left group border-cream-200 hover:border-ochre"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-ochre-tint border border-ochre-border flex items-center justify-center text-ochre shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${prod.badgeColor}`}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-1 group-hover:text-ochre transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs font-semibold text-ochre mb-3 uppercase tracking-wider">
                    {prod.category}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {prod.desc}
                  </p>

                  {/* For Water Bottles: Highlight the Two Options clearly */}
                  {isBottle && prod.subOptions && (
                    <div className="space-y-2.5 mb-5 p-3.5 rounded-xl bg-cream-50 border border-cream-200">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900">
                        Available Options:
                      </p>
                      {prod.subOptions.map((sub) => (
                        <div key={sub.name} className="text-xs">
                          <span className="font-bold text-navy-900">• {sub.name}: </span>
                          <span className="text-slate-600">{sub.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features / Bullets */}
                  <ul className="space-y-2 text-xs text-slate-700">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-ochre shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice for Complete Catalog & List */}
        <div className="p-6 sm:p-8 rounded-2xl bg-cream-50 border border-cream-200 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-cream-200 flex items-center justify-center text-ochre shrink-0 shadow-sm">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-navy-900">
                Complete Product List &amp; Catalogs Available on Request
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                We distribute a wide range of commercial and corporate consumables. Connect with our sales desk on WhatsApp or phone to receive current catalogs and volume rate cards.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl(
              "Hello Gupta Enterprises, please share your complete wholesale product list and catalog."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-900 bg-white hover:bg-cream-100 border border-cream-200 hover:border-ochre shadow-soft shrink-0 transition-all"
          >
            Request Complete Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
