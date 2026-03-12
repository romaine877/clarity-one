import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Code2,
  Smartphone,
  Layers,
  Wrench,
  Settings,
  MessageSquare,
  Target,
  Rocket,
  Search,
  PenTool,
  Hammer,
  Send,
  HeadphonesIcon,
  CheckCircle2,
  Monitor,
} from "lucide-react";

const trustPoints = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Based in Jamaica, serving clients worldwide",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Lean, efficient builds with clear timelines",
  },
  {
    icon: Shield,
    title: "Reliable Process",
    description: "Structured workflow from discovery to launch",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Consistent updates and transparent progress",
  },
];

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Launch your product idea with a focused, well-built minimum viable product. Go from concept to market quickly.",
    href: "/services#mvp",
  },
  {
    icon: Monitor,
    title: "Custom Web Applications",
    description:
      "Tailored web platforms that solve specific business problems — dashboards, portals, marketplaces, and more.",
    href: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile apps that deliver smooth, reliable user experiences.",
    href: "/services#mobile",
  },
  {
    icon: Settings,
    title: "Internal Tools & Automation",
    description:
      "Custom tools that streamline your operations, reduce manual work, and save your team time.",
    href: "/services#tools",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description:
      "Ongoing technical support, updates, and improvements to keep your software running smoothly.",
    href: "/services#support",
  },
];

const caseStudies = [
  {
    title: "FieldSync — Field Operations Platform",
    category: "Web Application",
    description:
      "A real-time field operations management platform for service teams. Scheduling, dispatch, route optimization, and reporting in one unified dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebSockets"],
    result: "50% reduction in manual scheduling time",
  },
  {
    title: "Minted — Fintech Mobile App",
    category: "Mobile App",
    description:
      "A personal finance app that helps users track spending, set budgets, and automate savings goals with a clean and intuitive interface.",
    tech: ["React Native", "TypeScript", "Supabase"],
    result: "4.8 star rating across app stores",
  },
  {
    title: "LaunchKit — SaaS Starter Platform",
    category: "MVP Development",
    description:
      "A reusable SaaS starter kit with authentication, billing, team management, and dashboards — built for founders who need to ship fast.",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    result: "From idea to launched product in 6 weeks",
  },
];

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We learn about your business, goals, users, and constraints.",
  },
  {
    icon: Target,
    step: "02",
    title: "Plan",
    description:
      "We define the scope, map the features, and create a clear roadmap.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Design",
    description:
      "We design interfaces that are clean, intuitive, and on-brand.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Build",
    description:
      "We develop your software with modern tools and proven practices.",
  },
  {
    icon: Send,
    step: "05",
    title: "Launch",
    description: "We deploy your product and ensure everything runs smoothly.",
  },
  {
    icon: HeadphonesIcon,
    step: "06",
    title: "Support",
    description:
      "We provide ongoing maintenance, updates, and technical support.",
  },
];

const whyUs = [
  {
    title: "Clear Communication",
    description:
      "You always know where your project stands. No guesswork, no radio silence.",
  },
  {
    title: "Practical Strategy",
    description:
      "We focus on what matters for your business — not overengineered solutions.",
  },
  {
    title: "Lean & Efficient",
    description:
      "Small, focused team that moves fast without unnecessary overhead.",
  },
  {
    title: "Modern Technologies",
    description:
      "We use the latest tools and frameworks to build software that scales.",
  },
  {
    title: "Reliable Delivery",
    description: "We hit deadlines and ship quality work — consistently.",
  },
  {
    title: "Global-Quality Service",
    description:
      "World-class development standards, delivered from Jamaica to anywhere.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-light to-background pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Software Development Agency
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              We build modern software that helps your business{" "}
              <span className="text-primary">grow</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              ClarityOne helps startups and growing businesses build web and
              mobile products with clarity, speed, and reliable execution.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/work"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-card-hover"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-card py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <point.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Software that solves real problems
            </h2>
            <p className="mt-4 text-lg text-muted">
              From early-stage MVPs to enterprise-grade platforms, we build
              software that delivers measurable results for your business.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-section-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Projects built with clarity
            </h2>
            <p className="mt-4 text-lg text-muted">
              A selection of projects that demonstrate our approach to building
              practical, well-crafted software.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="flex flex-col rounded-xl border border-border bg-card p-7"
              >
                <div className="mb-4 flex h-44 items-center justify-center rounded-lg bg-gradient-to-br from-primary-light to-section-alt">
                  <Code2 size={48} className="text-primary/40" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {study.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {study.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {study.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary-light px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
                  <CheckCircle2 size={14} />
                  {study.result}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card-hover"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A clear, proven process
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every project follows a structured workflow designed to keep things
              on track, transparent, and moving forward.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-border bg-card p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary/30">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <step.icon size={18} />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClarityOne */}
      <section className="bg-section-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why ClarityOne
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What makes us different
            </h2>
            <p className="mt-4 text-lg text-muted">
              We keep things simple, structured, and focused on your success.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-border bg-card p-7"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-light">
                  <Layers size={16} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to build something{" "}
              <span className="text-primary">great</span>?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us about your project. We&apos;ll get back to you within 24
              hours with a clear plan of action.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                Tell Us About Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-card-hover"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
