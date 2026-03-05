import Link from "next/link";
import { LinkButton } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm uppercase tracking-[0.25em] text-foreground">
          AeroSpatial Prime
        </Link>
        <nav className="hidden gap-6 text-sm text-muted md:flex">
          <Link href="#services">Services</Link>
          <Link href="#">Portfolio</Link>
          <Link href="/quote">Quote</Link>
        </nav>
        <LinkButton href="/quote" size="sm">
          Request Quote
        </LinkButton>
      </div>
    </header>
  );
}
