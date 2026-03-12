import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Lightbulb,
  Users,
  Target,
  Zap,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — ClarityOne",
  description:
    "ClarityOne is a software development agency based in Jamaica, building modern web and mobile products for clients worldwide.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Clarity First",
    description:
      "We believe that the best software starts with clear thinking. Every decision we make — from architecture to interface — prioritizes clarity.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description:
      "We don't build software for the sake of building software. Every feature we ship is tied to a real business goal.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work with you, not just for you. Our best results come from close collaboration and open communication.",
  },
  {
    icon: Zap,
    title: "Lean Execution",
    description:
      "We move fast without cutting corners. Small team, focused scope, efficient process — that's how we deliver reliably.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Based in Jamaica, built for the world. We hold ourselves to international quality standards in everything we deliver.",
  },
  {
    icon: Heart,
    title: "Craft & Care",
    description:
      "We take pride in writing clean code, designing intuitive interfaces, and shipping software that works — every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Building software with{" "}
              <span className="text-primary">clarity</span> and purpose
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              ClarityOne is a software development agency based in Jamaica. We
              help startups and growing businesses build modern, reliable
              software — and we do it with clear communication, practical
              strategy, and world-class execution.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Who we are
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                ClarityOne was founded on a simple belief: software development
                should be clear, structured, and focused on results. Too many
                agencies overcomplicate things — bloated timelines, vague
                processes, and solutions that miss the mark.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We do things differently. We keep teams small, communication
                direct, and our focus laser-sharp on what actually matters —
                building software that works for your business.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Who we serve
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We work with startups launching their first product, growing
                companies building custom tools, and established businesses
                modernizing their tech. Our clients share one thing in common:
                they value clear thinking and reliable execution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From fintech to field operations, e-commerce to enterprise tools
                — we bring the same level of care and precision to every
                project, regardless of industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jamaica as a strength */}
      <section className="bg-section-alt py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Based in Jamaica
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              Global service, Caribbean roots
            </h2>
            <p className="mt-4 text-lg text-muted">
              Being based in Jamaica gives us a unique edge. We combine agility,
              strong English communication, timezone alignment with North
              America, and a deep commitment to quality — all at a competitive
              cost structure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "24hr", label: "Response Time" },
              { stat: "100%", label: "English Fluency" },
              { stat: "EST", label: "Timezone Aligned" },
              { stat: "Global", label: "Client Base" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              What guides our work
            </h2>
            <p className="mt-4 text-lg text-muted">
              These principles shape how we approach every project, conversation,
              and line of code.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <value.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-section-alt py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              How we work
            </h2>
            <p className="mt-4 text-lg text-muted">
              Our process is designed to be transparent, collaborative, and
              efficient. No surprises, no wasted effort.
            </p>
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground">
                  Discovery & Planning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We start by understanding your business, your users, and your
                  goals. Then we define the scope, map the features, and agree on
                  a clear plan before writing any code.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Design & Development
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We design clean, user-friendly interfaces and build them with
                  modern, proven technologies. You&apos;ll see progress regularly
                  and have opportunities to provide feedback throughout.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Launch & Delivery
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We handle deployment, testing, and launch prep. When your
                  software goes live, we make sure everything works smoothly and
                  your team is ready to use it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Ongoing Support
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  After launch, we&apos;re still here. Whether it&apos;s bug
                  fixes, new features, or scaling — we provide ongoing support to
                  keep your product running and improving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-lg text-muted">
            If you&apos;re looking for a software partner that values clarity,
            reliability, and real results — we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
