import type { Metadata } from "next";
import { HeartHandshake, Clock4, GraduationCap, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
import { JobBoard } from "@/components/careers/JobBoard";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { jobs } from "@/content/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Lovereign Care Services team. We're hiring compassionate, dependable caregivers across every county.",
};

const reasons = [
  { icon: HeartHandshake, title: "Work that matters", body: "You'll go home knowing you made someone's day better. Not every job can say that." },
  { icon: Clock4, title: "Flexible scheduling", body: "Life doesn't fit neatly into one schedule. We offer full-time, part-time, and per-diem options." },
  { icon: GraduationCap, title: "Room to grow", body: "We invest in your training and give you a clear path forward, because when you grow, the people you care for benefit too." },
  { icon: Users2, title: "A team that has your back", body: "You won't be left to figure things out alone. We communicate, coordinate, and treat our staff with the same care we ask them to show our clients." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        image="/images/careers.jpg"
        badge="Careers"
        title="Join a team that cares"
        description="We're not just looking for the right credentials. We're looking for people who genuinely care, show up for others, and want their work to mean something. If that's you, let's talk."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Why work at Lovereign</h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-brand-100 bg-white p-6">
                  <reason.icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-lg text-brand-900">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Open Roles</h2>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-8">
            <JobBoard jobs={jobs} />
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">General Application</h2>
            <p className="mt-3 text-ink-muted">
              Don&apos;t see the right fit yet? Send us your information and we&apos;ll reach out
              when a matching role opens up.
            </p>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-8">
            <ApplicationForm jobTitle="General Application" />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
