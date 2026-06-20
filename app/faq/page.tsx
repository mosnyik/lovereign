import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about home care, behavioral support, getting started, costs, and referrals.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-cream py-16 sm:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Badge>FAQs</Badge>
            <h1 className="mt-5 font-serif text-4xl text-brand-900 sm:text-5xl">
              Answers, before you even ask
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Common questions from families and case managers about how care works, getting
              started, and referrals.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
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
    </>
  );
}
