"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Briefcase, Clock, MapPin, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import type { Job } from "@/content/jobs";

const ALL = "all";

export function JobBoard({ jobs }: { jobs: Job[] }) {
  const [role, setRole] = useState(ALL);
  const [type, setType] = useState(ALL);
  const [county, setCounty] = useState(ALL);

  const roles = useMemo(() => Array.from(new Set(jobs.map((j) => j.title))), [jobs]);
  const types = useMemo(() => Array.from(new Set(jobs.map((j) => j.type))), [jobs]);
  const counties = useMemo(() => Array.from(new Set(jobs.map((j) => j.county))), [jobs]);

  const filtered = jobs.filter(
    (job) =>
      (role === ALL || job.title === role) &&
      (type === ALL || job.type === type) &&
      (county === ALL || job.county === county)
  );

  if (jobs.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-10 text-center">
        <Briefcase className="mx-auto h-8 w-8 text-brand-500" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-xl text-brand-900">No open roles posted right now</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] text-ink-muted">
          We add new openings regularly. Send us a general application below and we&apos;ll reach
          out as soon as a matching role opens up.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger><SelectValue placeholder="Role" /></SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All Roles</SelectItem>
            {roles.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All Types</SelectItem>
            {types.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={county} onValueChange={setCounty}>
          <SelectTrigger><SelectValue placeholder="County" /></SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All Counties</SelectItem>
            {counties.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map((job) => (
          <Card key={job.slug} className="group">
            <CardContent>
              <h3 className="font-serif text-xl text-brand-900">{job.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{job.summary}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{job.type}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{job.county}</span>
              </div>
              <Link
                href={`/careers/${job.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-700 group-hover:text-brand-800"
              >
                View &amp; Apply
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="text-ink-muted">No roles match those filters right now.</p>
        )}
      </div>
    </div>
  );
}
