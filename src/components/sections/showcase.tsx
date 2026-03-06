"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

type ShowcaseCard = {
  title: string;
  subtitle: string;
  lines: string[];
  metric: string;
};

const cards: ShowcaseCard[] = [
  { title: "Orthomosaic Intelligence", subtitle: "Stitched aerial map", lines: ["0,0 20,16 40,8 60,20 80,12 100,26", "0,34 20,22 40,30 60,16 80,28 100,14"], metric: "2.3cm GSD" },
  { title: "Contour & Terrain Layers", subtitle: "Topographic contouring", lines: ["0,26 20,20 40,22 60,14 80,18 100,10", "0,44 20,38 40,42 60,34 80,36 100,30"], metric: "0.5m contour" },
  { title: "LiDAR Point Cloud", subtitle: "Dense point classification", lines: ["8,10 18,18 32,8 44,20 58,14 72,22 88,12", "6,36 20,28 34,40 48,30 64,42 78,32 92,44"], metric: "18M points" },
  { title: "3D Surface Mesh", subtitle: "Surface reconstruction", lines: ["0,44 20,30 40,36 60,20 80,24 100,12", "0,18 20,12 40,20 60,10 80,18 100,8"], metric: "TIN mesh" },
  { title: "Inspection Vision Feed", subtitle: "Asset condition view", lines: ["0,30 20,24 40,28 60,18 80,24 100,20", "0,48 20,42 40,46 60,34 80,40 100,36"], metric: "Defect tagging" },
  { title: "Volumetric Analytics", subtitle: "Cut/fill and stockpile", lines: ["0,36 20,20 40,34 60,18 80,30 100,14", "0,16 20,12 40,22 60,8 80,18 100,10"], metric: "±1.8% variance" },
  { title: "Mining Intelligence", subtitle: "Pit progression and haul-road", lines: ["0,28 20,18 40,24 60,12 80,20 100,8", "0,46 20,30 40,40 60,26 80,34 100,22"], metric: "Bench tracking" },
  { title: "Crop Analysis", subtitle: "Field health and vigor", lines: ["0,22 20,16 40,20 60,12 80,18 100,10", "0,42 20,34 40,40 60,28 80,34 100,24"], metric: "NDVI-ready" },
];

export function Showcase() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Portfolio Preview" title="Visual outputs that communicate clarity" description="Each module now previews realistic geospatial output patterns and analytics signals." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" animate={{ opacity: [0.35, 0.6, 0.35] }} transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY }} />
            <div className="absolute inset-0 bg-radial-grid [background-size:24px_24px] opacity-30" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">Module {String(idx + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg text-foreground">{card.title}</h3>
              <p className="text-xs text-muted">{card.subtitle}</p>
              <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/80 p-3">
                <svg viewBox="0 0 100 50" className="h-20 w-full">
                  {card.lines.map((line, lineIndex) => (
                    <motion.polyline
                      key={`${card.title}-line-${lineIndex}`}
                      points={line}
                      fill="none"
                      stroke={lineIndex === 0 ? "#6E86FF" : "#5BE7FF"}
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: lineIndex * 0.15 }}
                    />
                  ))}
                  <motion.circle cx="78" cy="18" r="2" fill="#5BE7FF" animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
                </svg>
              </div>
              <p className="mt-2 text-xs text-accent">{card.metric}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
