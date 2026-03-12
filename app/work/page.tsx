import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work — ClarityOne",
  description:
    "Explore a selection of projects built by ClarityOne — web apps, mobile apps, MVPs, and internal tools.",
};

const projects = [
  {
    title: "FieldSync",
    subtitle: "Field Operations Platform",
    category: "Web Application",
    overview:
      "A real-time field operations management platform built for service companies managing remote teams.",
    challenge:
      "The client's team relied on phone calls, spreadsheets, and paper forms to coordinate field workers. This led to missed appointments, double-bookings, and slow reporting.",
    solution:
      "We built a unified web platform with real-time dispatch, route optimization, digital forms, and automated reporting — giving managers full visibility from one dashboard.",
    features: [
      "Real-time team scheduling and dispatch",
      "Route optimization engine",
      "Digital form builder for field data",
      "Automated report generation",
      "Role-based access for managers and field staff",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebSockets", "Mapbox"],
    outcome:
      "50% reduction in manual scheduling time. Field teams reported higher satisfaction and fewer scheduling conflicts.",
  },
  {
    title: "Minted",
    subtitle: "Personal Finance App",
    category: "Mobile App",
    overview:
      "A personal finance mobile app that helps users track spending, set budgets, and automate savings — with a clean, intuitive interface.",
    challenge:
      "Existing budgeting apps were either too complex for casual users or too basic for anyone serious about managing money. The client wanted a balanced, modern alternative.",
    solution:
      "We designed and built a cross-platform mobile app with smart categorization, automated savings rules, and a dashboard that makes financial health easy to understand.",
    features: [
      "Automatic transaction categorization",
      "Budget tracking with visual progress",
      "Savings goals with automation rules",
      "Monthly spending insights",
      "Secure bank linking via Plaid",
    ],
    tech: ["React Native", "TypeScript", "Supabase", "Plaid API", "Expo"],
    outcome:
      "4.8 star rating across app stores. 12,000+ downloads in the first three months after launch.",
  },
  {
    title: "LaunchKit",
    subtitle: "SaaS Starter Platform",
    category: "MVP Development",
    overview:
      "A reusable SaaS starter kit with authentication, billing, team management, and dashboards — built for founders who need to ship fast.",
    challenge:
      "Solo founders and small teams were spending weeks rebuilding the same SaaS boilerplate — auth, billing, roles, settings — before they could start on their actual product.",
    solution:
      "We built a production-ready starter kit that includes everything needed to launch a SaaS product. Founders can clone it and start building their unique features on day one.",
    features: [
      "Authentication with email, Google, and GitHub",
      "Stripe subscription billing",
      "Team management with invitations and roles",
      "Admin dashboard with analytics",
      "Fully customizable with clean documentation",
    ],
    tech: ["Next.js", "Prisma", "Stripe", "Tailwind CSS", "PostgreSQL"],
    outcome:
      "Used by 30+ founders to launch SaaS products. Average time from clone to launch: 6 weeks.",
  },
  {
    title: "Pulse",
    subtitle: "Employee Engagement Dashboard",
    category: "Internal Tool",
    overview:
      "An internal tool that helps HR teams run pulse surveys, track engagement trends, and act on employee feedback in real time.",
    challenge:
      "The company was using scattered Google Forms and manual data entry to track employee sentiment — making it hard to spot trends or take action quickly.",
    solution:
      "We built a centralized dashboard with scheduled surveys, automated reminders, trend analysis, and team-level breakdowns — all behind role-based access.",
    features: [
      "Scheduled pulse surveys with custom questions",
      "Anonymous response collection",
      "Trend analysis and team comparisons",
      "Automated reminders and follow-ups",
      "Manager dashboards with action items",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Chart.js", "SendGrid"],
    outcome:
      "Survey response rate increased from 40% to 85%. HR team reduced reporting time by 70%.",
  },
  {
    title: "TradeFlow",
    subtitle: "Supply Chain Tracker",
    category: "Web Application",
    overview:
      "A supply chain tracking platform for importers who need real-time visibility into shipments, customs status, and inventory levels.",
    challenge:
      "The client tracked shipments across emails, broker calls, and spreadsheets. Delays were discovered too late, and inventory planning was reactive instead of proactive.",
    solution:
      "We built a tracking dashboard that consolidates shipment data from carriers and customs brokers, with automated alerts for status changes and delay risks.",
    features: [
      "Real-time shipment tracking",
      "Customs status monitoring",
      "Automated delay alerts",
      "Inventory level forecasting",
      "Supplier performance analytics",
    ],
    tech: ["Next.js", "Python", "PostgreSQL", "Redis", "REST APIs"],
    outcome:
      "30% fewer inventory stockouts. The team now catches delays days earlier and adjusts orders proactively.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Our Work
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Projects built with{" "}
              <span className="text-primary">clarity</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Real problems. Practical solutions. Here&apos;s a look at some of
              the software we&apos;ve built.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                {/* Visual placeholder */}
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-primary-light to-section-alt">
                  <Code2 size={56} className="text-primary/30" />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-primary-light px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-foreground">
                    {project.title}{" "}
                    <span className="font-normal text-muted">
                      — {project.subtitle}
                    </span>
                  </h2>

                  <div className="mt-6 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Overview
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {project.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Challenge
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Solution
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {project.solution}
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                      Key Features
                    </h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-section-alt p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Tech Stack
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-primary-light px-2 py-0.5 text-xs font-medium text-accent"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Outcome
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary">
                        <CheckCircle2 size={14} />
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Let&apos;s discuss your idea and figure out the best way to bring it
            to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
