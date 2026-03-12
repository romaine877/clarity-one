import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Monitor,
  Smartphone,
  Settings,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — ClarityOne",
  description:
    "From MVP development to ongoing support, ClarityOne builds modern software that delivers results. Explore our full range of services.",
};

const services = [
  {
    id: "mvp",
    icon: Rocket,
    title: "MVP Development",
    tagline: "Go from idea to market — fast",
    audience:
      "Founders, startups, and entrepreneurs who need to validate a product idea quickly.",
    challenges: [
      "You have an idea but need help turning it into a working product",
      "You need to test the market before committing to a full build",
      "You want a focused, well-built first version — not a rushed prototype",
    ],
    includes: [
      "Product scoping and feature prioritization",
      "UI/UX design",
      "Full-stack development",
      "Deployment and launch support",
      "Post-launch iteration guidance",
    ],
    deliverables: "A working, deployable product with core features",
    timeline: "4 – 8 weeks",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Vercel"],
  },
  {
    id: "web",
    icon: Monitor,
    title: "Custom Web Applications",
    tagline: "Tailored platforms built for your specific needs",
    audience:
      "Businesses that need custom dashboards, portals, marketplaces, or workflow tools.",
    challenges: [
      "Off-the-shelf software doesn't fit your workflow",
      "You need a platform tailored to your team or customers",
      "Existing tools are clunky, disconnected, or limiting growth",
    ],
    includes: [
      "Requirements gathering and system design",
      "Database architecture",
      "Frontend and backend development",
      "User authentication and roles",
      "Third-party integrations",
      "Testing and quality assurance",
    ],
    deliverables:
      "A production-ready web application with documentation",
    timeline: "6 – 14 weeks",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "REST / GraphQL",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Smooth, reliable apps for iOS and Android",
    audience:
      "Companies that need a mobile presence — from consumer-facing apps to internal field tools.",
    challenges: [
      "Your users expect a native mobile experience",
      "You need an app that works reliably offline and online",
      "You want one codebase that runs on both iOS and Android",
    ],
    includes: [
      "Mobile UX design",
      "Cross-platform development",
      "Push notifications and offline support",
      "Backend API development",
      "App store submission",
    ],
    deliverables: "A published mobile app for iOS and Android",
    timeline: "8 – 14 weeks",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Firebase"],
  },
  {
    id: "tools",
    icon: Settings,
    title: "Internal Tools & Automation",
    tagline: "Save your team time with custom tools",
    audience:
      "Operations teams, agencies, and growing companies with manual or repetitive processes.",
    challenges: [
      "Your team spends too much time on manual tasks",
      "Spreadsheets and email chains are holding you back",
      "You need a tool that fits your specific process",
    ],
    includes: [
      "Process analysis and workflow mapping",
      "Custom admin dashboards",
      "Automation logic and integrations",
      "Data pipelines and reporting",
      "User training and documentation",
    ],
    deliverables:
      "A custom internal tool or automation workflow",
    timeline: "3 – 8 weeks",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Zapier / n8n",
      "REST APIs",
    ],
  },
  {
    id: "support",
    icon: Wrench,
    title: "Support & Maintenance",
    tagline: "Keep your software running smoothly",
    audience:
      "Teams with existing software that need ongoing updates, fixes, or performance improvements.",
    challenges: [
      "Your app is live but needs regular updates",
      "You've outgrown your original developer or agency",
      "Performance or reliability issues need attention",
    ],
    includes: [
      "Bug fixes and issue resolution",
      "Performance optimization",
      "Security updates and patches",
      "Feature enhancements",
      "Monitoring and uptime tracking",
    ],
    deliverables: "Ongoing monthly support with clear reporting",
    timeline: "Ongoing monthly retainer",
    tech: ["Any modern stack", "Monitoring tools", "CI/CD"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Software solutions that fit{" "}
              <span className="text-primary">your needs</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Whether you&apos;re launching a new product, building a custom
              platform, or improving an existing system — we have a service that
              fits.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex flex-col gap-20">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-base text-primary font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Who this is for
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {service.audience}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Common challenges
                    </h3>
                    <ul className="mt-2 flex flex-col gap-2">
                      {service.challenges.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    What&apos;s included
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 grid gap-6 rounded-lg bg-section-alt p-5 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Deliverables
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {service.deliverables}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Timeline
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {service.timeline}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Technologies
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-primary-light px-2 py-0.5 text-xs font-medium text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tell us about your project and we&apos;ll recommend the best
            approach for your goals and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
