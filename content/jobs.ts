export interface Job {
  slug: string;
  title: string;
  type: "Full-Time" | "Part-Time" | "Per-Diem";
  county: string;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

// TODO: replace with the agency's actual open roles + descriptions
// (e.g. Caregiver/HHA, CNA, Behavioral Support Aide). Left empty so the
// careers page renders an honest empty state instead of fabricated listings.
export const jobs: Job[] = [];

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
