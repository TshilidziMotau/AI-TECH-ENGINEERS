"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  "Tell us about your project",
  "Share location and scope",
  "We assess requirements",
  "Receive a tailored quotation",
  "Execution and technical delivery",
];

export function HowItWorks() {
  return (
    <section className="border-y border-white/10 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Process" title="A streamlined path from inquiry to delivery" description="Clear communication and technical rigor at every stage." />
        <div className="mx-auto grid max-w-4xl gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-card p-4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-sm text-accent">{idx + 1}</span>
              <p className="text-foreground">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
