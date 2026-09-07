import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, MapPin, ArrowUp, Package } from "lucide-react";
import { CONTACT_CONFIG, getWhatsAppUrl, getEmailUrl } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-cream-200 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-11 h-11 rounded-xl bg-white border border-cream-200 flex items-center justify-center p-1 shadow-sm overflow-hidden shrink-0 group-hover:border-ochre transition-colors">
                <img
                  src="/images/logo.png"
                  alt="Gupta Enterprises Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-black text-white uppercase tracking-tight block group-hover:text-ochre transition-colors">
                  Gupta Enterprises
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-ochre">
                  Wholesale Distributor • Pune
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Wholesale distributor supplying A4 paper, water bottles (branded &amp; customisable),
              and stationery items to corporate offices, institutions, schools, and retailers
              across Pune and Maharashtra.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-ochre shrink-0" />
                <a href={`tel:${CONTACT_CONFIG.phoneTel}`} className="hover:text-ochre transition-colors font-mono font-bold">
                  {CONTACT_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-ochre shrink-0" />
                <a href={getEmailUrl()} className="hover:text-ochre transition-colors font-mono break-all">
                  {CONTACT_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-ochre shrink-0 mt-0.5" />
                <span className="text-slate-400">{CONTACT_CONFIG.hqLocation}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-ochre transition-colors text-slate-400 hover:text-white inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesale Inquiries & Catalog Notice */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product Catalogs</h4>
            <p className="text-xs text-slate-400">
              Complete product list and catalogs are available upon request. View our dedicated catalogue page or connect on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link
                to="/catalogue"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-950 bg-white hover:bg-cream-100 shadow-sm transition-all"
              >
                <span>View Catalogs</span>
              </Link>

              <a
                href={getWhatsAppUrl("Hello Gupta Enterprises, please share your complete wholesale product list and catalog.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 border border-navy-800 hover:bg-navy-850 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                <Package className="w-3.5 h-3.5 text-ochre" />
                <span>Core Wholesale Lines</span>
              </div>
              <p className="text-[10px] text-slate-400">A4 Paper • Water Bottles • Stationery Items</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gupta Enterprises. Wholesale Distributor, Pune, Maharashtra.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-ochre transition-colors text-slate-400 focus:outline-none cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
