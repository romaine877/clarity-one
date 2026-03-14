"use client";

import { useState } from "react";
import { toast } from "sonner";

function MailtoLink() {
  return (
    <a
      href="mailto:contact@clarityone.dev"
      className="group flex items-center gap-3"
      style={{
        background: "rgba(93,184,232,0.06)",
        border: "1px solid rgba(93,184,232,0.2)",
        borderRadius: "100px",
        padding: "12px 22px",
        color: "var(--accent)",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "0.9rem",
        fontWeight: 400,
        letterSpacing: "0.02em",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(93,184,232,0.11)";
        e.currentTarget.style.borderColor = "rgba(93,184,232,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(93,184,232,0.06)";
        e.currentTarget.style.borderColor = "rgba(93,184,232,0.2)";
      }}
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.75 }}>
        <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M1 5.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      contact@clarityone.dev
    </a>
  );
}

export { MailtoLink };

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent. We'll be in touch within 48 hours.");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xl mx-auto"
    >
      <input
        type="email"
        placeholder="Work email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "18px 20px",
          color: "var(--text)",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.95rem",
          fontWeight: 300,
          outline: "none",
          width: "100%",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(93,184,232,0.45)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      />

      <textarea
        placeholder="What are you building? Include goals, timeline, budget, or existing systems if helpful."
        required
        rows={7}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "18px 20px",
          color: "var(--text)",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.95rem",
          fontWeight: 300,
          outline: "none",
          resize: "vertical",
          width: "100%",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(93,184,232,0.45)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          background: "var(--text)",
          color: "var(--bg)",
          border: "none",
          borderRadius: "12px",
          padding: "18px 20px",
          fontFamily: "var(--font-syne), system-ui, sans-serif",
          fontSize: "0.9rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          transition: "opacity 0.2s",
          width: "100%",
        }}
      >
        {loading ? "Sending..." : "Request a Consultation"}
      </button>
    </form>
  );
}
