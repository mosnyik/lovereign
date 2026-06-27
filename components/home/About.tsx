import Image from "next/image";
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
    body: "We treat every person in our care the way we'd want our own parents treated. With patience, warmth, and real respect.",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    body: "We fit ourselves around the person, not the other way around. Their routine, their preferences, their pace.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    body: "When we say we'll be there, we mean it. Consistent caregivers, predictable schedules, and a team you can actually reach.",
  },
];

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/home-about.jpg"
                alt="A caregiver and an elderly client sharing a warm conversation at home"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">Care that feels like family</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Lovereign was built around one belief: that getting older or needing extra support
              shouldn&apos;t mean losing your sense of home or who you are. We serve families
              across all 21 counties in New Jersey with home care and behavioral support, delivered
              by caregivers who show up consistently and treat your loved ones like their own.
              Whether it&apos;s a few hours of help a week or around-the-clock support, we build
              care around the actual person.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
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
