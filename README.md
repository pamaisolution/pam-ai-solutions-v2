# PAM AI Solutions — Company Website

A production-ready marketing website for **PAM AI Solutions** (`Build • Automate • Grow`), built with React 19, Vite, and Tailwind CSS. Fully responsive, dark-themed, glassmorphic UI inspired by modern SaaS studios (OpenAI, Vercel, Linear, Framer, Stripe).

## Tech Stack

- **React 19** + **Vite** (JavaScript only — no TypeScript)
- **Tailwind CSS** for styling, with a custom brand token system
- **React Router DOM** for routing
- **Framer Motion** for scroll reveals, hero motion and page transitions
- **GSAP** available for advanced animation needs
- **Lucide React** + **React Icons** for iconography
- **EmailJS** for the contact form
- **React Helmet Async** for per-page SEO metadata

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Environment variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials to enable the contact form:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Create a free account at [emailjs.com](https://www.emailjs.com/) to get these values. Without them, the form will show a friendly configuration error instead of failing silently.

## Available Scripts

| Command           | Description                                |
| ------------------ | ------------------------------------------- |
| `npm run dev`       | Start the local dev server with HMR          |
| `npm run build`     | Production build to `dist/`                  |
| `npm run preview`   | Preview the production build locally         |
| `npm run lint`      | Run ESLint across the project                |

## Project Structure

```
src/
├── assets/        # Static assets (images, icons)
├── components/
│   ├── common/    # Seo, PageHeader, LoadingScreen, WhatsAppButton, etc.
│   ├── layout/    # Navbar, Footer, Logo, MobileMenu
│   └── ui/        # Button, Container, Reveal, SectionHeading, GlowOrb
├── layouts/       # MainLayout (navbar + footer wrapper)
├── pages/         # Route-level pages (Home, About, Services, ...)
├── sections/      # Page sections grouped by page (home/, contact/, shared/)
├── hooks/         # useCountUp, useScrolled, useLockBodyScroll
├── utils/         # cn (classnames), validation
├── context/       # ThemeContext (dark/light mode)
├── services/      # emailService (EmailJS wrapper)
├── data/          # Static content: services, products, pricing, testimonials, site config
├── styles/        # Tailwind entry + global CSS layers
├── router/        # Route configuration + AppRouter
├── App.jsx
└── main.jsx
```

## Pages

- **Home** — Hero, Services, Products, Why Choose Us, Testimonials, Pricing, CTA
- **About** — Story, mission/vision, values, process
- **Services** — Full service catalogue with detail cards
- **Products** — PAM SQL Generator, Lead Generation System, WhatsApp Automation
- **Pricing** — Starter / Professional / Enterprise plans + FAQ
- **Contact** — Validated contact form (EmailJS), contact cards, embedded map
- **Privacy Policy** / **Terms** — Legal pages
- **404** — Custom not-found page

## Deployment (Vercel)

This project builds with zero configuration required on Vercel:

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` · Output directory: `dist`
5. Add the three `VITE_EMAILJS_*` environment variables in the Vercel dashboard.
6. Deploy.

## Brand

| Token       | Value      |
| ----------- | ---------- |
| Primary     | `#0057FF`  |
| Secondary   | `#FFC107`  |
| Background  | `#08142E`  |
| Text        | `#D8E6FF`  |
| Accent      | `#3B82F6`  |
| Headings    | Poppins (ExtraBold) |
| Body        | Inter      |

## Contact

- Phone: +91 97904 85368
- Email: pamaisolution@gmail.com
- WhatsApp: https://chat.whatsapp.com/HzPNGOxzmK9FbMLVwvy54v
