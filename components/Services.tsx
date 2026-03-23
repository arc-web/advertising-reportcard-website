"use client";

import { motion } from "framer-motion";
import { Globe, MagnifyingGlass, CurrencyDollar, ShareNetwork } from "@phosphor-icons/react";

const services = [
  {
    icon: Globe,
    title: "Website Overview",
    desc: "Assess structure, content, user experience",
    detail: "A comprehensive audit of your site's architecture, conversion paths, and UX flow to identify friction points costing you revenue.",
  },
  {
    icon: MagnifyingGlass,
    title: "SEO Audit",
    desc: "Keyword impact, backlink strength",
    detail: "Deep keyword analysis, technical SEO gaps, and backlink profile assessment to drive sustainable organic growth.",
  },
  {
    icon: CurrencyDollar,
    title: "PPC Audit",
    desc: "Ad effectiveness, keyword precision, ROI per ad dollar",
    detail: "Rigorous review of your Google Ads account — targeting, bidding strategy, Quality Score, and ROI per dollar spent.",
  },
  {
    icon: ShareNetwork,
    title: "Social Audit",
    desc: "Social engagement, competitor comparison",
    detail: "Platform-by-platform analysis of engagement rates, content performance, and competitor benchmarks.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="text-xs text-accent uppercase tracking-widest font-medium mb-4">What We Audit</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 max-w-lg">
            Four lenses. One complete picture.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon size={20} weight="bold" className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100 mb-1">{service.title}</h3>
                  <p className="text-sm text-accent/80 mb-3">{service.desc}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{service.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
