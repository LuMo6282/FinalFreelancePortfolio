"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-edge bg-surface px-4 py-3 font-display text-base font-light text-primary placeholder:text-secondary/60 transition-colors focus:border-accent focus:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent/25 disabled:opacity-60";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("https://formspree.io/f/mojpqelr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const firstError = Array.isArray(data?.errors)
          ? data.errors[0]?.message
          : undefined;
        throw new Error(firstError ?? "Failed to send");
      }

      setState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:gap-20"
      >
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-none tracking-tight text-primary sm:text-5xl md:text-6xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-6 max-w-md font-serif text-xl italic text-secondary sm:text-2xl">
            Tell me about your project. I respond within 24 hours.
          </p>

          <div className="mt-8 h-px w-12 bg-accent" aria-hidden="true" />

          <p className="mt-8 max-w-sm font-display text-sm font-light leading-relaxed text-secondary">
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:lucasmoraca12@gmail.com"
              className="text-accent transition-opacity hover:opacity-70"
            >
              lucasmoraca12@gmail.com
            </a>
            .
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate={false}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block font-display text-[11px] font-light uppercase tracking-[0.18em] text-secondary"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={state === "loading"}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block font-display text-[11px] font-light uppercase tracking-[0.18em] text-secondary"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "loading"}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block font-display text-[11px] font-light uppercase tracking-[0.18em] text-secondary"
            >
              Project Details
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={state === "loading"}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={state === "loading"}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-body transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "loading" ? "Sending…" : "Send it"}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </button>

            {state === "success" && (
              <p
                className="font-display text-sm font-light text-accent"
                role="status"
              >
                Sent. I&apos;ll be in touch.
              </p>
            )}
            {state === "error" && (
              <p
                className="font-display text-sm font-light text-[#c86a5c]"
                role="alert"
              >
                {errorMessage ??
                  "Couldn’t send. Try again or email me directly."}
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
