import Image from "next/image";
import Nav from "./components/Nav";
import AnimatedSection from "./components/AnimatedSection";
import ContactForm, { MailtoLink } from "./components/ContactForm";

/* ─── SVG: Hero Graphic — Product Dashboard ────────────────────── */
function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full hero-graphic"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5db8e8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#5db8e8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c9ee8" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#7c9ee8" stopOpacity="0" />
        </radialGradient>
        <filter id="hblur">
          <feGaussianBlur stdDeviation="42" />
        </filter>
        <clipPath id="mainCard">
          <rect x="28" y="58" width="332" height="262" rx="14" />
        </clipPath>
      </defs>

      {/* Background glows */}
      <ellipse cx="290" cy="230" rx="230" ry="185" fill="url(#hg1)" filter="url(#hblur)" />
      <ellipse cx="430" cy="155" rx="145" ry="115" fill="url(#hg2)" filter="url(#hblur)" />

      {/* ── Main dashboard card ── */}
      <rect x="28" y="58" width="332" height="262" rx="14"
        fill="rgba(12,18,37,0.9)" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.2"
        className="svg-float"
      />
      {/* Card header stripe */}
      <rect x="28" y="58" width="332" height="44" rx="14" fill="rgba(93,184,232,0.055)" clipPath="url(#mainCard)" />
      {/* Traffic lights */}
      <circle cx="52" cy="80" r="4.5" fill="#5db8e8" fillOpacity="0.75" className="svg-glow" />
      <circle cx="70" cy="80" r="4.5" fill="#5db8e8" fillOpacity="0.35" />
      <circle cx="88" cy="80" r="4.5" fill="#5db8e8" fillOpacity="0.15" />
      {/* Title bar stub */}
      <rect x="128" y="75" width="72" height="10" rx="5" fill="rgba(255,255,255,0.1)" />
      {/* Menu dots */}
      <circle cx="330" cy="80" r="2.2" fill="rgba(255,255,255,0.18)" />
      <circle cx="340" cy="80" r="2.2" fill="rgba(255,255,255,0.18)" />
      <circle cx="350" cy="80" r="2.2" fill="rgba(255,255,255,0.18)" />

      {/* Card body label */}
      <rect x="48" y="118" width="56" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />

      {/* Bar chart */}
      <rect x="48" y="155" width="15" height="60" rx="3" fill="#5db8e8" fillOpacity="0.65" />
      <rect x="70" y="173" width="15" height="42" rx="3" fill="#5db8e8" fillOpacity="0.42" />
      <rect x="92" y="143" width="15" height="72" rx="3" fill="#5db8e8" fillOpacity="0.82" />
      <rect x="114" y="160" width="15" height="55" rx="3" fill="#5db8e8" fillOpacity="0.52" />
      <rect x="136" y="150" width="15" height="65" rx="3" fill="#5db8e8" fillOpacity="0.7" />
      {/* Baseline */}
      <line x1="42" y1="218" x2="168" y2="218" stroke="#5db8e8" strokeOpacity="0.1" strokeWidth="1" />

      {/* Vertical divider */}
      <line x1="188" y1="110" x2="188" y2="290" stroke="#5db8e8" strokeOpacity="0.09" strokeWidth="1" />

      {/* Right stats */}
      <text x="202" y="157" fill="#e8edf4" fontSize="26" fontWeight="700" fontFamily="system-ui,sans-serif">50+</text>
      <rect x="202" y="165" width="75" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="202" y="175" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />

      <text x="202" y="208" fill="#e8edf4" fontSize="26" fontWeight="700" fontFamily="system-ui,sans-serif">30+</text>
      <rect x="202" y="216" width="68" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="202" y="226" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />

      <text x="202" y="260" fill="#5db8e8" fontSize="26" fontWeight="700" fontFamily="system-ui,sans-serif">5yr+</text>
      <rect x="202" y="268" width="72" height="6" rx="3" fill="rgba(93,184,232,0.12)" />

      {/* Bottom tag pills */}
      <rect x="42" y="240" width="58" height="20" rx="10" fill="rgba(93,184,232,0.1)" stroke="#5db8e8" strokeWidth="0.75" strokeOpacity="0.35" />
      <rect x="108" y="240" width="50" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <rect x="166" y="240" width="66" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <rect x="240" y="240" width="76" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />

      {/* ── Floating card 1 — top right ── */}
      <rect x="386" y="36" width="152" height="98" rx="12"
        fill="rgba(12,18,37,0.93)" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.24"
        className="svg-float-b"
      />
      <circle cx="412" cy="66" r="14" fill="rgba(93,184,232,0.1)" stroke="#5db8e8" strokeWidth="0.8" strokeOpacity="0.35" />
      <circle cx="412" cy="66" r="6" fill="#5db8e8" fillOpacity="0.5" className="svg-glow-b" />
      <rect x="434" y="58" width="90" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
      <rect x="434" y="74" width="62" height="7" rx="3.5" fill="rgba(255,255,255,0.07)" />
      {/* Progress bar */}
      <rect x="398" y="108" width="126" height="8" rx="4" fill="rgba(255,255,255,0.05)" />
      <rect x="398" y="108" width="88" height="8" rx="4" fill="#5db8e8" fillOpacity="0.58" />

      {/* ── Floating card 2 — mid right ── */}
      <rect x="404" y="198" width="136" height="92" rx="12"
        fill="rgba(12,18,37,0.91)" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.18"
        className="svg-float"
      />
      <rect x="418" y="210" width="76" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="418" y="222" width="52" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      {/* Line chart */}
      <polyline
        points="418,258 434,246 452,252 470,236 488,242 510,228 528,232"
        stroke="#5db8e8" strokeWidth="1.8" strokeOpacity="0.75" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <polygon
        points="418,258 434,246 452,252 470,236 488,242 510,228 528,232 528,272 418,272"
        fill="#5db8e8" fillOpacity="0.045"
      />
      <circle cx="528" cy="232" r="3.5" fill="#5db8e8" fillOpacity="0.85" className="svg-glow" />

      {/* ── Floating card 3 — bottom left ── */}
      <rect x="18" y="352" width="204" height="84" rx="12"
        fill="rgba(12,18,37,0.88)" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.15"
        className="svg-float-c"
      />
      {/* Mini bars */}
      <rect x="34" y="386" width="9" height="22" rx="2.5" fill="#5db8e8" fillOpacity="0.5" />
      <rect x="48" y="374" width="9" height="34" rx="2.5" fill="#5db8e8" fillOpacity="0.72" />
      <rect x="62" y="380" width="9" height="28" rx="2.5" fill="#5db8e8" fillOpacity="0.42" />
      <rect x="76" y="368" width="9" height="40" rx="2.5" fill="#5db8e8" fillOpacity="0.85" />
      <line x1="28" y1="410" x2="100" y2="410" stroke="#5db8e8" strokeOpacity="0.1" strokeWidth="1" />
      {/* Text area */}
      <rect x="104" y="368" width="102" height="9" rx="4.5" fill="rgba(255,255,255,0.12)" />
      <rect x="104" y="384" width="78" height="7" rx="3.5" fill="rgba(255,255,255,0.06)" />
      <rect x="104" y="399" width="90" height="7" rx="3.5" fill="rgba(93,184,232,0.15)" />

      {/* ── Accent decorations ── */}
      {/* Left vertical dashed line */}
      <line x1="8" y1="85" x2="8" y2="355" stroke="#5db8e8" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 9" />
      <circle cx="8" cy="85" r="2.5" fill="#5db8e8" fillOpacity="0.5" className="svg-glow" />
      <circle cx="8" cy="355" r="2.5" fill="#5db8e8" fillOpacity="0.5" className="svg-glow-b" />

      {/* Corner brackets */}
      <path d="M 538 12 L 556 12 L 556 30" stroke="#5db8e8" strokeOpacity="0.38" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 4 458 L 4 440 L 22 440" stroke="#5db8e8" strokeOpacity="0.38" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 4 12 L 4 30 L 22 30" stroke="#5db8e8" strokeOpacity="0.18" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M 556 458 L 538 458 L 538 440" stroke="#5db8e8" strokeOpacity="0.18" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Subtle axis lines */}
      <line x1="0" y1="240" x2="560" y2="240" stroke="#5db8e8" strokeOpacity="0.025" strokeWidth="1" />
      <line x1="280" y1="0" x2="280" y2="480" stroke="#5db8e8" strokeOpacity="0.025" strokeWidth="1" />
    </svg>
  );
}

