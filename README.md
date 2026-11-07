# Muruganantham Technosoft (MT) — Production Website

> **Innovate | Develop | Transform**  
> High-performance, production-ready website for **Muruganantham Technosoft**, a remote-first software engineering studio based in Coimbatore, Tamil Nadu, India.

---

## 1. Verified Company Credentials

- **Company Name:** Muruganantham Technosoft (Brand: MT)
- **Tagline:** Innovate | Develop | Transform
- **Core Business:** Bespoke Web Applications, High-Performance Business Websites, Mobile Apps (Android & iOS), SaaS Platforms, and Business Process Automation.
- **Official Registration:** Udyam Registration Certificate `UDYAM-TN-28-0225093` (Micro enterprise, classification year 2026–27, Ministry of Micro, Small and Medium Enterprises, Govt. of India).
- **Operating Model:** Remote-first, online service delivery. Clients across India and internationally.
- **Direct Contacts:**
  - **Phone:** `+91 8778232067`
  - **WhatsApp:** `https://wa.me/918778232067`
  - **Email:** `mtechnosoft.dev@gmail.com`
  - **GitHub:** `https://github.com/RanjithSanthosh`

---

## 2. Technology Architecture

This website is engineered for maximum speed, accessibility, and search engine discoverability using a **100% pure static HTML5** architecture:

- **100% Pre-Rendered Semantic HTML5:** Every page exists directly as a self-contained `.html` file. Search engine bots (Googlebot, Bingbot) and users receive complete, meaningful, and crawlable text immediately on the first HTTP response without any client-side JavaScript rendering overhead.
- **Direct Static Data:** All copy, project case studies, service specifications, pricing policies, and Schema.org JSON-LD microdata are written directly into the HTML pages.
- **Compiled & Minified Tailwind CSS:** Production CSS is compiled directly from the static HTML files (`assets/css/styles.min.css`) to just ~30 KB.
- **Minimal Vanilla JavaScript (Only for Essential Micro-Interactions):**
  - `assets/js/navigation.js` — Mobile drawer menu & keyboard `Escape` accessibility
  - `assets/js/main.js` — Accessible FAQ accordion toggle & portfolio category tab filtering
  - `assets/js/contact-form.js` — Client-side form validation & mailto fallback bridge

---

## 3. Directory & Route Structure

```
/
├── index.html                               # Homepage (12 comprehensive sections)
├── services/
│   ├── index.html                           # All Services Overview & Engineering Comparison
│   ├── website-development/index.html       # High-Performance Business Websites
│   ├── web-application-development/index.html # Scalable SaaS & Web Applications
│   ├── android-app-development/index.html   # Native & Cross-Platform Android Apps
│   ├── ios-app-development/index.html       # Fluid iOS Mobile Applications
│   ├── ui-ux-design/index.html              # UI/UX & Interactive Prototyping
│   ├── business-automation/index.html       # Workflow & Process Automation
│   └── maintenance-support/index.html       # Maintenance, SLAs & Security Patches
├── work/
│   └── index.html                           # Portfolio & Genuine Completed Projects
├── about/
│   └── index.html                           # About Us, Remote Model & Operating Principles
├── process/
│   └── index.html                           # 7-Stage Agile Engineering Lifecycle
├── industries/
│   └── index.html                           # Vertical Capabilities (SaaS, EdTech, FinTech, etc.)
├── blog/
│   └── index.html                           # Technical Insights & Strategic Decision Guides
├── contact/
│   └── index.html                           # Direct Channels & Project Enquiry Form
├── privacy-policy/
│   └── index.html                           # Privacy Policy
├── terms-of-service/
│   └── index.html                           # Terms of Service & Engagement Principles
├── 404.html                                 # Accessible Custom 404 Page
├── robots.txt                               # Crawl rules pointing to sitemap.xml
├── sitemap.xml                              # 17 canonical URLs with changefreq & priorities
├── assets/
│   ├── brand/
│   │   ├── logo.svg                         # Full horizontal brand vector logo
│   │   └── mark.svg                         # Standalone geometric MT monogram
│   ├── css/
│   │   └── styles.min.css                   # Compiled production CSS (~30 KB)
│   ├── js/
│   │   ├── navigation.js                    # Mobile drawer & keyboard navigation
│   │   ├── main.js                          # FAQ accordions & work category filters
│   │   └── contact-form.js                  # Accessible validation & mailto bridge
│   └── images/projects/                     # Genuine screenshots & vector interfaces
├── src/                                     # Source templates, data models, and styles
├── scripts/
│   ├── build-static-html.js                 # Static HTML generator script
│   └── server.js                            # Zero-dependency local preview server
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .env.example
```

