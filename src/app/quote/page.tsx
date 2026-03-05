import { QuoteForm } from "@/components/quote-form";
import { SiteHeader } from "@/components/site-header";

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="container mx-auto px-4 pb-20 pt-32">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Project Intake</p>
          <h1 className="mt-3 text-4xl text-foreground md:text-5xl">Request a Technical Quotation</h1>
          <p className="mt-4 text-muted">Share project specifics and we will return a tailored scope, deliverables, and timeline proposal.</p>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