/* ─── SVG: Service Icons ──────────────────────────────────────── */
function IconBrand() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="17" cy="24" r="13" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="31" cy="24" r="13" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <path d="M24 12.5 A13 13 0 0 1 24 35.5 A13 13 0 0 1 24 12.5Z" fill="#5db8e8" fillOpacity="0.1" />
      <circle cx="24" cy="24" r="2" fill="#5db8e8" fillOpacity="0.7" />
    </svg>
  );
}
function IconDigital() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
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
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="24" cy="24" r="18" stroke="#5db8e8" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="24" cy="24" r="9"  stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.65" />
      <circle cx="24" cy="24" r="3"  fill="#5db8e8" fillOpacity="0.7" />
      <line x1="24" y1="6"  x2="24" y2="15" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="24" y1="33" x2="24" y2="42" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="6"  y1="24" x2="15" y2="24" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
      <line x1="33" y1="24" x2="42" y2="24" stroke="#5db8e8" strokeWidth="1"   strokeOpacity="0.35" />
    </svg>
  );
}
function IconWebsite() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
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
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="14" y="6" width="20" height="36" rx="5" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.55" />
      <rect x="18" y="12" width="12" height="18" rx="2" fill="#5db8e8" fillOpacity="0.08" />
      <line x1="20" y1="35" x2="28" y2="35" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.4" />
    </svg>
  );
}
function IconIntegration() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="8"  y="11" width="11" height="11" rx="2" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="29" y="11" width="11" height="11" rx="2" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="18.5" y="27" width="11" height="11" rx="2" stroke="#5db8e8" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M19 16.5H29"   stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.35" />
      <path d="M24 22V27"     stroke="#5db8e8" strokeWidth="1.2" strokeOpacity="0.35" />
      <circle cx="24" cy="24" r="3"   fill="#5db8e8" fillOpacity="0.16" />
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

