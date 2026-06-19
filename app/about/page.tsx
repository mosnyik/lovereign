import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Sparkles, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us / Our Team",
  description:
    "Lovereign Care Services was built on a belief that everyone deserves to be cared for with warmth, dignity, and respect — in the comfort of their own home.",
};

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

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-cream py-16 sm:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Badge>About Lovereign</Badge>
            <h1 className="mt-5 font-serif text-4xl text-brand-900 sm:text-5xl">
              Care that feels like family
            </h1>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="text-lg leading-relaxed text-ink-muted">
              Lovereign Care Services was built on a simple belief: that everyone deserves to be
              cared for with warmth, dignity, and respect — in the comfort of their own home. We
              support families across all counties with personalized home care and behavioral
              support, delivered by caregivers who show up consistently and treat your loved ones
              like their own.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Whether you need a few hours of help a week or around-the-clock support, we build
              care around the person — never a one-size-fits-all template. Our mission is to give
              families peace of mind and give the people we care for a life lived with dignity,
              wherever they call home.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">What guides our care</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
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
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Where we serve</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
              {siteConfig.serviceArea}. Wherever your loved one calls home, we can help — reach
              out and we&apos;ll confirm availability and timing for your area.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Licensing &amp; credentials</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
              TODO: license number(s), state certifications, and any accreditations to display
              here — these are key trust signals for families and case managers and should be
              confirmed before launch.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-lavender-50 py-16 sm:py-20">
        <Container className="text-center">
          <FadeIn>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              <Users className="h-7 w-7 text-brand-700" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-serif text-3xl text-brand-900 sm:text-4xl">Meet the team</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              We&apos;re building out caregiver and staff profiles for this page. Check back soon
              to meet the people behind Lovereign Care Services.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">Ready to talk?</h2>
            <div className="mt-7">
              <Button asChild size="lg">
                <Link href={siteConfig.ctas.findCare.href}>Schedule a Free Consultation</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
