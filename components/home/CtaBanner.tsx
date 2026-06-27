import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <Image
        src="/images/cta-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/70 to-brand-800/60"
      />
      <Container className="relative text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Take the first step. It&apos;s just a conversation.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            No commitment, no pressure. Just an honest talk about what your family needs and how we can help.
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