/* ─── Portfolio Card ──────────────────────────────────────────── */
function PortfolioCard({
  src, num, cat, title, summary, tags, objectPosition,
}: {
  src: string; num: string; cat: string; title: string;
  summary: string; tags: string[]; objectPosition: string;
}) {
  return (
    <div
      className="portfolio-item relative overflow-hidden cursor-pointer group"
      style={{
        borderRadius: "18px",
        border: "1px solid var(--border)",
        aspectRatio: "4/3",
        background: "var(--surface)",
      }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={`${title} project preview`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="port-thumb"
          style={{ objectFit: "cover", objectPosition }}
        />
      </div>

      {/* Top scrim — makes category badge always readable */}
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(5,8,16,0.72) 0%, transparent 100%)",
        }}
      />

      {/* Bottom scrim — heavy so text is always legible */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "70%",
          background: "linear-gradient(0deg, rgba(5,8,16,1) 0%, rgba(5,8,16,0.92) 40%, rgba(5,8,16,0.6) 65%, transparent 100%)",
        }}
      />

      {/* Accent overlay on hover */}
      <div
        className="port-overlay absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(93,184,232,0.07) 0%, transparent 50%)" }}
      />

      {/* Top row — category + number */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-5">
        <span
          className="section-label"
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
          }}
        >
          {cat}
        </span>
        <span
          className="section-label"
          style={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
          }}
        >
          {num}
        </span>
      </div>

      {/* Bottom panel */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 flex flex-col gap-3">
        {/* Tags row */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "rgba(93,184,232,0.1)",
                border: "1px solid rgba(93,184,232,0.22)",
                borderRadius: "4px",
                padding: "3px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-syne), system-ui, sans-serif",
            fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h3>

        {/* Description — hidden by default, slides up on hover */}
        <p
          className="port-desc"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.86rem",
            color: "rgba(232,237,244,0.7)",
            lineHeight: "1.7",
            fontWeight: 300,
            margin: 0,
            opacity: 0,
            transform: "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {summary}
        </p>
      </div>
    </div>
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
      objectPosition: "center 35%",
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

  const processSteps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We align on business goals, users, and technical reality before a single line of code is written.",
    },
    {
      num: "02",
      title: "Scoping",
      desc: "We map your product into clear milestones that reduce delivery risk and surface decisions early.",
    },
    {
      num: "03",
      title: "Build",
      desc: "Senior engineers and designers ship focused increments with regular check-ins and feedback loops.",
    },
    {
      num: "04",
      title: "Support",
      desc: "Post-launch iteration, monitoring, and ongoing support built into every engagement.",
    },
  ];

  return (
    <>
      <Nav />

      <main style={{ background: "var(--bg)" }}>

        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center grid-bg overflow-hidden"
          style={{ paddingTop: "96px" }}
        >
          {/* Background orbs */}
          <div
            className="pointer-events-none absolute top-[12%] right-[6%] w-[560px] h-[560px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(93,184,232,0.15) 0%, transparent 70%)",
              filter: "blur(90px)",
              opacity: 0.6,
            }}
          />
          <div
            className="pointer-events-none absolute bottom-[8%] left-[3%] w-[420px] h-[420px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(124,158,232,0.18) 0%, transparent 70%)",
              filter: "blur(110px)",
              opacity: 0.5,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-[82vh] py-16">

              {/* Left — content */}
              <div className="flex flex-col gap-9">
                <div className="hero-tag flex items-center gap-3">
                  <span className="section-label" style={{ color: "var(--accent)" }}>
                    Software Development Agency
                  </span>
                  <span className="w-7 h-px" style={{ background: "var(--accent)", opacity: 0.45 }} />
                  <span className="section-label" style={{ color: "var(--muted)" }}>Est. 2026</span>
                </div>

                <h1
                  className="hero-h1 font-display leading-[1.1] tracking-tight"
                  style={{
                    fontSize: "clamp(3rem, 6.5vw, 5.4rem)",
                    fontFamily: "var(--font-syne), system-ui, sans-serif",
                    color: "var(--text)",
                    fontWeight: 800,
                  }}
                >
                  Software built{" "}
                  <br className="hidden sm:block" />
                  with{" "}
                  <span className="text-gradient">clarity.</span>
                </h1>

                <p
                  className="hero-sub leading-relaxed max-w-[440px]"
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--muted)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                    lineHeight: "1.85",
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
                    <ArrowRight />
                  </a>
                </div>

                {/* Stat pills */}
                <div className="hero-stats flex flex-wrap gap-3 pt-2">
                  {[
                    { num: "50+", label: "Projects" },
                    { num: "5yr", label: "In Practice" },
                    { num: "30+", label: "Clients" },
                  ].map(({ num, label }) => (
                    <div key={label} className="stat-pill">
                      <span
                        className="stat-num font-display"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontFamily: "var(--font-syne), system-ui, sans-serif",
                          fontWeight: 700,
                        }}
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
                <div className="w-[500px] h-[480px] xl:w-[540px] xl:h-[520px]">
                  <HeroGraphic />
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center hero-stats"
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
            background: "rgba(255,255,255,0.01)",
          }}
        >
          <div className="marquee-track whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-5"
                style={{
                  color: i % 3 === 0 ? "var(--accent)" : "var(--muted)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {item}
                <svg width="4" height="4" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.4" /></svg>
              </span>
            ))}
          </div>
        </div>

        {/* ─── SERVICES ─────────────────────────────────────────── */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-28">
          <AnimatedSection>
            <div
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-12"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex flex-col gap-4">
                <span className="section-label">Capabilities</span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontFamily: "var(--font-syne), system-ui, sans-serif",
                    color: "var(--text)",
                    lineHeight: 1.15,
                    fontWeight: 800,
                    maxWidth: "520px",
                  }}
                >
                  Software that removes friction,
                  {" "}<span style={{ color: "var(--accent)" }}>creates leverage, and scales.</span>
                </h2>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: "1.75",
                  fontWeight: 300,
                  maxWidth: "300px",
                  flexShrink: 0,
                }}
              >
                From initial concept to production deployment — we build and ship across the full stack.
              </p>
            </div>
          </AnimatedSection>

          {/* Editorial numbered service list */}
          <div style={{ paddingLeft: "28px" }}>
            {services.map(({ icon, num, title, desc }, i) => (
              <AnimatedSection key={num} delay={i * 80}>
                <div className="service-row">
                  <span className="service-num">{num}</span>
                  <div className="service-icon-wrap">
                    {icon}
                  </div>
                  <div className="service-content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <a href="#contact" className="service-cta">
                    Discuss <ArrowRight size={13} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ─── WORK ─────────────────────────────────────────────── */}
        <section
          id="work"
          className="py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
                <div className="flex flex-col gap-4">
                  <span className="section-label">Selected Projects</span>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.2rem)",
                      fontFamily: "var(--font-syne), system-ui, sans-serif",
                      color: "var(--text)",
                      lineHeight: 1.15,
                      fontWeight: 800,
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

            {/* Equal 2×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {portfolio.map((item, i) => (
                <AnimatedSection key={item.num} delay={i * 90}>
                  <PortfolioCard {...item} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS / HOW WE WORK ────────────────────────────── */}
        <section
          id="about"
          className="py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="flex flex-col gap-4">
                  <span className="section-label">How We Work</span>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(2rem, 3.8vw, 3rem)",
                      fontFamily: "var(--font-syne), system-ui, sans-serif",
                      color: "var(--text)",
                      lineHeight: 1.15,
                      fontWeight: 800,
                      maxWidth: "520px",
                    }}
                  >
                    A partner that thinks beyond{" "}
                    <span className="text-gradient">delivery tickets.</span>
                  </h2>
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: "1.8",
                    fontWeight: 300,
                    maxWidth: "320px",
                    flexShrink: 0,
                  }}
                >
                  Clarity One Studios works with founders, operators, and growing
                  businesses that need senior execution without the overhead of
                  building entirely in-house.
                </p>
              </div>
            </AnimatedSection>

            {/* Process steps — horizontal on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0">
              {processSteps.map(({ num, title, desc }, i) => (
                <AnimatedSection key={num} delay={i * 110}>
                  <div className="process-step">
                    <div className="process-step-num">{num}</div>
                    <div className="process-step-bar" />
                    <h3 className="process-step-title">{title}</h3>
                    <p className="process-step-desc">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Bottom CTA row */}
            <AnimatedSection delay={350}>
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mt-16 pt-10"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="flex flex-col gap-2">
                  <p
                    style={{
                      color: "var(--muted)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: "1.8",
                      fontWeight: 300,
                      maxWidth: "440px",
                    }}
                  >
                    Our process is deliberate: align on business goals, reduce delivery
                    risk early, ship in focused increments, and stay close to outcomes after launch.
                  </p>
                </div>
                <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
                  Talk Through Your Project
                  <ArrowRight />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── CTA / CONTACT ────────────────────────────────────── */}
        <section
          id="contact"
          className="relative overflow-hidden py-36"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {/* Large typographic background word */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <span
              style={{
                fontFamily: "var(--font-syne), system-ui, sans-serif",
                fontSize: "clamp(7rem, 22vw, 24rem)",
                fontWeight: 800,
                color: "rgba(93,184,232,0.022)",
                letterSpacing: "-0.03em",
                whiteSpace: "nowrap",
                userSelect: "none",
                lineHeight: 1,
              }}
            >
              BUILD
            </span>
          </div>

          {/* Grid + glow */}
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 110%, rgba(93,184,232,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <AnimatedSection>
              <div className="flex flex-col items-center gap-9">
                <span className="section-label">Start a Conversation</span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                    fontFamily: "var(--font-syne), system-ui, sans-serif",
                    color: "var(--text)",
                    lineHeight: 1.12,
                    fontWeight: 800,
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
                    lineHeight: "1.8",
                    fontWeight: 300,
                    maxWidth: "480px",
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
        className="py-16"
        style={{
          borderTop: "1px solid var(--border)",
          background: "rgba(255,255,255,0.008)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Top grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            {/* Brand */}
            <div className="flex flex-col gap-5">
              <a href="#" className="flex items-center gap-3 select-none" aria-label="Clarity One Studios">
                <Image
                  src="/logo.png"
                  alt=""
                  width={40}
                  height={40}
                  style={{ height: "40px", width: "auto", opacity: 0.88 }}
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
              <p
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.84rem",
                  lineHeight: "1.8",
                  fontWeight: 300,
                  maxWidth: "220px",
                }}
              >
                Building software with clarity — from discovery to delivery.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-5">
              <span className="section-label">Navigate</span>
              <div className="flex flex-col gap-3">
                {["Work", "Services", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="link-line"
                    style={{
                      color: "var(--muted)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.84rem",
                      width: "fit-content",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-5">
              <span className="section-label">Get in Touch</span>
              <a
                href="mailto:contact@clarityone.dev"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                contact@clarityone.dev
              </a>
              <p
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: "1.75",
                  fontWeight: 300,
                }}
              >
                Open to new projects.
                <br />
                Response within 48 hours.
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
            <p
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.7rem",
                opacity: 0.55,
                letterSpacing: "0.06em",
              }}
            >
              © {new Date().getFullYear()} Clarity One Studios. All rights reserved.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.7rem",
                opacity: 0.45,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Jamaica — Est. 2026
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
