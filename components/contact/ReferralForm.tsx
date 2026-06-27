"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2, ShieldAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitReferral, type FormState } from "@/app/contact/actions";

const initialState: FormState = { status: "idle" };

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={disabled || pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Submitting...
        </>
      ) : (
        "Submit Referral Securely"
      )}
    </Button>
  );
}

export function ReferralForm({ isConfigured }: { isConfigured: boolean }) {
  const [state, formAction] = useActionState(submitReferral, initialState);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-6">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
        <p className="text-[15px] text-brand-900">{state.message}</p>
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <div>
          <p className="text-[15px] font-semibold text-amber-900">Secure submission isn&apos;t configured yet</p>
          <p className="mt-1.5 text-[14px] text-amber-800">
            Client information must be sent through a secure, BAA-backed channel — not email. Please call{" "}
            <a className="font-semibold underline" href="tel:+19084002323">us directly</a> so we can help without putting protected health information at risk.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.status === "error" && state.message && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
          <p className="text-[15px] text-red-800">{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="referrerName">Referrer Name</Label>
          <Input id="referrerName" name="referrerName" required autoComplete="name" />
          {state.errors?.referrerName && <p className="mt-1.5 text-sm text-red-600">{state.errors.referrerName}</p>}
        </div>
        <div>
          <Label htmlFor="organization">Organization</Label>
          <Input id="organization" name="organization" required />
          {state.errors?.organization && <p className="mt-1.5 text-sm text-red-600">{state.errors.organization}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="referralEmail">Email</Label>
          <Input id="referralEmail" name="email" type="email" required autoComplete="email" />
          {state.errors?.email && <p className="mt-1.5 text-sm text-red-600">{state.errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="referralPhone">Phone</Label>
          <Input id="referralPhone" name="phone" type="tel" required autoComplete="tel" />
          {state.errors?.phone && <p className="mt-1.5 text-sm text-red-600">{state.errors.phone}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="referralCounty">Client County</Label>
        <Input id="referralCounty" name="county" required />
        {state.errors?.county && <p className="mt-1.5 text-sm text-red-600">{state.errors.county}</p>}
      </div>

      <div>
        <Label htmlFor="careNeeds">Client Details &amp; Care Needs</Label>
        <Textarea
          id="careNeeds"
          name="careNeeds"
          required
          placeholder="Include client initials, care type needed, urgency, any relevant diagnoses or behavioral considerations, and preferred start date."
        />
        {state.errors?.careNeeds && <p className="mt-1.5 text-sm text-red-600">{state.errors.careNeeds}</p>}
      </div>

      <SubmitButton disabled={!isConfigured} />
    </form>
  );
}
