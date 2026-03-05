import { LinkButton } from "@/components/ui/button";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
      <LinkButton href="/quote" className="w-full">
        Request a Quote
      </LinkButton>
    </div>
  );
}
