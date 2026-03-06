"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const glowOneX = useTransform(scrollYProgress, [0, 1], ["-10%", "70%"]);
  const glowOneY = useTransform(scrollYProgress, [0, 1], ["5%", "65%"]);
  const glowTwoX = useTransform(scrollYProgress, [0, 1], ["80%", "10%"]);
  const glowTwoY = useTransform(scrollYProgress, [0, 1], ["15%", "75%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.5, 0.3]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl"
        style={{ left: glowOneX, top: glowOneY, opacity: overlayOpacity }}
      />
      <motion.div
        className="absolute h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl"
        style={{ left: glowTwoX, top: glowTwoY, opacity: overlayOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-radial-grid [background-size:30px_30px]"
        style={{ opacity: overlayOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,24,0.15),rgba(10,14,24,0.85))]"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
