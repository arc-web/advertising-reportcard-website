"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Total Leads", value: 1240, prefix: "", suffix: "+", display: "1,240" },
  { label: "Total Sales", value: 2.4, prefix: "$", suffix: "M", display: "$2.4M" },
  { label: "Conversion Rate", value: 18, prefix: "", suffix: "%", display: "18%" },
  { label: "Cost Per Lead", value: 12, prefix: "$", suffix: "", display: "$12" },
];

function CounterNumber({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1800;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + increment, stat.value);
      setCount(current);
      if (current >= stat.value) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [trigger, stat.value]);

  const formatted = stat.suffix === "M"
    ? `$${count.toFixed(1)}M`
    : stat.prefix === "$"
    ? `$${Math.round(count)}`
    : stat.suffix === "%"
    ? `${Math.round(count)}%`
    : `${Math.round(count).toLocaleString()}+`;

  return (
    <span className="text-5xl md:text-6xl font-bold tracking-tighter text-zinc-100">
      {trigger ? formatted : "0"}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Proven Results</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100">
            Numbers that speak.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-zinc-950 p-8 md:p-10 flex flex-col gap-2"
            >
              <CounterNumber stat={stat} trigger={inView} />
              <span className="text-sm text-zinc-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
