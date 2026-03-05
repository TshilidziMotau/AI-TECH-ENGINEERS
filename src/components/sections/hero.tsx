"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-grid [background-size:40px_40px] opacity-30" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <div className="container mx-auto grid gap-8 px-4 pb-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent">
            Premium Geospatial Intelligence
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            AI-Driven Drone Mapping, Surveying & Spatial Intelligence for Critical Projects.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            AeroSpatial Prime delivers precision aerial data, LiDAR intelligence, and engineering-grade outputs for infrastructure, mining, water,
            and development teams that need decisions backed by accurate terrain reality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/quote">Request a Quote</LinkButton>
            <LinkButton href="#services" variant="secondary">
              View Services
            </LinkButton>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-card p-6 backdrop-blur-xl"
        >
          <p className="text-sm text-accent">AI Mission Console</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Terrain model confidence: 98.7%</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Point cloud classification ready for CAD/BIM pipelines</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Optimized flight plan generated for 42ha in high-detail mode</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
