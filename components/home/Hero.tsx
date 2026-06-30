import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

const expectations = [
  "We'll actually listen to what's going on with your loved one",
  "We'll walk you through how we work and answer every question, no matter how small",
  "We'll sketch out a care plan that fits your loved one's life and routine",
  "You'll leave with a clear picture of what comes next. No pressure, no obligation.",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
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

      <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm">
            Home Care &amp; Behavioral Support
          </span>
          <h1 className="mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
            Trusted home care for the people{" "}
            <span className="italic text-lavender-200">who matter most to you.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            When someone you love needs extra help, you want to know the person walking through
            their door actually cares. At Lovereign, our caregivers build real relationships,
            show up on time, and treat your family the way they&apos;d want their own to be
            treated.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={siteConfig.ctas.findCare.href}>{siteConfig.ctas.findCare.label}</Link>
            </Button>
            {/* REFERRAL CTA — commented out, restore by uncommenting
            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.ctas.refer.href}>{siteConfig.ctas.refer.label}</Link>
            </Button>
            */}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl border border-brand-100 bg-white/90 p-7 shadow-xl shadow-brand-900/5 backdrop-blur-sm sm:p-9">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt={`${siteConfig.brand} logo`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="font-serif text-xl text-brand-900">
                What to expect from your free consultation
              </p>
            </div>
            <ul className="mt-6 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
