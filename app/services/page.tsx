import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <section className="bg-gradient-to-b from-brand-50 to-cream py-16 sm:py-20">
        <Container>
          <FadeIn className="max-w-2xl">
            <Badge>Our Services</Badge>
            <h1 className="mt-5 font-serif text-4xl text-brand-900 sm:text-5xl">
              Support that meets every need
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              From everyday help at home to specialized behavioral support, every Lovereign care
              plan is built around the person receiving it — never a one-size-fits-all template.
            </p>
          </FadeIn>
        </Container>
      </section>

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
                      <Card className="group h-full transition-shadow hover:shadow-lg hover:shadow-brand-900/5">
                        <CardContent className="flex h-full flex-col">
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
              Tell us about your situation and we&apos;ll help you find the right kind of support.
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
