"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const cards = [
  "Orthomosaic Intelligence",
  "Contour & Terrain Layers",
  "LiDAR Point Cloud",
  "3D Surface Mesh",
  "Inspection Vision Feed",
  "Volumetric Analytics",
];

export function Showcase() {
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Portfolio Preview" title="Visual outputs that communicate clarity" description="Animated placeholders represent production deliverables until project media is integrated." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={card}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
              animate={{ opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute inset-0 bg-radial-grid [background-size:24px_24px] opacity-30" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">Module 0{idx + 1}</p>
              <h3 className="mt-3 text-xl text-foreground">{card}</h3>
              <motion.div
                className="mt-4 h-32 rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
