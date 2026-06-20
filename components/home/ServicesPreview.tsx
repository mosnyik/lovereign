import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { services, type ServiceCategory } from "@/content/services";

const categories: ServiceCategory[] = ["Home Care", "Behavioral Support"];

export function ServicesPreview() {
  return (
    <section className="bg-brand-50/60 py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Badge>Our Services</Badge>
          <h2 className="mt-5 font-serif text-3xl text-brand-900 sm:text-4xl">
            Support that meets every need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            From everyday help at home to specialized behavioral support — every plan is built
            around the person receiving care.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-14">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-serif text-2xl text-brand-800">{category}</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                          <h4 className="font-serif text-xl text-brand-900">{service.title}</h4>
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
        </div>
      </Container>
    </section>
  );
}
