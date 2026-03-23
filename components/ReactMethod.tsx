"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    letter: "R",
    label: "Research",
    desc: "Deep analysis to uncover what really works in your advertising. We examine every layer — keywords, bids, placements, competitors — to build a data-driven foundation.",
  },
  {
    letter: "E",
    label: "Empower",
    desc: "Detailed insights to make informed decisions with confidence. You get clear, actionable reporting without the jargon — so your team knows exactly what to do next.",
  },
  {
    letter: "A",
    label: "Activate",
    desc: "Apply insights to catalyze real change in your campaigns. We move from analysis to implementation — optimizing bids, restructuring ad groups, rewriting copy that converts.",
  },
  {
    letter: "C",
    label: "Compete",
    desc: "Competitive intelligence to outmaneuver competition. Know exactly where competitors are spending, what they're bidding on, and where you can capture market share.",
  },
  {
    letter: "T",
    label: "Track",
    desc: "Tools and metrics to track effectiveness and optimize continuously. Custom dashboards, conversion tracking, and monthly performance reviews ensure gains compound over time.",
  },
];

export default function ReactMethod() {
  const [active, setActive] = useState(0);

  return (
    <section id="method" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Our Process</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 max-w-lg">
            The R.E.A.C.T. Method
          </h2>
          <p className="text-zinc-500 mt-4 max-w-[52ch]">
            A proven five-step framework that transforms ad spend into measurable, compounding returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Step selector */}
          <div className="space-y-1">
            {steps.map((step, i) => (
              <motion.button
                key={step.letter}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-5 px-6 py-5 rounded-xl transition-all duration-200 group ${
                  active === i
                    ? "bg-zinc-800 border border-zinc-700"
                    : "hover:bg-zinc-800/40 border border-transparent"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg transition-colors duration-200 ${
                    active === i
                      ? "bg-accent text-white"
                      : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  {step.letter}
                </div>
                <div>
                  <div className={`font-semibold transition-colors duration-200 ${active === i ? "text-zinc-100" : "text-zinc-400"}`}>
                    {step.label}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10"
              >
                <div className="text-7xl font-bold tracking-tighter text-accent/20 mb-6">
                  {steps[active].letter}
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-4">{steps[active].label}</h3>
                <p className="text-zinc-400 leading-relaxed text-lg">{steps[active].desc}</p>
                <div className="mt-8 flex items-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === active ? "w-8 bg-accent" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
