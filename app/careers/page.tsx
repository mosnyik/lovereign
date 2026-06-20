import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Clock4, GraduationCap, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
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
  { icon: HeartHandshake, title: "Meaningful work", body: "Make a real, daily difference in the lives of the people you care for." },
  { icon: Clock4, title: "Flexible scheduling", body: "Find shifts that fit your life — full-time, part-time, or per-diem." },
  { icon: GraduationCap, title: "Support to grow", body: "We invest in our caregivers with training and a clear path forward." },
  { icon: Users2, title: "A team that has your back", body: "Reliable coordination and a culture that treats caregivers like family." },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-24">
        <Image
          src="/images/careers.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-brand-700/65"
        />
        <Container className="relative max-w-2xl">
          <FadeIn>
            <Badge>Careers</Badge>
            <h1 className="mt-5 font-serif text-4xl text-white sm:text-5xl">
              Join a team that cares
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              We&apos;re always looking for compassionate, dependable caregivers who want to make
              a real difference in people&apos;s lives. If that sounds like you, we&apos;d love to
              meet you.
            </p>
          </FadeIn>
        </Container>
      </section>

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
