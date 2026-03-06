"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Projects Supported", value: "240+" },
  { label: "Mapped Area", value: "18,000+ ha" },
  { label: "Average Data Accuracy", value: "< 3 cm" },
  { label: "Repeat Enterprise Clients", value: "87%" },
];

const testimonials = [
  "AeroSpatial Prime gave our engineering team terrain clarity we could build from immediately.",
  "Inspection reporting quality is exceptional and board-ready.",
];

export function MetricsTestimonials() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-card p-5"
            >
              <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
              <p className="mt-1 text-sm text-muted">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((quote) => (
            <motion.blockquote
              key={quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-card p-6 text-foreground"
            >
              “{quote}”
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
