"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-grid [background-size:36px_36px] opacity-35" />
      <motion.div style={{ y }} className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <motion.div
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, 24, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY }}
      />

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <motion.path
          d="M0,410 C190,340 270,470 450,410 C610,350 760,460 930,420 C1040,390 1130,420 1200,405"
          stroke="url(#route)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="route" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="#6E86FF" />
            <stop offset="100%" stopColor="#5BE7FF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto grid gap-8 px-4 pb-24 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent">
            AI-Powered Geospatial Operations
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            Spatial Intelligence for Infrastructure-Scale Decisions.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            AeroSpatial Prime delivers survey-grade mapping, LiDAR terrain analysis, and engineering-ready outputs for construction,
            mining, water, and development programs where accuracy is non-negotiable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/quote">Request a Quote</LinkButton>
            <LinkButton href="#services" variant="secondary">
              View Services
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-card p-6 backdrop-blur-xl"
        >
          <p className="text-sm text-accent">Autonomous Mission Intelligence</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <motion.div whileHover={{ x: 4 }} className="rounded-xl border border-white/10 bg-white/5 p-3">
              Terrain model confidence: 98.7%
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="rounded-xl border border-white/10 bg-white/5 p-3">
              Point cloud classification aligned for CAD/BIM workflows
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="rounded-xl border border-white/10 bg-white/5 p-3">
              Flight-path optimization generated for 42ha high-detail acquisition
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
