import { Activity, Building2, Mountain, Radar, ScanLine, Waves } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";

const services = [
  { icon: Radar, title: "Drone Mapping", copy: "High-accuracy aerial mapping for planning and construction intelligence.", benefit: "See site conditions quickly and reduce rework." },
  { icon: ScanLine, title: "Drone Surveying", copy: "Survey-grade data capture aligned to engineering and cadastral workflows.", benefit: "Improve coordination with dependable geospatial baselines." },
  { icon: Mountain, title: "LiDAR Scanning", copy: "Dense point-cloud acquisition for vegetation penetration and terrain truth.", benefit: "Extract detail where photogrammetry falls short." },
  { icon: Waves, title: "Hydrology Studies", copy: "Surface models and catchment insights for drainage and flood assessments.", benefit: "Plan resilient water infrastructure with confidence." },
  { icon: Building2, title: "Structural Design Support", copy: "Data-enriched context for civil and structural engineering decisions.", benefit: "Design with accurate topographic and as-built evidence." },
  { icon: Activity, title: "Inspections & Progress Monitoring", copy: "Recurring aerial inspections and progress intelligence for stakeholders.", benefit: "Track risk, quality, and timeline performance in one view." },
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Services" title="Engineering-grade geospatial services" description="From data capture to actionable deliverables, every mission is designed for measurable project outcomes." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="group rounded-2xl border border-white/10 bg-card p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50">
            <service.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-xl text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm text-muted">{service.copy}</p>
            <p className="mt-4 text-sm text-foreground">{service.benefit}</p>
            <LinkButton href="/quote" variant="ghost" className="mt-5 px-0">
              Get service quote
            </LinkButton>
          </div>
        ))}
      </div>
    </section>
  );
}
