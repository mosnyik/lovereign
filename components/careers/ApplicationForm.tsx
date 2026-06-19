"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitApplication, type ApplicationState } from "@/app/careers/actions";

const initialState: ApplicationState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Sending...
        </>
      ) : (
        "Submit Application"
      )}
    </Button>
  );
}

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [state, formAction] = useActionState(submitApplication, initialState);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-6">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
        <p className="text-[15px] text-brand-900">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" encType="multipart/form-data">
      <input type="hidden" name="jobTitle" value={jobTitle} />

      {state.status === "error" && state.message && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
          <p className="text-[15px] text-red-800">{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" required autoComplete="name" />
          {state.errors?.fullName && (
            <p className="mt-1.5 text-sm text-red-600">{state.errors.fullName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
          {state.errors?.phone && (
            <p className="mt-1.5 text-sm text-red-600">{state.errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
        {state.errors?.email && (
          <p className="mt-1.5 text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea id="coverLetter" name="coverLetter" placeholder="Tell us a bit about yourself and why you'd be a great fit." />
      </div>

      <div>
        <Label htmlFor="resume">Résumé (.pdf, .doc, .docx)</Label>
        <div className="flex items-center gap-3 rounded-xl border border-dashed border-brand-300 bg-brand-50/50 px-4 py-3.5">
          <Upload className="h-5 w-5 text-brand-600" aria-hidden="true" />
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx"
            className="w-full text-[15px] text-ink-muted file:mr-3 file:rounded-full file:border-0 file:bg-brand-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}
