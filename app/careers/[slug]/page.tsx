
import { notFound } from "next/navigation";
import { Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { jobs, getJobBySlug } from "@/content/jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata(props: PageProps<"/careers/[slug]">) {
  const { slug } = await props.params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return { title: job.title, description: job.summary };
}

export default async function JobDetailPage(props: PageProps<"/careers/[slug]">) {
  const { slug } = await props.params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <article>
      <PageHero image="/images/careers.jpg" badge={job.type} title={job.title} className="max-w-3xl" />

      <Container className="max-w-3xl py-16 sm:py-24">
        <FadeIn>
          <div className="flex gap-5 text-sm text-ink-muted">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{job.type}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{job.county}</span>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{job.description}</p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h2 className="mt-10 font-serif text-2xl text-brand-800">Responsibilities</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] text-ink-muted">
            {job.responsibilities.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-brand-800">Qualifications</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] text-ink-muted">
            {job.qualifications.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 rounded-2xl border border-brand-100 bg-white p-8 sm:p-10">
          <h2 className="font-serif text-2xl text-brand-900">Apply for this role</h2>
          <div className="mt-7">
            <ApplicationForm jobTitle={job.title} />
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}
