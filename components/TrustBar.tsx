"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

const trustPoints = [
  "Seasoned experts",
  "Actionable insights",
  "Tailored recommendations",
];

export default function TrustBar() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-900/50 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="text-accent font-bold text-lg tracking-tight">Improve Your R.O.I. by 5x–20x</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <CheckCircle size={16} weight="fill" className="text-accent flex-shrink-0" />
              <span className="text-sm text-zinc-300">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
