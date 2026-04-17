"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChartLineUp, Target, TrendUp } from "@phosphor-icons/react";

function HeroSkeleton() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-800/50 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Content Skeleton */}
        <div className="space-y-6">
          {/* Badge skeleton */}
          <div className="inline-block">
            <div className="h-7 w-40 bg-zinc-800 rounded-full animate-pulse" />
          </div>

          {/* Heading skeleton */}
          <div className="space-y-4">
            <div className="h-14 md:h-16 xl:h-20 w-full max-w-md bg-zinc-800 rounded-lg animate-pulse" />
            <div className="h-14 md:h-16 xl:h-20 w-4/5 max-w-md bg-zinc-800 rounded-lg animate-pulse" />
            <div className="h-14 md:h-16 xl:h-20 w-3/5 max-w-md bg-zinc-800 rounded-lg animate-pulse" />
          </div>

          {/* Description skeleton */}
          <div className="space-y-3 pt-2">
            <div className="h-5 w-full max-w-[52ch] bg-zinc-800 rounded animate-pulse" />
            <div className="h-5 w-4/5 max-w-[52ch] bg-zinc-800 rounded animate-pulse" />
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-12 w-full sm:w-56 bg-zinc-800 rounded-lg animate-pulse" />
            <div className="h-12 w-full sm:w-40 bg-zinc-800 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Right: Visual Skeleton */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Main card skeleton */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="space-y-6">
                {/* Live badge skeleton */}
                <div className="h-4 w-32 bg-zinc-800 rounded animate-pulse" />

                {/* Big number skeleton */}
                <div className="space-y-2">
                  <div className="h-12 w-24 bg-zinc-800 rounded animate-pulse" />
                  <div className="h-3 w-36 bg-zinc-800 rounded animate-pulse" />
                </div>

                {/* Chart skeleton */}
                <div className="flex items-end gap-1.5 h-16">
                  {[35, 52, 41, 67, 48, 78, 93, 71, 85, 94].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-zinc-800 rounded-sm animate-pulse"
                    />
                  ))}
                </div>

                {/* Stats skeleton */}
                <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-6 w-16 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-3 w-20 bg-zinc-800 rounded animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-16 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-3 w-20 bg-zinc-800 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges skeleton */}
            <div className="absolute -right-4 top-8 h-12 w-32 bg-zinc-800 border border-zinc-700 rounded-xl animate-pulse" />
            <div className="absolute -left-4 bottom-8 h-12 w-40 bg-zinc-800 border border-zinc-700 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualElement() {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Main card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Live Performance</span>
          </div>
          <div className="mb-6">
            <div className="text-5xl font-bold tracking-tighter text-zinc-100">18.4%</div>
            <div className="text-sm text-zinc-500 mt-1">Avg. Conversion Rate</div>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-16">
            {[35, 52, 41, 67, 48, 78, 93, 71, 85, 94].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: `${h}%`, originY: 1 }}
                className={`flex-1 rounded-sm ${i === 9 ? "bg-accent" : "bg-zinc-700"}`}
              />
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4">
            <div>
              <div className="text-lg font-semibold text-zinc-100">$12.40</div>
              <div className="text-xs text-zinc-500">Cost Per Lead</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-accent">+340%</div>
              <div className="text-xs text-zinc-500">ROI Improvement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -right-4 top-8 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <TrendUp size={16} weight="bold" className="text-accent" />
          <span className="text-xs font-medium text-zinc-200">5x–20x ROI</span>
        </div>
      </motion.div>

      {/* Bottom badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -left-4 bottom-8 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <Target size={16} weight="bold" className="text-accent" />
          <span className="text-xs font-medium text-zinc-200">1,240 Leads Generated</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section className="min-h-[100dvh] flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-800/50 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 mb-8"
          >
            <ChartLineUp size={14} weight="bold" className="text-accent" />
            <span className="text-xs text-accent font-medium uppercase tracking-widest">Google Ads Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-zinc-100 mb-6"
          >
            Transform Your
            <br />
            <span className="text-accent">Potential</span>
            <br />
            Into Profit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-zinc-400 leading-relaxed max-w-[52ch] mb-10"
          >
            We identify and unlock possibilities within your advertising that you may not even be aware of.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dim transition-all duration-200 active:scale-[0.98] group"
            >
              Get Your Free Report Card
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 font-medium px-7 py-3.5 rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-all duration-200 active:scale-[0.98]"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="hidden lg:flex justify-center items-center">
          <VisualElement />
        </div>
      </div>
    </section>
  );
}
