import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  image: string;
  imageAlt?: string;
  badge: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ image, imageAlt = "", badge, title, description, className }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-brand-700/65"
      />
      <Container className={cn("relative max-w-2xl", className)}>
        <FadeIn>
          <Badge>{badge}</Badge>
          <h1 className="mt-5 font-serif text-4xl text-white sm:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-white/80">{description}</p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
