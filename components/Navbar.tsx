"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-zinc-100">
          Advertising Report Card
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Method", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dim transition-colors duration-200 active:scale-[0.98]"
        >
          Free Report Card
        </a>
      </div>
    </motion.nav>
  );
}
