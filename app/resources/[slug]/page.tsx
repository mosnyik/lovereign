import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
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
    <article>
      <PageHero image="/images/community-support.jpg" badge="Resources" title={article.title} className="max-w-2xl" />
      <div className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <FadeIn>
            <ArticleBody />
          </FadeIn>
        </Container>
      </div>
    </article>
  );
}
