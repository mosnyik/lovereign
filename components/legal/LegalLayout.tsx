import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/FadeIn";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <FadeIn>
          <Badge>Legal</Badge>
          <h1 className="mt-5 font-serif text-4xl text-brand-900 sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-muted">Last updated: {updated}</p>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            This page is a placeholder pending review by a qualified compliance professional. Do
            not rely on this content as legal advice.
          </div>
        </FadeIn>
        <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-ink-muted">{children}</div>
      </Container>
    </article>
  );
}
