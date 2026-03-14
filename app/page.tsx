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

/* ─── SVG: Portfolio Thumbnails ───────────────────────────────── */
function ThumbArc() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full port-thumb">
      <rect width="400" height="280" fill="#0c0c0f" />
      <path d="M 25 268 A 248 248 0 0 1 378 22"  stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.65" />
      <path d="M 58 268 A 210 210 0 0 1 348 52"  stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <path d="M 100 268 A 168 168 0 0 1 310 85" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.2" />
      <path d="M 145 268 A 125 125 0 0 1 272 118" stroke="#5db8e8" strokeWidth="0.7" strokeOpacity="0.13" />
      <circle cx="378" cy="22"  r="5.5" fill="#5db8e8" fillOpacity="0.85" />
      <circle cx="378" cy="22"  r="14" stroke="#5db8e8" strokeOpacity="0.18" strokeWidth="1" />
      <line   x1="25"  y1="268" x2="170" y2="268" stroke="#5db8e8" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="25" y="252" width="55" height="1.5" fill="#5db8e8" fillOpacity="0.35" rx="1"/>
    </svg>
  );
}
function ThumbNodes() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full port-thumb">
      <rect width="400" height="280" fill="#080c18" />
      {[1,2,3,4].map(i => (
        <line key={`v${i}`} x1={i*100} y1="0" x2={i*100} y2="280" stroke="#7c9ee8" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {[1,2].map(i => (
        <line key={`h${i}`} x1="0" y1={i*93} x2="400" y2={i*93} stroke="#7c9ee8" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      <circle cx="200" cy="140" r="8"  fill="#7c9ee8" fillOpacity="0.9" />
      <circle cx="200" cy="140" r="22" stroke="#7c9ee8" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="200" cy="140" r="65" stroke="#7c9ee8" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="5 10" />
      <circle cx="97"  cy="65"  r="4.5" fill="#7c9ee8" fillOpacity="0.6" />
      <circle cx="310" cy="65"  r="4.5" fill="#7c9ee8" fillOpacity="0.6" />
      <circle cx="88"  cy="215" r="4.5" fill="#7c9ee8" fillOpacity="0.6" />
      <circle cx="318" cy="215" r="4.5" fill="#7c9ee8" fillOpacity="0.6" />
      <circle cx="200" cy="28"  r="3"   fill="#5db8e8" fillOpacity="0.55" />
      <line x1="200" y1="140" x2="97"  y2="65"  stroke="#7c9ee8" strokeOpacity="0.28" strokeWidth="1" />
      <line x1="200" y1="140" x2="310" y2="65"  stroke="#7c9ee8" strokeOpacity="0.28" strokeWidth="1" />
      <line x1="200" y1="140" x2="88"  y2="215" stroke="#7c9ee8" strokeOpacity="0.28" strokeWidth="1" />
      <line x1="200" y1="140" x2="318" y2="215" stroke="#7c9ee8" strokeOpacity="0.28" strokeWidth="1" />
      <line x1="200" y1="140" x2="200" y2="28"  stroke="#5db8e8" strokeOpacity="0.2"  strokeWidth="1" />
    </svg>
  );
}
function ThumbSlice() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full port-thumb">
      <rect width="400" height="280" fill="#0f080f" />
      <polygon points="0,0 190,0 295,280 105,280" fill="rgba(180,100,240,0.065)" />
      <polygon points="130,0 310,0 400,175 400,280 230,280" fill="rgba(220,120,255,0.04)" />
      <line x1="0"   y1="0"   x2="400" y2="280" stroke="#b464f0" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="105" y1="0"   x2="400" y2="218" stroke="#b464f0" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="210" y1="0"   x2="400" y2="140" stroke="#b464f0" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="325" cy="75"  r="42" stroke="#b464f0" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="325" cy="75"  r="7"  fill="#b464f0" fillOpacity="0.55" />
      <circle cx="325" cy="75"  r="16" stroke="#b464f0" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="22" y="238" width="62" height="1.5" fill="#5db8e8" fillOpacity="0.32" rx="1" />
      <rect x="22" y="247" width="38" height="1" fill="#5db8e8" fillOpacity="0.16" rx="1" />
    </svg>
  );
}
function ThumbGrid() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full port-thumb">
      <rect width="400" height="280" fill="#09090b" />
      <rect x="72"  y="52"  width="256" height="176" stroke="rgba(255,255,255,0.1)"  strokeWidth="1" />
      <rect x="104" y="84"  width="192" height="112" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
      <line x1="200" y1="52"  x2="200" y2="228" stroke="rgba(255,255,255,0.065)" strokeWidth="1" />
      <line x1="72"  y1="140" x2="328" y2="140" stroke="rgba(255,255,255,0.065)" strokeWidth="1" />
      {/* Corner brackets */}
      <path d="M72 72  L72 52  L92 52"  stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="none" />
      <path d="M328 72 L328 52 L308 52" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="none" />
      <path d="M72 208 L72 228 L92 228" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="none" />
      <path d="M328 208 L328 228 L308 228" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="none" />
      <circle cx="200" cy="140" r="4" fill="rgba(255,255,255,0.5)" />
      <circle cx="200" cy="140" r="11" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="72" y1="256" x2="220" y2="256" stroke="#5db8e8" strokeOpacity="0.38" strokeWidth="1.5" />
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
    "Brand Identity",
    "Digital Experience",
    "Creative Direction",
    "Visual Storytelling",
    "Motion Design",
    "Editorial Design",
    "Strategy & Positioning",
    "Art Direction",
  ];

  const services = [
    {
      icon: <IconBrand />,
      num: "01",
      title: "Brand Identity",
      desc: "We build cohesive visual identities that communicate who you are before a single word is read — logos, systems, typography, and colour that hold up across every medium.",
    },
    {
      icon: <IconDigital />,
      num: "02",
      title: "Digital Experience",
      desc: "From web design to interactive platforms, we craft digital environments that balance beauty with behaviour — intuitive, performant, and purposefully designed.",
    },
    {
      icon: <IconDirection />,
      num: "03",
      title: "Creative Direction",
      desc: "We lead the creative vision for campaigns, editorial, and brand activations — ensuring every touchpoint expresses the same singular, elevated point of view.",
    },
  ];

  const portfolio = [
    { thumb: <ThumbArc />,   num: "01", cat: "Branding",  title: "Arc Identity" },
    { thumb: <ThumbNodes />, num: "02", cat: "Digital",   title: "Meridian Platform" },
    { thumb: <ThumbSlice />, num: "03", cat: "Campaign",  title: "Nova Campaign" },
    { thumb: <ThumbGrid />,  num: "04", cat: "Editorial", title: "Void Editorial" },
  ];

  const stats = [
    { num: "50+",  label: "Projects Delivered" },
    { num: "5",    label: "Years in Practice" },
    { num: "30+",  label: "Brand Clients" },
    { num: "12",   label: "Design Awards" },
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
                    Creative Studio
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
                  Design that{" "}
                  <span className="text-gradient">speaks</span>
                  <br />
                  before words do.
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
                  Clarity One Studios crafts brand identities, digital experiences,
                  and visual stories for brands that refuse to be ordinary.
                </p>

                <div className="hero-ctas flex flex-wrap gap-4">
                  <a href="#work" className="btn-primary">
                    View Our Work
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
              <span className="section-label">What We Do</span>
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
                Three disciplines.
                <br />
                <span style={{ color: "var(--accent)" }}>One vision.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <span className="section-label">Selected Work</span>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.2rem)",
                      fontFamily: "var(--font-syne), system-ui, sans-serif",
                      color: "var(--text)",
                      lineHeight: 1.2,
                    }}
                  >
                    Projects that define us.
                  </h2>
                </div>
                <a
                  href="#contact"
                  className="link-line text-sm flex items-center gap-2"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  View all work
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolio.map(({ thumb, num, cat, title }, i) => (
                <AnimatedSection key={num} delay={i * 100}>
                  <div
                    className="portfolio-item relative overflow-hidden cursor-pointer group"
                    style={{
                      borderRadius: "2px",
                      border: "1px solid var(--border)",
                      aspectRatio: "16/10",
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="absolute inset-0">
                      {thumb}
                    </div>

                    {/* Bottom meta (always visible) */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between"
                      style={{
                        background: "linear-gradient(to top, rgba(5,8,16,0.85) 0%, transparent 100%)",
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="section-label" style={{ color: "var(--accent)" }}>
                          {cat}
                        </span>
                        <span
                          className="font-display"
                          style={{
                            color: "var(--text)",
                            fontFamily: "var(--font-syne), system-ui, sans-serif",
                            fontSize: "1.1rem",
                          }}
                        >
                          {title}
                        </span>
                      </div>
                      <span
                        className="section-label"
                        style={{ color: "rgba(93,184,232,0.4)" }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div
                      className="port-overlay absolute inset-0 flex items-center justify-center"
                      style={{ background: "rgba(5,8,16,0.55)", backdropFilter: "blur(2px)" }}
                    >
                      <span
                        className="btn-outline text-xs"
                        style={{ padding: "10px 24px" }}
                      >
                        View Project
                        <ArrowRight size={12} />
                      </span>
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
                    <span className="section-label">Our Story</span>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                        fontFamily: "var(--font-syne), system-ui, sans-serif",
                        color: "var(--text)",
                        lineHeight: 1.2,
                      }}
                    >
                      Built on the belief that design
                      <br />
                      should{" "}
                      <span className="text-gradient">
                        move people.
                      </span>
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
                      Clarity One Studios was founded in 2019 with a singular conviction:
                      that great design doesn&apos;t just look good — it thinks well. We work at the
                      intersection of craft and strategy, creating work that earns attention and holds it.
                    </p>
                    <p>
                      We collaborate with founders, creative directors, and ambitious brands who understand
                      that how you look is how you&apos;re remembered. Every project is approached with
                      rigour, restraint, and a ruthless commitment to clarity.
                    </p>
                  </div>

                  <a href="#contact" className="btn-primary self-start">
                    Work With Us
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
                <span className="section-label">Get In Touch</span>
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
                  <span className="text-gradient">
                    exceptional?
                  </span>
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
                  Tell us about your project. We&apos;ll respond within 48 hours with
                  thoughts on how we can bring it to life.
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
