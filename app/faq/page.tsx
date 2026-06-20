import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
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
      <PageHero
        image="/images/behavioral-support.jpg"
        badge="FAQs"
        title="Answers, before you even ask"
        description="Common questions from families and case managers about how care works, getting started, and referrals."
      />

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
