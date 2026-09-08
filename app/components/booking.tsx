"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";

const EVENT_TYPES = [
  "Wedding",
  "Engagement",
  "Traditional Marriage",
  "Birthday Party",
  "Corporate Event",
  "Outdooring / Naming",
  "Funeral Reception",
  "Other",
];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  eventType: EVENT_TYPES[0],
};

const fieldClass =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25 focus:outline-none";

const labelClass =
  "mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500";

export default function BookingSection() {
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);

  /*
   * Block past dates. Applied imperatively on mount rather than as a rendered
   * prop: the server and the visitor can sit in different timezones, so
   * deriving "today" during render risks a hydration mismatch.
   */
  const applyMinDate = (node: HTMLInputElement | null) => {
    if (!node) return;
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    node.min = now.toISOString().slice(0, 10);
  };

  const update = (key: keyof typeof EMPTY, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit booking");
      }

      toast.success("Request received. We will be in touch shortly.");
      setForm(EMPTY);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="relative z-30 bg-cream pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Lifted card straddles the hero, which signals there is more below */}
        <div className="-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:-mt-28 sm:p-8 lg:-mt-32 lg:p-10">
          {/* Card header */}
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
                Book Us
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Reserve Your Event Date
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              <span>
                Open daily{" "}
                <span className="font-semibold text-slate-900">8:00 AM &ndash; 10:00 PM</span>
              </span>
            </p>
          </div>

          {/* Fields: 1 / 2 / 3 columns keeps every input comfortably wide */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div>
              <label className={labelClass} htmlFor="booking-name">
                Full Name
              </label>
              <input
                id="booking-name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ama Serwaa"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="booking-email">
                Email
              </label>
              <input
                id="booking-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="booking-phone">
                Phone
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="055 000 0000"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="booking-date">
                Event Date
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  ref={applyMinDate}
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={`${fieldClass} pr-11`}
                />
                <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="booking-guests">
                Guests
              </label>
              <input
                id="booking-guests"
                type="number"
                min={1}
                inputMode="numeric"
                placeholder="150"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="booking-type">
                Event Type
              </label>
              <div className="relative">
                <select
                  id="booking-type"
                  value={form.eventType}
                  onChange={(e) => update("eventType", e.target.value)}
                  className={`${fieldClass} appearance-none pr-11`}
                >
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3">
              <p className="text-xs text-slate-400">
                No payment required &mdash; we confirm availability and send a quote.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Sending" : "Book Us"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
