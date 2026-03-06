"use client";

import { motion } from "framer-motion";
import { Activity, Building2, Mountain, Radar, ScanLine, Waves } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";

const services = [
  { icon: Radar, title: "Drone Mapping", copy: "High-accuracy aerial mapping for planning and construction intelligence.", benefit: "Accelerate site planning with reliable spatial context." },
  { icon: ScanLine, title: "Drone Surveying", copy: "Survey-grade data capture aligned to engineering and cadastral workflows.", benefit: "Establish dependable baselines for technical teams." },
  { icon: Mountain, title: "LiDAR Scanning", copy: "Dense point-cloud acquisition for vegetation penetration and terrain truth.", benefit: "Capture detail where photogrammetry underperforms." },
  { icon: Waves, title: "Hydrology Studies", copy: "Surface models and catchment insights for drainage and flood assessments.", benefit: "Model water risk with terrain-driven evidence." },
  { icon: Building2, title: "Structural Design Support", copy: "Data-enriched context for civil and structural engineering decisions.", benefit: "Inform design packages with measured reality." },
  { icon: Activity, title: "Inspections & Progress Monitoring", copy: "Recurring aerial inspections and progress intelligence for stakeholders.", benefit: "Track quality, safety, and schedule with clarity." },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Services" title="Engineering-grade geospatial services" description="From data capture to analytics, every mission is structured for decision-ready outputs." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group rounded-2xl border border-white/10 bg-card p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50"
          >
            <service.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-xl text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm text-muted">{service.copy}</p>
            <p className="mt-4 text-sm text-foreground">{service.benefit}</p>
            <LinkButton href="/quote" variant="ghost" className="mt-5 px-0">
              Get service quote
            </LinkButton>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
