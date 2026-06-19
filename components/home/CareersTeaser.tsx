import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";

export function CareersTeaser() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-10 rounded-3xl bg-lavender-50 px-6 py-12 sm:px-12 lg:grid-cols-[1fr_auto]">
        <FadeIn>
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">Join a team that cares</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            We&apos;re always looking for compassionate, dependable caregivers who want to make a
            real difference in people&apos;s lives. If that sounds like you, we&apos;d love to
            meet you.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <Button asChild size="lg">
            <Link href="/careers">View Open Roles</Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
