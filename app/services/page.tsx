import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { services, type ServiceCategory } from "@/content/services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal care, companion care, respite, 24-hour care, transitional care, and behavioral support — explore Lovereign Care Services' full range of home care services.",
};

const categories: ServiceCategory[] = ["Home Care", "Behavioral Support"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/services-hero.jpg"
        badge="Our Services"
        title="Support that meets every need"
        description="No two people need exactly the same kind of care. Every plan we build starts with getting to know the person: their routine, their preferences, and what makes them feel most at home."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-serif text-2xl text-brand-800 sm:text-3xl">{category}</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.category === category)
                  .map((service, i) => (
                    <FadeIn key={service.slug} delay={i * 0.05}>
                      <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg hover:shadow-brand-900/5">
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex flex-1 flex-col">
                          <h3 className="font-serif text-xl text-brand-900">{service.title}</h3>
                          <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-muted">
                            {service.short}
                          </p>
                          <Link
                            href={`/services/${service.slug}`}
                            className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-700 transition-colors group-hover:text-brand-800"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-brand-800 py-16 sm:py-20">
        <Container className="text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Not sure where to start?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
              Most families aren&apos;t sure what kind of care they need at first. That&apos;s okay. Tell us what&apos;s going on and we&apos;ll figure it out together.
            </p>
            <div className="mt-8">
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
