import Image from "next/image";
import Nav from "./components/Nav";
import AnimatedSection from "./components/AnimatedSection";
import ContactForm, { MailtoLink } from "./components/ContactForm";

/* ─── SVG: Hero Graphic ───────────────────────────────────────── */
function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full hero-graphic"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5db8e8" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#5db8e8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c9ee8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#7c9ee8" stopOpacity="0" />
        </radialGradient>
        <filter id="hblur">
          <feGaussianBlur stdDeviation="32" />
        </filter>
      </defs>
      {/* Glow orbs */}
      <circle cx="250" cy="260" r="155" fill="url(#hg1)" filter="url(#hblur)" />
      <circle cx="295" cy="195" r="115" fill="url(#hg2)" filter="url(#hblur)" />

      {/* Outer rotating ring */}
      <circle
        cx="250" cy="250" r="228"
        stroke="#5db8e8" strokeOpacity="0.13" strokeWidth="1"
        strokeDasharray="9 22"
        className="svg-rotate"
      />
      {/* Cardinal accent marks */}
      <circle cx="250" cy="22"  r="3.5" fill="#5db8e8" fillOpacity="0.7" className="svg-glow" />
      <circle cx="478" cy="250" r="3.5" fill="#5db8e8" fillOpacity="0.7" className="svg-glow-b" />
      <circle cx="250" cy="478" r="3.5" fill="#5db8e8" fillOpacity="0.7" className="svg-glow" />
      <circle cx="22"  cy="250" r="3.5" fill="#5db8e8" fillOpacity="0.7" className="svg-glow-b" />

      {/* Mid counter-rotating ring */}
      <circle
        cx="250" cy="250" r="168"
        stroke="#7c9ee8" strokeOpacity="0.09" strokeWidth="1"
        strokeDasharray="4 14"
        className="svg-rotate-rev"
      />

      {/* Compass lines */}
      <line x1="250" y1="45"  x2="250" y2="455" stroke="#5db8e8" strokeOpacity="0.045" strokeWidth="1" />
      <line x1="45"  y1="250" x2="455" y2="250" stroke="#5db8e8" strokeOpacity="0.045" strokeWidth="1" />
      <line x1="93"  y1="93"  x2="407" y2="407" stroke="#5db8e8" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="407" y1="93"  x2="93"  y2="407" stroke="#5db8e8" strokeOpacity="0.03" strokeWidth="1" />

      {/* Outer hexagon (floating) */}
      <polygon
        points="250,142 327,189 327,311 250,358 173,311 173,189"
        stroke="#5db8e8" strokeOpacity="0.22" strokeWidth="1"
        className="svg-float"
      />
      {/* Inner hexagon (offset float) */}
      <polygon
        points="250,170 313,206 313,294 250,330 187,294 187,206"
        stroke="#7c9ee8" strokeOpacity="0.11" strokeWidth="1"
        className="svg-float-b"
      />

      {/* Central glow rings */}
      <circle cx="250" cy="250" r="32" fill="#5db8e8" fillOpacity="0.1" className="svg-glow" />
      <circle cx="250" cy="250" r="11" fill="#5db8e8" fillOpacity="0.4" className="svg-glow" />
      <circle cx="250" cy="250" r="4"  fill="#a8d8f0" />

      {/* Orbiting accent dots */}
      <circle cx="250" cy="84" r="2.5" fill="#7c9ee8" fillOpacity="0.65" />
      <circle cx="416" cy="250" r="2.5" fill="#5db8e8" fillOpacity="0.65" />
    </svg>
  );
}

/* ─── SVG: Service Icons ──────────────────────────────────────── */
function IconBrand() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="17" cy="24" r="13" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="31" cy="24" r="13" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <path d="M24 12.5 A13 13 0 0 1 24 35.5 A13 13 0 0 1 24 12.5Z" fill="#5db8e8" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="2" fill="#5db8e8" fillOpacity="0.7" />
    </svg>
  );
}
function IconDigital() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="24" cy="24" r="6" fill="#5db8e8" fillOpacity="0.55" />
      <circle cx="24" cy="24" r="14" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 8" />
      <circle cx="8"  cy="11" r="3" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="40" cy="11" r="3" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="8"  cy="37" r="3" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="40" cy="37" r="3" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="24" y1="24" x2="8"  y2="11" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="24" x2="40" y2="11" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="24" x2="8"  y2="37" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="24" x2="40" y2="37" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}