---

## 4. Local Development & Build Commands

### Prerequisites
- Node.js v18 or later
- npm v9 or later

### Install Dependencies
```bash
npm install
```

### Build Production Website
To recompile all static HTML files, sitemaps, and minified production CSS:
```bash
npm run build
```

### Preview Locally
To launch the zero-dependency local preview server at `http://localhost:3000/`:
```bash
node scripts/server.js
# or
npm run serve
```

---

## 5. Deployment Instructions

Because this website is compiled to 100% static HTML, CSS, and vanilla JS, it can be deployed to any modern static hosting platform with zero server maintenance:

### Option A: Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. In Vercel, click **Add New Project** and select this repository.
3. Configure settings:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `.` (root directory)
4. Add environment variables if desired (e.g. `SITE_URL=https://your-domain.com`).
5. Click **Deploy**.

### Option B: Netlify
1. Connect repository in Netlify.
2. Set **Build command:** `npm run build`
3. Set **Publish directory:** `.`
4. Deploy site.

### Option C: Cloudflare Pages
1. In Cloudflare Pages, connect your repository.
2. Set **Build command:** `npm run build`
3. Set **Build output directory:** `/`
4. Deploy.

---

## 6. Contact Form & Lead Generation Setup

The enquiry form (`contact/index.html`) is equipped with client-side field validation, accessibility alerts, and two modes of operation:

### Mode 1: Zero-Configuration Mail Client Bridge (Default)
When deployed without an external API backend, submitting the form:
1. Validates all inputs (Name, Email, Service, Description, Consent).
2. Generates an encrypted pre-formatted `mailto:` payload directly addressed to `mtechnosoft.dev@gmail.com`.
3. Displays a helpful status confirmation with one-click buttons to open their email client or chat immediately on WhatsApp.
4. **Guarantees zero false success messages**—the user knows exactly where their message is going.

### Mode 2: Hosted Endpoint (e.g., Formspree or Cloud Function)
If you prefer submissions to be delivered silently via an email webhook:
1. Create a free form at [formspree.io](https://formspree.io) or set up a Resend / AWS SES serverless endpoint.
2. In `contact/index.html`, add the endpoint to the form tag:
   ```html
   <form id="project-enquiry-form" data-endpoint="https://formspree.io/f/YOUR_FORM_ID" class="space-y-6" novalidate>
   ```
3. The script will automatically dispatch a `fetch()` POST with JSON data and display an on-page success confirmation once accepted by the server.

---

## 7. Search Engine Optimization (SEO) & Launch Checklist

When your production domain is finalized:

1. **Update Domain Variable:**
   - In `src/data/site.js` or your `.env` file, change `SITE_URL` from `https://mtechnosoft.com` to your finalized domain.
   - Run `npm run build` to update all canonical URLs, Open Graph tags, and `sitemap.xml`.
2. **Google Search Console (GSC):**
   - Add your domain to [Google Search Console](https://search.google.com/search-console).
   - Verify ownership via DNS TXT record with your domain registrar.
   - Submit the sitemap URL: `https://your-domain.com/sitemap.xml`.
3. **Google Analytics 4 (Optional):**
   - If desired, add your GA4 Measurement ID (`G-XXXXXXXXXX`) inside `src/layouts/base.js` and re-run `npm run build`.
4. **Run PageSpeed Insights:**
   - Test your live domain at [PageSpeed Insights](https://pagespeed.web.dev/).
   - Due to compiled CSS, pre-rendered HTML, and lazy-loaded assets, your site is architected to achieve 95+ scores on mobile and desktop.

---

## 8. Verified Portfolio Projects Included

All featured case studies showcase genuine completed work:
1. **HabitVerse** — Full-Featured Habit Tracking & Personal Growth SaaS (`https://habitverse.co.in/`)
2. **Patashala** — Institutional School Management & Student Portal (`https://www.patashala.net/`)
3. **Viswa Sports** — Sports Goods E-Commerce Storefront (`https://viswasports.com/`)
4. **MRV Metals & Furnitures** — Commercial Catalog & B2B Quotations (`https://mrvmetalsandfurnitures.vercel.app/`)
5. **Sami English & Abacus Academy** — Educational Training & Admissions Funnel (`https://samienglishabacus.com/`)
6. **Gemini AI Intelligent Workspace** — Conversational AI with Stripe (`https://geminiai-ranjith.netlify.app/`)
7. **Real Estate Discovery Platform** — Property Listings & Filter Engine (`https://real-estate-two-plum.vercel.app/`)
8. **MedView Healthcare** — Tele-Health Consultation UI (`https://medviewpages.netlify.app/`)
