"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const objects = [
  { name: "Drone Mapping Node", tone: "from-cyan-400/60 to-blue-500/30" },
  { name: "LiDAR Scanner Core", tone: "from-indigo-400/60 to-cyan-400/30" },
  { name: "Terrain Intelligence Cube", tone: "from-violet-400/60 to-blue-500/30" },
];

export function ThreeDServices() {
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="3D Operations"
        title="Moving 3D service objects"
        description="A live 3D-inspired layer that visually represents core service systems as visitors scroll through the site."
      />
      <div className="grid gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
        {objects.map((object, idx) => (
          <motion.div
            key={object.name}
            initial={{ opacity: 0, y: 26, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            className="rounded-2xl border border-white/10 bg-card p-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className={`mx-auto h-28 w-28 rounded-2xl bg-gradient-to-br ${object.tone} shadow-glow`}
              animate={{ rotateX: [0, 12, 0], rotateY: [0, 16, 0], y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="h-full w-full rounded-2xl border border-white/30 bg-white/5 backdrop-blur" />
            </motion.div>
            <h3 className="mt-4 text-center text-foreground">{object.name}</h3>
            <p className="mt-2 text-center text-sm text-muted">3D animated representation of mission hardware and spatial processing.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
