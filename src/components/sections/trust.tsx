import { SectionHeading } from "@/components/ui/section-heading";

const deliverables = ["Orthomosaics", "Topographic outputs", "CAD-ready survey datasets", "Point cloud data", "3D surface models", "Volume calculations", "Technical reports", "Structural/site inspection visuals"];

export function TrustDeliverables() {
  return (
    <section className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Deliverables" title="What clients receive" description="Actionable formats for engineers, planners, and decision-makers." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {deliverables.map((item) => (
          <div key={item} className="rounded-xl border border-white/10 bg-card p-4 text-sm text-foreground">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
