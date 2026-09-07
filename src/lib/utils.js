import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const CONTACT_CONFIG = {
  name: "GUPTA ENTERPRISES",
  tagline: "Wholesale Distributor",
  phoneDisplay: "+91 93733 16547",
  phoneTel: "+919373316547",
  email: "guptatradingcompany65@gmail.com",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:30 PM (IST)",
  hqLocation: "Pune, Maharashtra, India",
  avgDispatchTime: "Fast Delivery Across Pune & Maharashtra",
};

export function getWhatsAppUrl(customMessage) {
  const defaultText =
    "Hello Gupta Enterprises, I would like to inquire about wholesale pricing and product availability in Pune.";
  const text = customMessage || defaultText;
  return `https://wa.me/919373316547?text=${encodeURIComponent(text.trim())}`;
}

export function getEmailUrl(subject, body) {
  const defaultSubject = "Wholesale Inquiry - Gupta Enterprises (Pune)";
  const defaultBody =
    "Hello Gupta Enterprises Team,\n\nWe are interested in bulk purchasing and would like to receive your wholesale price list and catalog.\n\nDelivery Location: Pune / Maharashtra\n\nThank you.";
  const s = subject || defaultSubject;
  const b = body || defaultBody;
  return `mailto:guptatradingcompany65@gmail.com?subject=${encodeURIComponent(
    s
  )}&body=${encodeURIComponent(b)}`;
}

export function scrollToSection(elementId) {
  const target = document.getElementById(elementId.replace(/^#/, ""));
  if (!target) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -70, duration: 1.2 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