function IconDirection() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="24" cy="24" r="18" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="24" cy="24" r="9"  stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.65" />
      <circle cx="24" cy="24" r="3"  fill="#5db8e8" fillOpacity="0.7" />
      <line x1="24" y1="6"  x2="24" y2="15" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="24" y1="33" x2="24" y2="42" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="6"  y1="24" x2="15" y2="24" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="33" y1="24" x2="42" y2="24" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="10" y1="10" x2="16" y2="16" stroke="#5db8e8" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="38" y1="10" x2="32" y2="16" stroke="#5db8e8" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="10" y1="38" x2="16" y2="32" stroke="#5db8e8" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="38" y1="38" x2="32" y2="32" stroke="#5db8e8" strokeWidth="0.8" strokeOpacity="0.25" />
    </svg>
  );
}
function IconWebsite() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="7" y="10" width="34" height="28" rx="4" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <line x1="7" y1="18" x2="41" y2="18" stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.35" />
      <circle cx="12" cy="14" r="1.5" fill="#5db8e8" fillOpacity="0.7" />
      <circle cx="17" cy="14" r="1.5" fill="#5db8e8" fillOpacity="0.45" />
      <path d="M16 28H24" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M16 32H30" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.24" strokeLinecap="round" />
    </svg>
  );
}
function IconMobile() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="14" y="6" width="20" height="36" rx="5" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <rect x="18" y="12" width="12" height="18" rx="2" fill="#5db8e8" fillOpacity="0.08" />
      <line x1="20" y1="35" x2="28" y2="35" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.4" />
    </svg>
  );
}
function IconIntegration() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="8" y="11" width="11" height="11" rx="2" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="29" y="11" width="11" height="11" rx="2" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="18.5" y="27" width="11" height="11" rx="2" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M19 16.5H29" stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.35" />
      <path d="M24 22V27" stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.35" />
      <circle cx="24" cy="24" r="3" fill="#5db8e8" fillOpacity="0.16" />
      <circle cx="24" cy="24" r="1.5" fill="#5db8e8" fillOpacity="0.7" />
    </svg>
  );
}

