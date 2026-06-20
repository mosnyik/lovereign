import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { services, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <article>
      <PageHero
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.category}
        title={service.title}
        description={service.intro}
        className="max-w-3xl"
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-2xl text-brand-800">What this can include</h2>
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted">{service.closing}</p>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-14 rounded-2xl bg-brand-50 p-8 text-center sm:p-10">
            <h3 className="font-serif text-2xl text-brand-900">Ready to talk about {service.title.toLowerCase()}?</h3>
            <p className="mt-3 text-ink-muted">
              Schedule a free consultation and we&apos;ll help you find the right plan.
            </p>
            <div className="mt-7">
              <Button asChild size="lg">
                <Link href="/contact#family">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </article>
  );
}
