import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { CONTACT_CONFIG, getWhatsAppUrl, getEmailUrl } from "@/lib/utils";

export default function Contact() {

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Contact"
          title="Connect with Gupta Enterprises for"
          highlight="Wholesale Orders."
          description="Have questions about current pricing, complete catalogs, or bulk delivery in Pune & Maharashtra? Get in touch directly."
        />

        {/* 3 Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
          {/* WhatsApp Order Desk */}
          <a
            href={getWhatsAppUrl("Hello Gupta Enterprises, I would like to inquire about wholesale product pricing and availability in Pune.")}
            target="_blank"
            rel="noopener noreferrer"
            className="card-clean p-6 sm:p-7 block hover:border-emerald-500 group transition-all"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100 group-hover:scale-105 transition-transform shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-emerald-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Fast Response on WhatsApp
                </span>
                <h4 className="text-lg font-bold text-navy-900 mt-1">WhatsApp Order Desk</h4>
                <p className="text-sm text-navy-800 font-mono font-bold mt-2">{CONTACT_CONFIG.phoneDisplay}</p>
                <p className="text-xs text-slate-500 mt-1">Direct price confirmation &amp; catalog sharing</p>
              </div>
              <div className="mt-5 pt-3 border-t border-cream-100 text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <span>Start WhatsApp Chat</span>
                <span>→</span>
              </div>
            </div>
          </a>

          {/* Call Us Directly */}
          <a
            href={`tel:${CONTACT_CONFIG.phoneTel}`}
            className="card-clean p-6 sm:p-7 block hover:border-ochre group transition-all"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ochre-tint text-ochre flex items-center justify-center mb-4 border border-ochre-border group-hover:scale-105 transition-transform shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ochre">
                  Direct Sales Call
                </span>
                <h4 className="text-lg font-bold text-navy-900 mt-1">Call Us Directly</h4>
                <p className="text-sm text-navy-800 font-mono font-bold mt-2">{CONTACT_CONFIG.phoneDisplay}</p>
                <p className="text-xs text-slate-500 mt-1">Speak with our sales desk for bulk supply</p>
              </div>
              <div className="mt-5 pt-3 border-t border-cream-100 text-xs font-bold text-ochre flex items-center gap-1.5">
                <span>Dial Now</span>
                <span>→</span>
              </div>
            </div>
          </a>

          {/* Official Email */}
          <a
            href={getEmailUrl()}
            className="card-clean p-6 sm:p-7 block hover:border-blue-500 group transition-all"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 border border-blue-100 group-hover:scale-105 transition-transform shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                  Official Email
                </span>
                <h4 className="text-lg font-bold text-navy-900 mt-1">Official Email</h4>
                <p className="text-xs text-navy-800 font-mono font-semibold mt-2 break-all">{CONTACT_CONFIG.email}</p>
                <p className="text-xs text-slate-500 mt-1">Purchase orders and formal RFQs</p>
              </div>
              <div className="mt-5 pt-3 border-t border-cream-100 text-xs font-bold text-blue-700 flex items-center gap-1.5">
                <span>Send Email</span>
                <span>→</span>
              </div>
            </div>
          </a>
        </div>

        {/* Operating Hours & Location Strip */}
        <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-left shadow-soft">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-cream-200 flex items-center justify-center text-ochre shrink-0 shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-navy-900">Operating Hours</h5>
              <p className="text-xs text-slate-600 mt-0.5">{CONTACT_CONFIG.operatingHours}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Prompt response during commercial operating hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-cream-200 flex items-center justify-center text-ochre shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-navy-900">Distribution Hub &amp; Location</h5>
              <p className="text-xs text-slate-600 mt-0.5">{CONTACT_CONFIG.hqLocation}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Serving Pune, PCMC &amp; across Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
