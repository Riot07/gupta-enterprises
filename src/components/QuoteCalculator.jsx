import React, { useState } from "react";
import {
  Calculator,
  MessageCircle,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import SectionHeader from "./SectionHeader";
import { getWhatsAppUrl, getEmailUrl, CONTACT_CONFIG } from "@/lib/utils";

export default function QuoteCalculator() {
  const [product, setProduct] = useState("General / Mixed Wholesale Order");
  const [volume, setVolume] = useState("Medium Commercial Volume");
  const [location, setLocation] = useState("Pune City (Local Delivery)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const products = [
    "General / Mixed Wholesale Order",
    "Water Bottles (Branded)",
    "Water Bottles (Customisable with Logo)",
    "Stationery Items (Bulk Consumables)",
    "A4 Paper (Bulk Reams & Boxes)",
  ];

  const volumes = [
    "Small Wholesale Order",
    "Medium Commercial Volume",
    "Large Institutional / Corporate Tender",
    "Bulk Freight Consignment",
  ];

  const locations = [
    "Pune City (Local Delivery)",
    "Pimpri-Chinchwad (PCMC)",
    "Hinjawadi & Corporate Parks",
    "Rest of Maharashtra",
  ];

  const generateSummary = () => {
    return `*WHOLESALE RFQ INQUIRY - GUPTA ENTERPRISES (PUNE)*\n` +
      `----------------------------------------\n` +
      `*Contact Person:* ${name || "Prospective Buyer"}\n` +
      `*Company/Organization:* ${company || "Not specified"}\n` +
      `*Phone Number:* ${phone || "Not provided"}\n` +
      `*Product Category:* ${product}\n` +
      `*Order Volume:* ${volume}\n` +
      `*Delivery Location:* ${location}\n` +
      `*Additional Details:* ${notes || "Standard catalog selection"}\n` +
      `----------------------------------------\n` +
      `Please share current wholesale pricing and catalog details.`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg = generateSummary();
    toast.success("Opening WhatsApp with your customized quotation request...");
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = `Wholesale RFQ: ${product} - ${company || "Pune"}`;
    const body = generateSummary();
    toast.success("Opening email client with pre-filled RFQ details...");
    window.location.href = getEmailUrl(subject, body);
  };

  return (
    <section id="quote" className="py-20 sm:py-24 bg-cream-50/70 border-b border-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Quick Wholesale Quotation"
          title="Calculate Your Requirement &"
          highlight="Get Wholesale Rates."
          description="Select your target product category and order volume to receive an immediate quotation and catalog on WhatsApp or Email."
        />

        <div className="card-clean p-6 sm:p-10 text-left">
          <form onSubmit={handleWhatsApp} className="space-y-6">
            {/* Product Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                1. Select Product Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {products.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setProduct(p)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      product === p
                        ? "bg-navy-900 text-white shadow-sm"
                        : "bg-cream-50 text-navy-800 border border-cream-200 hover:border-ochre"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Volume Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                2. Approximate Order Volume
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {volumes.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVolume(v)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      volume === v
                        ? "bg-navy-900 text-white shadow-sm"
                        : "bg-cream-50 text-navy-800 border border-cream-200 hover:border-ochre"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                3. Delivery Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocation(loc)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      location === loc
                        ? "bg-navy-900 text-white shadow-sm"
                        : "bg-cream-50 text-navy-800 border border-cream-200 hover:border-ochre"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-2 border-t border-cream-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                4. Your Organization &amp; Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Store / Company / School"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cream-200 text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-ochre"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cream-200 text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-ochre"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile / WhatsApp Number"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cream-200 text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-ochre"
                />
              </div>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specific items, custom bottle logo requirements, or questions..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-cream-200 text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-ochre resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send RFQ on WhatsApp (+91 93733 16547)</span>
              </button>

              <button
                type="button"
                onClick={handleEmail}
                className="py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-900 bg-white hover:bg-cream-50 border border-cream-200 hover:border-ochre flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-ochre" />
                <span>Email Official RFQ</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-ochre shrink-0" />
              <span>Direct distributor pricing and catalog sent promptly from our Pune office.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
