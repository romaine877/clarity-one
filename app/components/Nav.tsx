"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "Services", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#050810]/92 backdrop-blur-2xl border-b border-white/6"
          : "py-7"
      }`}
      style={scrolled ? { boxShadow: "0 1px 40px rgba(0,0,0,0.4)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 select-none" aria-label="Clarity One Studios">
          <Image
            src="/logo.png"
            alt=""
            width={46}
            height={46}
            priority
            style={{ height: "46px", width: "auto" }}
          />
          <span className="flex flex-col leading-tight">
            <span
              className="font-bold tracking-[0.12em] uppercase text-[#e8edf4]"
              style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.05rem" }}
            >
              Clarity One
            </span>
            <span
              className="font-light tracking-[0.35em] uppercase text-[#5db8e8]"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.5rem" }}
            >
              Studios
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="link-line text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: "var(--muted)", fontFamily: "var(--font-inter), sans-serif" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-outline text-xs"
          style={{ padding: "10px 24px" }}
        >
          Discuss Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-[0.18em] uppercase"
              style={{ color: "var(--muted)", fontFamily: "var(--font-inter), sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-2 justify-center" style={{ padding: "12px 24px" }}>
            Discuss Project
          </a>
        </div>
      </div>
    </nav>
  );
}
