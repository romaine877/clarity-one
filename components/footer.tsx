import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/services#mvp", label: "MVP Development" },
    { href: "/services#web", label: "Web Applications" },
    { href: "/services#mobile", label: "Mobile Apps" },
    { href: "/services#tools", label: "Internal Tools" },
    { href: "/services#support", label: "Support & Maintenance" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-accent"
            >
              Clarity<span className="text-primary">One</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Modern software development for startups and growing businesses.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Jamaica — serving clients worldwide
              </span>
              <a
                href="mailto:hello@clarityone.dev"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail size={14} />
                hello@clarityone.dev
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Start a Project
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Have an idea or project in mind? Tell us about it and we&apos;ll
              get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} ClarityOne. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
