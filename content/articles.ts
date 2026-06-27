export interface Article {
  slug: string;
  title: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    slug: "signs-its-time-for-home-care",
    title: "Signs It Might Be Time to Consider Home Care",
    excerpt:
      "Wondering whether it's time to bring in extra support for a parent or loved one? Here are common signs families notice first.",
  },
  {
    slug: "preparing-for-a-care-consultation",
    title: "How to Prepare for Your Free Care Consultation",
    excerpt:
      "A few things worth thinking through before your first call with a care provider, so you actually get the most out of it.",
  },
  {
    slug: "supporting-a-family-caregiver",
    title: "How to Support a Family Caregiver in Your Life",
    excerpt:
      "Caregiving is rewarding but exhausting. Here's how friends and family can offer meaningful support to someone caring for a loved one.",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
