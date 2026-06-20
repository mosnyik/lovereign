import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/content/faqs";

const featured = faqs.slice(0, 3);

export function ResourcesPreview() {
  return (
    <section className="bg-brand-50/60 py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">Answers, before you even ask</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            A few of the questions families and case managers ask us most.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {featured.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-brand-100 bg-white p-7">
                <h3 className="font-serif text-lg text-brand-900">{faq.question}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="secondary" size="lg">
            <Link href="/faq">View All FAQs</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/resources">Browse Articles &amp; Resources</Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
