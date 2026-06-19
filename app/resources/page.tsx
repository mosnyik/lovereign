import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/content/faqs";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Resources / FAQ",
  description:
    "Answers to common questions about home care, behavioral support, getting started, and referrals — plus articles on caregiving and aging at home.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-cream py-16 sm:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Badge>Resources &amp; FAQ</Badge>
            <h1 className="mt-5 font-serif text-4xl text-brand-900 sm:text-5xl">
              Answers, before you even ask
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Common questions from families and case managers, plus a few articles on caregiving
              and aging at home.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Frequently Asked Questions</h2>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16 sm:py-20">
        <Container>
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Articles</h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.06}>
                <Card className="group h-full">
                  <CardContent className="flex h-full flex-col">
                    <h3 className="font-serif text-lg text-brand-900">{article.title}</h3>
                    <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-muted">{article.excerpt}</p>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-700 group-hover:text-brand-800"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
