import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  CupSoda,
  PenTool,
  CheckCircle2,
  Package,
  Download,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PRODUCTS } from "@/data/content";

const ICONS = {
  "a4-paper": FileText,
  "water-bottles": CupSoda,
  "stationery-items": PenTool,
};

const CATEGORY_MAP = {
  "a4-paper": "paper",
  "water-bottles": "water",
  "stationery-items": "stationery",
};

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 lg:pt-36">
      <section className="pb-24 bg-white border-b border-cream-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Categories"
            title="Wholesale Distribution of"
            highlight="Quality Commercial Products."
            description="Gupta Enterprises supplies high-demand commercial essentials to corporate offices, institutions, retail stores, and commercial buyers across Pune & Maharashtra. Click any product category to open its dedicated catalogue and specifications."
          />

          {/* Product Cards Grid - Clicking any section redirects to respective catalogue */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTS.map((prod) => {
              const Icon = ICONS[prod.id] || Package;
              const isBottle = prod.id === "water-bottles";
              const isPaper = prod.id === "a4-paper";
              const catKey = CATEGORY_MAP[prod.id] || "all";
              const catalogueUrl = `/catalogue?category=${catKey}`;

              return (
                <div
                  key={prod.id}
                  onClick={() => navigate(catalogueUrl)}
                  className="card-clean p-6 sm:p-7 flex flex-col justify-between text-left group border-cream-200 hover:border-ochre hover:shadow-soft transition-all cursor-pointer relative"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-ochre-tint border border-ochre-border flex items-center justify-center text-ochre shadow-sm group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${prod.badgeColor}`}
                      >
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-1 group-hover:text-ochre transition-colors flex items-center justify-between">
                      <span>{prod.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-ochre group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-xs font-semibold text-ochre mb-3 uppercase tracking-wider">
                      {prod.category}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {prod.desc}
                    </p>

                    {/* For Water Bottles: Real Oxycool Lineup Image Display */}
                    {isBottle && (
                      <div className="mb-5 rounded-xl overflow-hidden border border-cream-200 bg-cream-50">
                        <img
                          src="/images/catalog/oxycool-water-bottle.png"
                          alt="Oxycool Packaged Drinking Water Lineup"
                          className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="p-2.5 bg-cream-50 border-t border-cream-200 flex items-center justify-between text-[11px] font-bold text-navy-900">
                          <span>Oxycool: 250ml to 5L &amp; 20L Jars</span>
                          <a
                            href="/catalogs/oxycool-packaged-drinking-water.pdf"
                            download="Oxycool-Packaged-Drinking-Water-Flyer.pdf"
                            onClick={(e) => e.stopPropagation()}
                            className="text-ochre hover:underline flex items-center gap-1 text-[10px]"
                            title="Direct PDF Download"
                          >
                            <span>Flyer PDF</span>
                            <Download className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* For A4 Paper: 8 Leading Brands Pill Strip */}
                    {isPaper && prod.brandNames && (
                      <div className="space-y-2 mb-5 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                        <div className="flex items-center justify-between text-[11px] font-bold text-navy-900">
                          <span className="uppercase tracking-wider">8 Major Brands:</span>
                          <a
                            href="/catalogs/a4-paper-copier-catalog.pdf"
                            download="A4-Copier-Paper-Wholesale-Catalog.pdf"
                            onClick={(e) => e.stopPropagation()}
                            className="text-blue-700 hover:underline flex items-center gap-1 text-[10px]"
                            title="Direct 8-Page PDF Download"
                          >
                            <span>8-Page PDF</span>
                            <Download className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {prod.brandNames.map((b) => (
                            <span
                              key={b}
                              className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-navy-800 border border-blue-200"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* For Water Bottles: Two Options clearly displayed */}
                    {isBottle && prod.subOptions && (
                      <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-cream-50 border border-cream-200">
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
                    <ul className="space-y-2 text-xs text-slate-700 mb-2">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-ochre shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Direct Catalogue Action Bar */}
                  <div className="mt-6 pt-4 border-t border-cream-100 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-ochre transition-colors">
                    <span>
                      {isPaper
                        ? "Open A4 Paper Catalogue & Brands"
                        : isBottle
                        ? "Open Water Bottle Catalogue & Flyer"
                        : "Open Stationery Catalogue"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-ochre group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
