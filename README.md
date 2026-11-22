# 🦅 Better Davao (betterdavao.org)

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Civic%20Tech-BetterGov.ph-amber)](https://bettergov.ph)

**Better Davao** is an independent, community-driven civic transparency and citizen utility platform for Davao City. Built by Dabawenyos, for Dabawenyos, it bridges the gap between public municipal data and ordinary citizens through intuitive tools, transparent fiscal breakdowns, real-time emergency hotlines, and modern civic AI.

Part of the national [BetterGov.ph](https://bettergov.ph) civic open-data initiative.

---

## 🌟 Key Features

### 1. 🤖 "Ask Davao AI" Civic Assistant
- Built-in natural language civic assistant trained on Davao City's landmark ordinances (Anti-Smoking, Liquor Ban, Speed Limits), 911 protocols, eBPLS permits, and Lingap medical assistance.
- Supports dual language queries in both **English** and **Sinugbuanong Binisaya**.

### 2. 🏛️ 182 Barangays & Emergency Hub
- Searchable directory of all **182 Barangays** across Davao's 3 Congressional Districts and 11 Administrative Districts (Poblacion, Talomo, Agdao, Buhangin, Bunawan, Paquibato, Toril, Tugbok, Calinan, Baguio, Marilog).
- Real-time station mapping to local police precincts (PS1 through PS12) and district health centers.
- One-click hotline calling and copy-to-clipboard.

### 3. 🔍 Global Command Palette (`Ctrl + K` / `Cmd + K`)
- Instant keyboard navigation to jump directly to hotlines, services, councilors, priority blueprints, or mega-projects from anywhere on the site.

### 4. 🧮 Fiscal Transparency & Citizen Tax Calculator
- Plain-language visual breakdown of the **₱12.7 Billion** Davao City annual budget.
- Interactive **"Dabawenyo Tax Calculator"**: enter your estimated annual local taxes (Real Property Tax, business permit fees, or cedula) to see tangible peso-by-peso allocation to 911 dispatch, district hospitals, roads, and social welfare.

### 5. 🏗️ Infrastructure Tracker & Project Timelines
- Live tracking of mega-infrastructure projects:
  - **Davao City Bypass Tunnel (45.5 km)** with the country's first long-distance mountain tunnel
  - **Samal Island–Davao City Connector (SIDC) Bridge (3.98 km)**
  - **Davao Public Transport Modernization Project (HPBS / 1,100 bus fleet)**
  - **Davao Coastal Road & Bucana Steel Bridge**
  - **Waste-to-Energy (WTE) Facility**
- Visual percentage progress bars and milestone completion checklists.

### 6. 🌐 Bilingual & Accessibility Suite
- **Bisaya / English Switcher**: One-click toggle between Sinugbuanong Binisaya and English.
- **Day / Night Mode**: Seamless theme switching with system detection.
- **Dynamic Font Resizer**: `A-` / `A+` scaling for senior citizens and low-vision users.
- **Offline PWA (Progressive Web App)**: Service worker caching allows emergency 911 hotlines, disaster protocols, and ordinances to remain accessible offline during storms, floods, or signal loss.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Themes**: [`next-themes`](https://github.com/pacocoursey/next-themes)
- **Animations**: [GSAP](https://gsap.com)
- **Deployment**: Static & Edge-ready

---

## 💻 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/jes-rams/betterdavao.org.git
cd betterdavao.org
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To generate an optimized production build:

```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
betterdavao.org/
├── public/
│   ├── images/               # High-resolution civic photography & assets
│   ├── manifest.json         # PWA Manifest configuration
│   └── sw.js                 # Offline service worker cache
├── src/
│   ├── app/
│   │   ├── about/            # Mission, neutrality & BetterGov.ph info
│   │   ├── agenda/           # 12-Point Priority Agenda detail pages
│   │   ├── barangays/        # 182 Barangays & District Emergency Hub
│   │   ├── budget/           # Fiscal breakdown & citizen tax calculator
│   │   ├── council/          # 21st Sangguniang Panlungsod directory
│   │   ├── life-is-here/     # 7 Davao iconic livability pillars
│   │   ├── privacy/          # Privacy Policy
│   │   ├── projects/         # Infrastructure tracker & timelines
│   │   ├── services/         # Citizen e-services directory & search
│   │   ├── terms/            # Terms and Conditions
│   │   ├── layout.tsx        # Root layout with providers & AI assistant
│   │   └── page.tsx          # Main civic dashboard homepage
│   ├── components/
│   │   ├── AccessibilityControls.tsx # Day/Night, Font resizer, Language
│   │   ├── AskDavaoAI.tsx            # Floating civic AI assistant
│   │   ├── CommandPalette.tsx        # Global Ctrl+K instant search
│   │   ├── Navbar.tsx                # Responsive navigation header
│   │   └── Footer.tsx                # Public oversight & open-source footer
│   ├── context/
│   │   └── LanguageContext.tsx       # English / Bisaya state provider
│   └── data/                         # Verified public JSON datasets
```

---

## 📊 Data Sourcing Policy

Better Davao City is an **independent civic initiative** and is **not affiliated with or operated by the City Government of Davao**. All datasets are strictly gathered from verified public domain disclosures:
* Official Davao City Government Portal (`davaocity.gov.ph`)
* 21st Sangguniang Panlungsod Legislative Records (`sp.davaocity.gov.ph`)
* Commission on Audit (COA) Annual Audit Reports (`coa.gov.ph`)
* Department of Budget and Management (DBM) Local Budget Circulars
* Department of Public Works and Highways (DPWH Region XI)

---

## 🤝 Contributing

We welcome contributions from fellow Dabawenyos and civic tech advocates:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewCivicFeature`)
3. Commit your Changes (`git commit -m 'feat: add new public health clinic info'`)
4. Push to the Branch (`git push origin feature/NewCivicFeature`)
5. Open a Pull Request

---

## 📄 License & Maintainer

Distributed under the **MIT License**.

- **Lead Maintainer**: [@jes-rams](https://github.com/jes-rams)
- **Live Portal**: [https://betterdavao.org](https://betterdavao.org)
- **Network**: [BetterGov.ph](https://bettergov.ph) / [BetterLGU](https://lgu.bettergov.ph)
