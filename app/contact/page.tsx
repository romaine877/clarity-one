"use client";

import type { Metadata } from "next";
import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const projectTypes = [
  "MVP Development",
  "Custom Web Application",
  "Mobile App Development",
  "Internal Tool / Automation",
  "Support & Maintenance",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

const timelines = [
  "Less than 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In a real implementation, this would send data to an API
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Tell us about your{" "}
              <span className="text-primary">project</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Share a few details about what you&apos;re building and we&apos;ll
              get back to you within 24 hours with a clear plan of action.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-foreground">
                    Message sent
                  </h2>
                  <p className="mt-3 max-w-md text-base text-muted">
                    Thank you for reaching out. We&apos;ll review your project
                    details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-8 md:p-10"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="projectType"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Estimated Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      >
                        <option value="">Select a timeline</option>
                        {timelines.map((tl) => (
                          <option key={tl} value={tl}>
                            {tl}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="description"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your project — what you're building, the problem it solves, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@clarityone.dev"
                      className="text-sm text-primary hover:underline"
                    >
                      hello@clarityone.dev
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Location
                    </p>
                    <p className="text-sm text-muted">
                      Jamaica — serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Response Time
                    </p>
                    <p className="text-sm text-muted">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-section-alt p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  What to include
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {[
                    "A brief description of your project",
                    "The problem you're trying to solve",
                    "Your target users or audience",
                    "Any existing designs or specs",
                    "Your ideal launch date",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
