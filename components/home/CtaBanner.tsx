import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-800 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,156,201,0.35),_transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-lavender-400/20 blur-3xl"
      />
      <Container className="relative text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Care your family can count on</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Take the first step toward dependable, compassionate support for the people you love.
          </p>
          <div className="mt-9">
            <Button asChild size="lg">
              <Link href={siteConfig.ctas.findCare.href}>Schedule a Free Consultation</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
