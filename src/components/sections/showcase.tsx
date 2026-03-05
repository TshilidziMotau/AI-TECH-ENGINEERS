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
      <SectionHeading eyebrow="Portfolio Preview" title="Visual outputs that communicate clarity" description="Placeholder visuals are crafted to represent deliverables before live project media is integrated." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <div key={card} className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute inset-0 bg-radial-grid [background-size:24px_24px] opacity-30" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-accent/80">Module 0{idx + 1}</p>
              <h3 className="mt-3 text-xl text-foreground">{card}</h3>
              <div className="mt-4 h-32 rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
