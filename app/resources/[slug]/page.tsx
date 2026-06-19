import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { articles, getArticleBySlug } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { default: ArticleBody } = await import(`@/content/articles/${slug}.mdx`);

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <FadeIn>
          <Badge>Resources</Badge>
          <h1 className="mt-5 font-serif text-4xl text-brand-900 sm:text-5xl">{article.title}</h1>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-8">
          <ArticleBody />
        </FadeIn>
      </Container>
    </article>
  );
}
