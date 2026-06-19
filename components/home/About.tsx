import Link from "next/link";
import { HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    body: "Caregivers who lead with kindness and treat every client with the dignity of family.",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    body: "Care plans shaped around each person's needs, routines, and goals — not a checklist.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    body: "Dependable, consistent support across every county, available day or night.",
  },
];

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">Care that feels like family</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Lovereign Care Services was built on a simple belief: that everyone deserves to be
            cared for with warmth, dignity, and respect — in the comfort of their own home. We
            support families across all counties with personalized home care and behavioral
            support, delivered by caregivers who show up consistently and treat your loved ones
            like their own. Whether you need a few hours of help a week or around-the-clock
            support, we build care around the person — never a one-size-fits-all template.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.08}>
              <Card className="h-full">
                <CardContent>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                    <pillar.icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-brand-900">{pillar.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{pillar.body}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button asChild variant="ghost" size="lg">
            <Link href="/contact">Speak with Lovereign today &rarr;</Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