/* ─── Arrow Icon ──────────────────────────────────────────────── */
function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function Home() {
  const marqueeItems = [
    "Custom Web Applications",
    "Product Engineering",
    "Internal Tools",
    "Platform Modernization",
    "Automation & AI Workflows",
    "Customer Portals",
    "Technical Strategy",
    "UX for Complex Systems",
  ];

  const services = [
    {
      icon: <IconBrand />,
      num: "01",
      title: "Web Applications",
      desc: "Custom platforms, SaaS products, and business systems built for performance, usability, and long-term growth.",
    },
    {
      icon: <IconWebsite />,
      num: "02",
      title: "Websites",
      desc: "Marketing sites, landing pages, and company websites that feel polished, load fast, and support your brand and sales goals.",
    },
    {
      icon: <IconMobile />,
      num: "03",
      title: "Mobile Apps",
      desc: "Mobile experiences built for teams that need their product or service in customers' hands on iOS and Android.",
    },
    {
      icon: <IconDigital />,
      num: "04",
      title: "Internal Tools",
      desc: "Dashboards, portals, and operational software that streamline workflows and replace manual processes.",
    },
    {
      icon: <IconIntegration />,
      num: "05",
      title: "Systems & Integrations",
      desc: "APIs, third-party integrations, and connected systems that keep your tools in sync and your operations moving.",
    },
    {
      icon: <IconDirection />,
      num: "06",
      title: "Modernization & Support",
      desc: "Improvements for legacy products, cleanup of technical debt, and ongoing support to keep important software healthy.",
    },
  ];

  const portfolio = [
    {
      src: "/jackie.png",
      num: "01",
      cat: "Logistics Platform",
      title: "Jackie",
      summary: "On-demand delivery and mobility product built for fast booking, dispatch, and customer trust.",
      tags: ["Consumer App", "Operations"],
      objectPosition: "center top",
    },
    {
      src: "/01.webp",
      num: "02",
      cat: "AI Product",
      title: "PhotoMe",
      summary: "AI-powered photo enhancement experience spanning a polished web landing page and mobile onboarding flow.",
      tags: ["AI Workflow", "Web + Mobile"],
      objectPosition: "center center",
    },
    {
      src: "/01-3.webp",
      num: "03",
      cat: "Fintech Utility",
      title: "Currency Watch",
      summary: "Exchange-rate tracking app that helps users compare market pricing and make smarter currency decisions.",
      tags: ["Finance", "Mobile App"],
      objectPosition: "center center",
    },
    {
      src: "/01-2.webp",
      num: "04",
      cat: "Food Intelligence",
      title: "BiteBeam",
      summary: "Nutrition-focused mobile product for scanning meals, tracking dishes, and turning food data into insight.",
      tags: ["Consumer AI", "Health"],
      objectPosition: "center center",
    },
  ];

  const stats = [
    { num: "01", label: "Business-first discovery and scoping" },
    { num: "02", label: "Senior hands-on design and engineering" },
    { num: "03", label: "Clear milestones, feedback, and delivery" },
    { num: "04", label: "Post-launch iteration and support" },
  ];

  return (
    <>
      <Nav />

      <main style={{ background: "var(--bg)" }}>

        {/* ─── HERO ──────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center grid-bg overflow-hidden"
          style={{ paddingTop: "96px" }}
        >
          {/* Background orbs */}
          <div
            className="pointer-events-none absolute top-[15%] right-[8%] w-[500px] h-[500px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(93,184,232,0.18) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(124,158,232,0.2) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh] py-20">

              {/* Left — content */}
              <div className="flex flex-col gap-8">
                <div className="hero-tag flex items-center gap-3">
                  <span
                    className="section-label"
                    style={{ color: "var(--accent)" }}
                  >
                    Software Development Agency
                  </span>
                  <span
                    className="w-8 h-px"
                    style={{ background: "var(--accent)", opacity: 0.5 }}
                  />
                  <span className="section-label" style={{ color: "var(--muted)" }}>
                    Est. 2019
                  </span>
                </div>

                <h1
                  className="hero-h1 font-display leading-[1.12] tracking-tight"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    fontFamily: "var(--font-syne), system-ui, sans-serif",
                    color: "var(--text)",
                  }}
                >
                  Software built with{" "}
                  <span className="text-gradient">clarity.</span>
                </h1>

                <p
                  className="hero-sub leading-relaxed max-w-md"
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--muted)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                    lineHeight: "1.8",
                  }}
                >
                  We build web apps, internal tools, and digital platforms for
                  teams that need senior execution and reliable delivery.
                </p>

                <div className="hero-ctas flex flex-wrap gap-4">
                  <a href="#services" className="btn-primary">
                    Explore Services
                    <ArrowRight />
                  </a>
                  <a href="#contact" className="btn-outline">
                    Start a Project
                  </a>
                </div>

                {/* Stats */}
                <div className="hero-stats flex flex-wrap gap-8 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {[
                    { num: "50+", label: "Projects" },
                    { num: "5yr", label: "In Practice" },
                    { num: "30+", label: "Clients" },
                  ].map(({ num, label }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <span
                        className="stat-num font-display"
                        style={{ fontSize: "1.6rem", lineHeight: 1, fontFamily: "var(--font-syne), system-ui, sans-serif" }}
                      >
                        {num}
                      </span>
                      <span className="section-label" style={{ color: "var(--muted)" }}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — SVG graphic */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-[480px] h-[480px]">
                  <HeroGraphic />
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-stats"
            style={{ color: "var(--muted)" }}
          >
          
            <div
              className="w-px h-10"
              style={{
                background: "linear-gradient(to bottom, var(--accent), transparent)",
                animation: "glow 2.5s ease-in-out infinite",
              }}
            />
          </div>
        </section>

        {/* ─── MARQUEE ──────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden py-5"
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            background: "rgba(255,255,255,0.012)",
          }}
        >
          <div className="marquee-track whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-6"
                style={{
                  color: i % 3 === 0 ? "var(--accent)" : "var(--muted)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {item}
                <span style={{ color: "var(--border)", fontSize: "1.2rem" }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── SERVICES ─────────────────────────────────────────── */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-32">
          <AnimatedSection>
            <div className="flex flex-col gap-3 mb-16">
              <span className="section-label">Capabilities</span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontFamily: "var(--font-syne), system-ui, sans-serif",
                  color: "var(--text)",
                  lineHeight: 1.2,
                  maxWidth: "480px",
                }}
              >
                Software that removes friction,
                <br />
                <span style={{ color: "var(--accent)" }}>creates leverage, and scales.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map(({ icon, num, title, desc }, i) => (
              <AnimatedSection key={num} delay={i * 120}>
                <div
                  className="glass card-hover p-8 flex flex-col gap-6 h-full"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex items-start justify-between">
                    {icon}
                    <span
                      className="section-label"
                      style={{ color: "rgba(93,184,232,0.35)", fontSize: "0.65rem" }}
                    >
                      {num}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.3rem",
                        fontFamily: "var(--font-syne), system-ui, sans-serif",
                        color: "var(--text)",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.88rem",
                        lineHeight: "1.75",
                        fontWeight: 300,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="link-line flex items-center gap-2 text-xs mt-auto"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0.1em" }}
                  >
                    Learn more
                    <ArrowRight size={12} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ─── WORK ─────────────────────────────────────────────── */}
        <section
          id="work"
          className="py-32"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
                <div className="flex flex-col gap-3">
                  <span className="section-label">Selected Projects</span>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.2rem)",
                      fontFamily: "var(--font-syne), system-ui, sans-serif",
                      color: "var(--text)",
                      lineHeight: 1.2,
                    }}
                  >
                    The kinds of software
                    <br />
                    teams hire us to deliver.
                  </h2>
                </div>
                <a
                  href="#contact"
                  className="link-line text-sm flex items-center gap-2"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Discuss a similar project
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {portfolio.map(({ src, num, cat, title, summary, tags, objectPosition }, i) => (
                <AnimatedSection key={num} delay={i * 100}>
                  <div
                    className="portfolio-item relative overflow-hidden cursor-pointer group"
                    style={{
                      borderRadius: "24px",
                      border: "1px solid var(--border)",
                      aspectRatio: "16/11",
                      background: "var(--surface)",
                    }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={src}
                        alt={`${title} project preview`}
                        fill
                        sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                        className="port-thumb"
                        style={{ objectFit: "cover", objectPosition }}
                      />
                    </div>

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(5,8,16,0.12) 0%, rgba(5,8,16,0) 38%, rgba(5,8,16,0.95) 100%)",
                      }}
                    />

                    {/* Hover accent overlay */}
                    <div
                      className="port-overlay absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(93,184,232,0.1) 0%, transparent 55%)",
                      }}
                    />

                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
                      <span
                        className="section-label"
                        style={{
                          color: "#f4f7fb",
                          background: "rgba(5,8,16,0.6)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "999px",
                          padding: "0.55rem 0.8rem",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {cat}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className="section-label port-cta"
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            background: "rgba(93,184,232,0.18)",
                            border: "1px solid rgba(93,184,232,0.3)",
                            borderRadius: "999px",
                            padding: "0.55rem 0.75rem",
                            backdropFilter: "blur(12px)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          View <ArrowRight size={10} />
                        </span>
                        <span
                          className="section-label"
                          style={{
                            color: "rgba(255,255,255,0.72)",
                            background: "rgba(5,8,16,0.52)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "999px",
                            padding: "0.55rem 0.72rem",
                            backdropFilter: "blur(12px)",
                          }}
                        >
                          {num}
                        </span>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-3"
                    >
                      <div className="flex flex-col gap-2">
                        <span
                          className="font-display"
                          style={{
                            color: "var(--text)",
                            fontFamily: "var(--font-syne), system-ui, sans-serif",
                            fontSize: "clamp(1.35rem, 2vw, 1.8rem)",
                          }}
                        >
                          {title}
                        </span>
                        <p
                          style={{
                            color: "rgba(232,237,244,0.78)",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.9rem",
                            lineHeight: "1.7",
                            fontWeight: 300,
                          }}
                        >
                          {summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="section-label"
                            style={{
                              color: "rgba(255,255,255,0.75)",
                              background: "rgba(255,255,255,0.07)",
                              border: "1px solid rgba(255,255,255,0.12)",
                              borderRadius: "999px",
                              padding: "0.5rem 0.72rem",
                              letterSpacing: "0.16em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT ────────────────────────────────────────────── */}
        <section
          id="about"
          className="py-32"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Left — text */}
              <AnimatedSection>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <span className="section-label">How We Work</span>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                        fontFamily: "var(--font-syne), system-ui, sans-serif",
                        color: "var(--text)",
                        lineHeight: 1.2,
                      }}
                    >
                      A software partner that
                      <br />
                      thinks beyond{" "}
                      <span className="text-gradient">delivery tickets.</span>
                    </h2>
                  </div>

                  <div
                    className="flex flex-col gap-5"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.92rem",
                      lineHeight: "1.8",
                      fontWeight: 300,
                    }}
                  >
                    <p>
                      Clarity One Studios helps companies move from vague requirements,
                      brittle tools, and stalled product ideas to software that teams can
                      actually run on. We work best with founders, operators, and growing
                      businesses that need senior product and engineering judgment without the
                      overhead of building everything in-house first.
                    </p>
                    <p>
                      Our process is deliberate: align on business goals, reduce delivery
                      risk early, ship in focused increments, and stay close to outcomes after
                      launch. We care about usability, architecture, maintainability, and the
                      day-two realities of owning software.
                    </p>
                  </div>

                  <a href="#contact" className="btn-primary self-start">
                    Talk Through Your Project
                    <ArrowRight />
                  </a>
                </div>
              </AnimatedSection>

              {/* Right — stats grid */}
              <AnimatedSection delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map(({ num, label }) => (
                    <div
                      key={label}
                      className="glass p-8 flex flex-col gap-2"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <span
                        className="stat-num font-display"
                        style={{
                          fontSize: "2.5rem",
                          lineHeight: 1,
                          fontFamily: "var(--font-syne), system-ui, sans-serif",
                        }}
                      >
                        {num}
                      </span>
                      <span
                        className="section-label"
                        style={{ color: "var(--muted)", fontSize: "0.65rem" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <section
          id="contact"
          className="relative overflow-hidden py-36"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(93,184,232,0.07) 0%, transparent 65%)",
            }}
          />
          {/* Grid */}
          <div className="absolute inset-0 grid-bg opacity-60" />

          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <AnimatedSection>
              <div className="flex flex-col items-center gap-8">
                <span className="section-label">Start a Conversation</span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 4rem)",
                    fontFamily: "var(--font-syne), system-ui, sans-serif",
                    color: "var(--text)",
                    lineHeight: 1.15,
                  }}
                >
                  Ready to build something{" "}
                  <span className="text-gradient">exceptional?</span>
                </h2>

                <MailtoLink />

                <p
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1rem",
                    lineHeight: "1.75",
                    fontWeight: 300,
                    maxWidth: "500px",
                  }}
                >
                  Share the project, timeline, and what success looks like.
                  We&apos;ll reply within 48 hours.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="py-12"
        style={{
          borderTop: "1px solid var(--border)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 select-none" aria-label="Clarity One Studios">
            <Image
              src="/logo.png"
              alt=""
              width={42}
              height={42}
              style={{ height: "42px", width: "auto", opacity: 0.85 }}
            />
            <span className="flex flex-col leading-tight">
              <span
                className="font-bold tracking-[0.12em] uppercase text-[#e8edf4]"
                style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "0.95rem" }}
              >
                Clarity One
              </span>
              <span
                className="font-light tracking-[0.35em] uppercase text-[#5db8e8]"
                style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.45rem" }}
              >
                Studios
              </span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Work", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-line"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              color: "var(--muted)",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.72rem",
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} Clarity One Studios
          </p>

        </div>
      </footer>
    </>
  );
}
