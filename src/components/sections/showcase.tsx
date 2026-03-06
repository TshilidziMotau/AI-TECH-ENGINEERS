"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

type ShowcaseCard = {
  title: string;
  subtitle: string;
  metric: string;
  image: string;
};

const cards: ShowcaseCard[] = [
  { title: "Orthomosaic Intelligence", subtitle: "High-resolution stitched aerial map", metric: "2.3cm GSD", image: "/portfolio/module-01-orthomosaic.svg" },
  { title: "Contour & Terrain Layers", subtitle: "Topographic contour extraction", metric: "0.5m contour", image: "/portfolio/module-02-contours.svg" },
  { title: "LiDAR Point Cloud", subtitle: "Dense classification preview", metric: "18M points", image: "/portfolio/module-03-lidar.svg" },
  { title: "3D Surface Mesh", subtitle: "Terrain reconstruction", metric: "TIN mesh", image: "/portfolio/module-04-terrain.svg" },
  { title: "Inspection Vision Feed", subtitle: "Defect and condition overlays", metric: "Defect tagging", image: "/portfolio/module-05-inspection.svg" },
  { title: "Volumetric Analytics", subtitle: "Stockpile and cut/fill measurement", metric: "±1.8% variance", image: "/portfolio/module-06-volumetrics.svg" },
  { title: "Mining Intelligence", subtitle: "Pit progression + haul-road context", metric: "Bench tracking", image: "/portfolio/module-07-mining.svg" },
  { title: "Crop Analysis", subtitle: "NDVI-ready field health segmentation", metric: "Vigor zoning", image: "/portfolio/module-08-crop.svg" },
];

export function Showcase() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Portfolio Preview" title="Visual outputs that communicate clarity" description="Each module now displays a relevant visual frame representing real project deliverables." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ rotateX: 4, rotateY: -4, scale: 1.01 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" animate={{ opacity: [0.3, 0.55, 0.3] }} transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY }} />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">Module {String(idx + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg text-foreground">{card.title}</h3>
              <p className="text-xs text-muted">{card.subtitle}</p>
              <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-slate-950/80">
                <Image src={card.image} alt={card.title} width={1200} height={800} className="h-32 w-full object-cover" />
              </div>
              <p className="mt-2 text-xs text-accent">{card.metric}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
