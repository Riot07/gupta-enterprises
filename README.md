# GUPTA ENTERPRISES

> **Premier Wholesale Distributor & Supply Chain Partner**  
> Authorized Channel Partner • FMCG • Industrial Packaging • Institutional Bulk Procurement

A modern, high-converting, production-ready single-page website application designed specifically for **Gupta Enterprises**, engineered with a clean React component architecture, industrial B2B visual identity, Lenis smooth scrolling, Framer Motion transitions, interactive product catalog, and an RFQ wholesale quote calculator with instant WhatsApp and Email lead capture.

---

## 🚀 Quick Start

### Option 1: Instant Local Preview (Zero Setup / No Node.js Required)
Preview the production build immediately using Python (pre-installed):

```bash
cd gupta-enterprises
python3 serve.py 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

Or use Python's built-in HTTP server:
```bash
python3 -m http.server --directory dist 3000
```

---

### Option 2: Modern React / Vite Development
With Node.js (v18+ or v20 LTS):

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build with Vite
npm run preview
```

---

## 📁 Project Architecture

```
gupta-enterprises/
├── dist/                              # Compiled, optimized production output
│   ├── index.html                     # Minified production HTML with SEO & JSON-LD
│   ├── favicon.svg                    # Vector brand mark favicon
│   └── assets/                        # Minified JS & CSS bundles
├── public/                            # Static assets
│   ├── favicon.svg                    # Brand emblem
│   └── images/
│       ├── logo.svg                   # Brand mark vector
│       └── og.jpg                     # High-res OpenGraph social share card
├── src/                               # Complete React Source Code
│   ├── components/                    # Modular UI Components
│   │   ├── Preloader.jsx              # Animated supply chain initialization preloader
│   │   ├── Navbar.jsx                 # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Hero.jsx                   # High-impact hero with live telemetry & dual CTAs
│   │   ├── TrustStrip.jsx             # Infinite brand partner marquee & certifications
│   │   ├── SectionHeader.jsx          # Reusable section header & badge component
│   │   ├── About.jsx                  # 15+ yr heritage, 40,000+ sq ft warehousing & fleet
│   │   ├── Offerings.jsx              # 6 wholesale sectors (FMCG, Industrial, Institutional, etc.)
│   │   ├── ProductCatalog.jsx         # Filterable catalog with search & direct WhatsApp order
│   │   ├── NetworkCoverage.jsx        # Regional transit hubs (MMR, Pune, Nashik, Pan-India)
│   │   ├── Process.jsx                # 4-step streamlined wholesale procurement flow
│   │   ├── WhyChooseUs.jsx            # Value differentiators (margins, buffer, SLA, credit)
│   │   ├── Testimonials.jsx           # B2B client reviews & wholesale procurement FAQs
│   │   ├── QuoteCalculator.jsx        # Interactive RFQ calculator & lead generator
│   │   ├── Contact.jsx                # Direct contact cards, warehouse info, contact form
│   │   ├── Footer.jsx                 # Comprehensive B2B footer with legal & GST badges
│   │   └── FloatingActions.jsx        # Quick WhatsApp, Phone call & Scroll-to-Top
│   ├── data/
│   │   └── content.js                 # Centralized content store (SKUs, hubs, reviews)
│   ├── lib/
│   │   └── utils.js                   # Helper functions (WhatsApp/Email URLs, scroll)
│   ├── App.jsx                        # Layout orchestrator with Lenis & toast provider
│   ├── main.jsx                       # React 18 DOM entrypoint
│   └── index.css                      # Tailwind base, utilities, and scrollbar
├── index.html                         # Root HTML template with Schema.org WholesaleStore
├── package.json                       # Scripts and dependencies
├── vite.config.js                     # Vite build configuration with @ alias
├── tailwind.config.js                 # Custom industrial theme color definitions
├── postcss.config.js                  # PostCSS plugins
└── serve.py                           # Python 3 preview server script
```

---

## 🎯 Lead Generation & Contact Channels

| Channel | Contact Point | Action |
| :--- | :--- | :--- |
| **WhatsApp Desk** | `+91 93733 16547` | Instant catalog, rate cards & live stock check |
| **Direct Phone** | `+91 93733 16547` | Direct sales manager line |
| **Procurement Email** | `guptatradingcompany65@gmail.com` | Formal RFQs, tenders, and Purchase Orders |
| **Logistics Facility** | Central Hub, Maharashtra, India | Monday – Saturday: 8:00 AM – 8:00 PM |

---

## 🎨 Key Features & Technical Highlights

1. **Brand Identity**: Custom deep industrial navy (`#060A14`), slate grays, and energetic distribution amber (`#F59E0B`) accents tailored to modern commercial wholesale distribution.
2. **Smooth Momentum Scrolling**: Integrated Lenis smooth-scrolling engine for natural, premium scrolling feel.
3. **Framer Motion Animations**: Viewport-triggered section reveals, staggered cards, smooth interactive tabs, and animated modals.
4. **Interactive Product Catalog**: Real-time category filtering, search query matching, SKU specs, MOQs, dispatch SLAs, and direct WhatsApp quote generators.
5. **Wholesale RFQ Calculator**: Interactive quotation tool calculating tiered volume advantages and formatting ready-to-send inquiries for WhatsApp and Email.
6. **Production Verified**: Passes `npm run build` with zero errors and serves cleanly on desktop and mobile.
