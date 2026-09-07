import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  Package,
  Layers,
  X,
  Maximize2,
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  CupSoda,
  PenTool,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PAPER_BRANDS, OXYCOOL_DATA, CUSTOM_BOTTLES_DATA, CATALOGS } from "@/data/content";
import { CONTACT_CONFIG, getWhatsAppUrl, getEmailUrl } from "@/lib/utils";

const VALID_CATEGORIES = ["all", "paper", "water", "stationery"];

export default function CataloguePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const initialCategory = VALID_CATEGORIES.includes(categoryParam)
    ? categoryParam
    : "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    if (categoryParam && VALID_CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: categoryId }, { replace: true });
    }
  };

  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
    image: "",
    pdfUrl: null,
    specs: null,
  });

  const openPreview = (title, subtitle, image, pdfUrl = null, specs = null) => {
    setPreviewModal({
      isOpen: true,
      title,
      subtitle,
      image,
      pdfUrl,
      specs,
    });
  };

  const closePreview = () => {
    setPreviewModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="pt-28 lg:pt-36 text-left">
      <section className="pb-24 bg-cream-50/70 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Official Commercial Catalogues"
            title="Download &amp; Explore"
            highlight="Wholesale Catalogues &amp; Product Sheets."
            description="Access official manufacturer catalogues, wholesale carton packaging, volume slabs, and product flyers for copier paper and packaged drinking water."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {[
              { id: "all", label: "All Catalogues", count: "3 Categories" },
              { id: "paper", label: "A4 Copier Paper", count: "8 Brands PDF" },
              { id: "water", label: "Water Bottles", count: "Branded & Custom" },
              { id: "stationery", label: "Stationery Items", count: "On Request" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategorySelect(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === tab.id
                    ? "bg-navy-900 text-white shadow-soft"
                    : "bg-white text-navy-800 hover:bg-cream-100 border border-cream-200"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    activeCategory === tab.id
                      ? "bg-navy-800 text-ochre"
                      : "bg-cream-50 text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* ========================================================================= */}
          {/* SECTION 1: A4 COPIER PAPER CATALOGUE (8 Brands Included)                  */}
          {/* ========================================================================= */}
          {(activeCategory === "all" || activeCategory === "paper") && (
            <div className="mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 shadow-2xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">
                      A4 Copier &amp; Multipurpose Paper Wholesale Catalogue
                    </h3>
                    <p className="text-xs text-slate-500">
                      Official 8-Page Manufacturer Master Catalog • 8 Leading Commercial Brands
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/catalogs/a4-paper-copier-catalog.pdf"
                    download="Gupta-Enterprises-A4-Copier-Paper-Wholesale-Catalog.pdf"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-soft flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full 8-Page PDF (4.9 MB)</span>
                  </a>
                  <a
                    href="/catalogs/a4-paper-copier-catalog.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white hover:bg-cream-100 border border-cream-200 text-navy-800 transition-colors"
                    title="Open PDF in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Master Download Box for Paper */}
              <div className="card-clean p-6 sm:p-8 bg-white border-cream-200 mb-8 shadow-soft">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Official 8-Page Master Specification Catalog</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-extrabold text-navy-900">
                      High Brightness &amp; Machine-Friendly Copier Paper Range
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Supplied in standard 500-sheet moisture-proof wrapped reams packed in 10-ream master cartons. Compatible with high-speed lasers, desktop inkjets, and industrial digital photocopiers.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                      {["70 GSM", "75 GSM", "80 GSM", "100 GSM", "ColorLok® Technology", "Wheat Straw Eco Paper"].map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-cream-50 text-navy-800 border border-cream-200 font-semibold text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <a
                      href="/catalogs/a4-paper-copier-catalog.pdf"
                      download="Gupta-Enterprises-A4-Copier-Paper-Wholesale-Catalog.pdf"
                      className="w-full py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-soft flex items-center justify-center gap-2 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Complete PDF</span>
                    </a>
                    <a
                      href="/catalogs/a4-paper-copier-catalog.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-900 bg-cream-50 hover:bg-white border border-cream-200 flex items-center justify-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View PDF in Browser</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 8-Brand Showcase Grid from the PDF */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-navy-900">
                  Included Paper Brands (8 Full Catalogue Pages)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Explore individual brand catalogue pages below. Click any card to expand and view the full-size high-resolution catalogue.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {PAPER_BRANDS.map((brand) => (
                  <div
                    key={brand.id}
                    onClick={() =>
                      openPreview(
                        `${brand.name} — Page ${brand.pageNumber} of 8`,
                        brand.tagline,
                        brand.image,
                        "/catalogs/a4-paper-copier-catalog.pdf",
                        brand
                      )
                    }
                    className="card-clean p-5 sm:p-6 bg-white border-cream-200 hover:border-ochre transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Thumbnail with Overlay - Cropped to fit perfectly */}
                      <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-cream-50 border border-cream-200 mb-4 group-hover:shadow-md transition-all">
                        <img
                          src={brand.image}
                          alt={`${brand.name} Catalogue Page`}
                          className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-white/95 text-navy-900 text-xs font-bold shadow-soft flex items-center gap-2">
                            <Maximize2 className="w-4 h-4 text-ochre" />
                            <span>Click to Expand Page {brand.pageNumber}</span>
                          </span>
                        </div>
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-navy-900/85 backdrop-blur-xs text-[10px] font-bold text-white font-mono">
                          Page {brand.pageNumber} of 8
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h5 className="text-lg font-bold text-navy-900 group-hover:text-ochre transition-colors">
                          {brand.name}
                        </h5>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-mono">
                          {brand.gsm}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {brand.tagline}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-3 border-t border-cream-100 bg-cream-50/50 p-2.5 rounded-lg border border-cream-100">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Packaging</span>
                          <span className="font-semibold text-navy-900">{brand.packaging}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Min. Order</span>
                          <span className="font-bold text-ochre font-mono">{brand.moq}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Finish</span>
                          <span className="font-semibold text-navy-900">{brand.finish}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Compatibility</span>
                          <span className="font-semibold text-navy-900 truncate block">{brand.compatibility}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-cream-100 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-ochre">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-ochre" />
                        <span>Expand Catalogue Page</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-ochre group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 2: PACKAGED DRINKING WATER CATALOGUE (Oxycool - Shelke Group)     */}
          {/* ========================================================================= */}
          {(activeCategory === "all" || activeCategory === "water") && (
            <div className="mb-16">
              {/* Category Main Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ochre-tint text-ochre flex items-center justify-center border border-ochre-border shadow-2xs">
                    <CupSoda className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                      Water Bottles: Branded &amp; Customisable
                    </h3>
                    <p className="text-xs text-slate-500">
                      Official distribution of Oxycool packaged drinking water &amp; custom corporate bottle branding solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cream-100 text-navy-800 border border-cream-200">
                    2 Distinct Offerings
                  </span>
                </div>
              </div>

              {/* --------------------------------------------------------------------- */}
              {/* SUBSECTION 1: BRANDED PRODUCT (Oxycool - Shelke Group)                */}
              {/* --------------------------------------------------------------------- */}
              <div className="mb-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-navy-900 text-white">
                      Section 1: Branded Product
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {OXYCOOL_DATA.brand}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={OXYCOOL_DATA.pdfUrl}
                      download="Gupta-Enterprises-Oxycool-Packaged-Drinking-Water-Flyer.pdf"
                      className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-2xs items-center gap-1.5 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Flyer PDF</span>
                    </a>
                    <a
                      href={OXYCOOL_DATA.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white hover:bg-cream-100 border border-cream-200 text-navy-800 transition-colors"
                      title="Open PDF in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Oxycool Showcase Card */}
                <div className="card-clean p-6 sm:p-8 bg-white border-cream-200 shadow-soft">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Graphic Image */}
                    <div className="lg:col-span-6">
                      <div
                        onClick={() =>
                          openPreview(
                            OXYCOOL_DATA.brand,
                            `${OXYCOOL_DATA.parentCompany} • German Technology Purification`,
                            OXYCOOL_DATA.imageUrl,
                            OXYCOOL_DATA.pdfUrl
                          )
                        }
                        className="relative rounded-2xl overflow-hidden border border-cream-200 bg-cream-100 shadow-card cursor-pointer group"
                      >
                        <img
                          src={OXYCOOL_DATA.imageUrl}
                          alt="Oxycool Packaged Drinking Water Lineup (250ml, 500ml, 1L, 2L, 5L, 20L)"
                          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-navy-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-white/95 text-navy-900 text-xs font-bold shadow-soft flex items-center gap-2">
                            <Maximize2 className="w-4 h-4 text-ochre" />
                            <span>Click to View Full Size Image</span>
                          </span>
                        </div>
                        <span className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-navy-900/85 backdrop-blur-xs text-[11px] font-bold text-white">
                          Available in 250ml, 500ml, 1L, 2L, 5L &amp; 20L Jars
                        </span>
                      </div>
                    </div>

                    {/* Right: Oxycool Details */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-ochre-tint text-ochre border border-ochre-border">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{OXYCOOL_DATA.tagline} • German Technology</span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">
                        {OXYCOOL_DATA.brand}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {OXYCOOL_DATA.description}
                      </p>

                      {/* Commercial Sizes */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-navy-900 block">
                          Commercial Size Options:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {OXYCOOL_DATA.sizes.map((sz) => (
                            <span
                              key={sz}
                              className="px-3 py-1 rounded-lg text-xs font-bold bg-cream-50 text-navy-900 border border-cream-200 font-mono shadow-2xs"
                            >
                              {sz}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 pt-2">
                        {OXYCOOL_DATA.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-navy-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Oxycool Actions */}
                      <div className="pt-3 border-t border-cream-100 flex flex-col sm:flex-row gap-3">
                        <a
                          href={OXYCOOL_DATA.pdfUrl}
                          download="Gupta-Enterprises-Oxycool-Packaged-Drinking-Water-Flyer.pdf"
                          className="flex-1 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-soft flex items-center justify-center gap-2 transition-all"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download Flyer PDF</span>
                        </a>
                        <button
                          onClick={() =>
                            openPreview(
                              OXYCOOL_DATA.brand,
                              `${OXYCOOL_DATA.parentCompany} • German Technology Purification`,
                              OXYCOOL_DATA.imageUrl,
                              OXYCOOL_DATA.pdfUrl
                            )
                          }
                          className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-900 bg-cream-50 hover:bg-white border border-cream-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-ochre" />
                          <span>View Graphic</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --------------------------------------------------------------------- */}
              {/* SUBSECTION 2: CUSTOMISABLE PRODUCTS (Logo Printing & Gifting)         */}
              {/* --------------------------------------------------------------------- */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-ochre text-white">
                      Section 2: Customizable Products
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Corporate Logo Printing &amp; Custom Branding
                    </span>
                  </div>
                </div>

                {/* Customisable Showcase Card */}
                <div className="card-clean p-6 sm:p-8 bg-white border-cream-200 shadow-soft space-y-8">
                  {/* Top: Description & Capabilities */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7 space-y-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-ochre-tint text-ochre border border-ochre-border">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Corporate Branding &amp; Bulk Printing</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">
                        {CUSTOM_BOTTLES_DATA.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {CUSTOM_BOTTLES_DATA.subtitle}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {CUSTOM_BOTTLES_DATA.capabilities.map((cap, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-cream-50/70 border border-cream-200 text-left"
                          >
                            <h5 className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-ochre shrink-0" />
                              <span>{cap.title}</span>
                            </h5>
                            <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                              {cap.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Available Options & Specs */}
                    <div className="lg:col-span-5 p-5 rounded-2xl bg-cream-50 border border-cream-200 space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-ochre" />
                        <span>Available Custom Formats:</span>
                      </span>
                      <div className="space-y-2">
                        {CUSTOM_BOTTLES_DATA.options.map((opt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-navy-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-ochre shrink-0 mt-1.5" />
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-cream-200 text-[11px] text-slate-600 mt-3">
                        <span className="font-bold text-navy-900 block mb-0.5">Need a custom sample or digital mockup?</span>
                        Contact our sales desk below with your logo file, required quantities, and target event date for an instant wholesale quotation.
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Direct Contact Options Box (Requested: "in that give contact option") */}
                  <div className="pt-6 border-t border-cream-200">
                    <div className="mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-ochre block">
                        Direct Contact for Custom Bottle Inquiries
                      </span>
                      <h5 className="text-base font-bold text-navy-900">
                        Get Instant Pricing &amp; Order Custom Logo Water Bottles
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* 1. WhatsApp Contact */}
                      <a
                        href={getWhatsAppUrl(CUSTOM_BOTTLES_DATA.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 hover:border-emerald-400 group transition-all text-left flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                              <MessageCircle className="w-5 h-5 fill-emerald-700" />
                            </div>
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              Instant
                            </span>
                          </div>
                          <h6 className="text-sm font-bold text-navy-900">WhatsApp Order Desk</h6>
                          <p className="text-xs font-mono font-bold text-emerald-800 mt-1">
                            {CONTACT_CONFIG.phoneDisplay}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1">
                            Share your logo and get immediate quote &amp; digital preview
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-emerald-100 text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <span>Chat on WhatsApp</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </a>

                      {/* 2. Call Directly */}
                      <a
                        href={`tel:${CONTACT_CONFIG.phoneTel}`}
                        className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 hover:bg-amber-50 hover:border-amber-400 group transition-all text-left flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-9 h-9 rounded-lg bg-amber-100 text-ochre flex items-center justify-center">
                              <Phone className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                              Direct Call
                            </span>
                          </div>
                          <h6 className="text-sm font-bold text-navy-900">Call Us Directly</h6>
                          <p className="text-xs font-mono font-bold text-navy-900 mt-1">
                            {CONTACT_CONFIG.phoneDisplay}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1">
                            Speak with our commercial sales team for bulk custom orders
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-amber-100 text-xs font-bold text-ochre flex items-center gap-1">
                          <span>Call Sales Desk</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </a>

                      {/* 3. Official Email */}
                      <a
                        href={getEmailUrl(CUSTOM_BOTTLES_DATA.emailSubject, CUSTOM_BOTTLES_DATA.emailBody)}
                        className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 hover:bg-blue-50 hover:border-blue-400 group transition-all text-left flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                              <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                              Official RFQ
                            </span>
                          </div>
                          <h6 className="text-sm font-bold text-navy-900">Send Email RFQ</h6>
                          <p className="text-[11px] font-mono font-semibold text-blue-900 mt-1 truncate">
                            {CONTACT_CONFIG.email}
                          </p>
                          <p className="text-[11px] text-slate-600 mt-1">
                            Send purchase orders, specs, and tender requirements
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-blue-100 text-xs font-bold text-blue-700 flex items-center gap-1">
                          <span>Send Email</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SECTION 3: STATIONERY CATALOGUE (On Request)                              */}
          {/* ========================================================================= */}
          {(activeCategory === "all" || activeCategory === "stationery") && (
            <div className="mb-8">
              <div className="card-clean p-6 sm:p-8 bg-white border-cream-200 shadow-soft">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                      <PenTool className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Office &amp; Institutional Supplies
                      </span>
                      <h4 className="text-lg font-bold text-navy-900 mt-0.5">
                        School &amp; Office Stationery Items Catalogue
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                        We supply institutional registers, ball pens, desk consumables, notebooks, files, and general office accessories. The seasonal wholesale price list is curated directly per institutional tender or retail volume requirement.
                      </p>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      "Hello Gupta Enterprises, please share your wholesale stationery product list and current volume slabs."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-soft flex items-center justify-center gap-2 transition-all shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Request Stationery List</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE FULL-SIZE CATALOGUE PREVIEW MODAL                             */}
      {/* ========================================================================= */}
      {previewModal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md"
          onClick={closePreview}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[96vh] flex flex-col shadow-2xl border border-cream-200 text-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-cream-100 bg-cream-50/60 shrink-0">
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-extrabold text-navy-900 truncate">
                  {previewModal.title}
                </h3>
                {previewModal.subtitle && (
                  <p className="text-xs text-slate-500 truncate mt-0.5">{previewModal.subtitle}</p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {previewModal.pdfUrl && (
                  <a
                    href={previewModal.pdfUrl}
                    download
                    className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 shadow-2xs transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}
                <button
                  onClick={closePreview}
                  className="p-2 rounded-xl bg-white hover:bg-cream-100 text-slate-700 hover:text-navy-900 border border-cream-200 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View - Fills the window cleanly without cropping or clipping */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/5 flex items-center justify-center">
              <img
                src={previewModal.image}
                alt={previewModal.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-card mx-auto"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-3 px-6 py-3 border-t border-cream-100 bg-white shrink-0 text-xs">
              <span className="text-slate-500 truncate">
                Gupta Enterprises Official Wholesale Catalogue
              </span>
              <div className="flex items-center gap-2 shrink-0">
                {previewModal.pdfUrl && (
                  <a
                    href={previewModal.pdfUrl}
                    download
                    className="sm:hidden px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-navy-900"
                  >
                    Download
                  </a>
                )}
                <button
                  onClick={closePreview}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-900 bg-cream-50 hover:bg-cream-100 border border-cream-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
