import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Sparkles, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";
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
    body: "We treat every person in our care the way we'd want our own family treated. With patience, warmth, and real respect.",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    body: "We fit ourselves around the person, not the other way around. Their routine, their preferences, their pace.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    body: "When we say we'll be there, we mean it. Consistent caregivers, clear communication, and a team you can actually reach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/about-hero.jpg"
        badge="About Lovereign"
        title="Care that feels like family"
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <FadeIn>
            <p className="text-lg leading-relaxed text-ink-muted">
              At Lovereign Services, we believe everyone deserves compassionate, high-quality care
              that empowers them to live with dignity, independence, and confidence. Based in New
              Jersey, we provide trusted Home Health Aide (HHA) services and specialized support
              for individuals with Intellectual and Developmental Disabilities (IDD), helping
              clients thrive in the comfort of their homes and communities.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Our mission is to deliver person-centered care that enhances quality of life while
              promoting independence, inclusion, and overall well-being. We are committed to
              building meaningful relationships with our clients and their families through
              professionalism, respect, and unwavering compassion.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              What sets Lovereign Services apart is our people-first approach. We don&apos;t just
              provide care; we create personalized support experiences tailored to each
              individual&apos;s unique needs, goals, and abilities. By combining skilled
              professionals with genuine compassion, we help every client feel valued, supported,
              and empowered every step of the way.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-page.jpg"
                alt="A mother and daughter sharing a warm embrace at home"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
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
        <Container>
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Where we serve</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
              We serve families across all 21 counties in New Jersey. Wherever your loved one
              calls home, we can help. Reach out and we&apos;ll confirm availability and timing
              for your area.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-ink-muted sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {[
                "Atlantic","Bergen","Burlington","Camden","Cape May",
                "Cumberland","Essex","Gloucester","Hudson","Hunterdon",
                "Mercer","Middlesex","Monmouth","Morris","Ocean",
                "Passaic","Salem","Somerset","Sussex","Union","Warren",
              ].map((county) => (
                <li key={county} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                  {county}
                </li>
              ))}
            </ul>
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
              The people behind Lovereign are caregivers, coordinators, and community members who
              believe in this work personally. We&apos;re adding profiles here soon so you can meet
              the team before you ever pick up the phone.
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
