import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/FadeIn";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles on home care, caregiving, and aging at home from Lovereign Care Services.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        image="/images/community-support.jpg"
        badge="Resources"
        title="Articles & guidance for families"
        description="Practical reading on caregiving, aging at home, and getting started with care — written for the people making these decisions, not for clinicians."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
