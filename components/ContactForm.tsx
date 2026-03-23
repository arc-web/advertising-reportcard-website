"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const spendOptions = [
  "Under $1,000/mo",
  "$1,000 – $5,000/mo",
  "$5,000 – $15,000/mo",
  "$15,000 – $50,000/mo",
  "$50,000+/mo",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Get Started</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 mb-6">
            Schedule Your
            <br />
            Free Demo
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-[48ch]">
            In 30 minutes, we will walk through your current ad account, identify the biggest opportunities, and show you exactly what a report card looks like.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "No commitment required",
              "Live account analysis",
              "Specific, prioritized recommendations",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {submitted ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                <PaperPlaneTilt size={24} weight="bold" className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">You are on the list.</h3>
              <p className="text-zinc-400 text-sm">We will be in touch within one business day to schedule your demo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Company</label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="Meridian Digital"
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-accent transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="spend" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Monthly Ad Spend</label>
                <select
                  id="spend"
                  required
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-accent transition-colors duration-200 appearance-none"
                >
                  <option value="" className="text-zinc-600">Select range</option>
                  {spendOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-zinc-800">{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your current challenges..."
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3.5 rounded-lg hover:bg-accent-dim transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <PaperPlaneTilt size={18} weight="bold" />
                    Get My Free Report Card
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
