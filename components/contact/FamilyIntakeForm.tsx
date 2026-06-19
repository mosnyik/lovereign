"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitFamilyIntake, type FormState } from "@/app/contact/actions";

const initialState: FormState = { status: "idle" };

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
        "Send"
      )}
    </Button>
  );
}

export function FamilyIntakeForm() {
  const [state, formAction] = useActionState(submitFamilyIntake, initialState);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-6">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
        <p className="text-[15px] text-brand-900">{state.message}</p>
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
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
          {state.errors?.name && <p className="mt-1.5 text-sm text-red-600">{state.errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
          {state.errors?.phone && <p className="mt-1.5 text-sm text-red-600">{state.errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
          {state.errors?.email && <p className="mt-1.5 text-sm text-red-600">{state.errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="county">County</Label>
          <Input id="county" name="county" required />
          {state.errors?.county && <p className="mt-1.5 text-sm text-red-600">{state.errors.county}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="careRecipient">Who is the care for?</Label>
        <Select name="careRecipient">
          <SelectTrigger id="careRecipient"><SelectValue placeholder="Select one" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Parent">Parent</SelectItem>
            <SelectItem value="Spouse">Spouse</SelectItem>
            <SelectItem value="Self">Self</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="careType">What type of care?</Label>
        <Select name="careType">
          <SelectTrigger id="careType"><SelectValue placeholder="Select one" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Personal care">Personal care</SelectItem>
            <SelectItem value="Companion care">Companion care</SelectItem>
            <SelectItem value="Respite care">Respite care</SelectItem>
            <SelectItem value="24-hour / live-in care">24-hour / live-in care</SelectItem>
            <SelectItem value="Behavioral support">Behavioral support</SelectItem>
            <SelectItem value="Not sure">Not sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="timing">When do you need care?</Label>
        <Select name="timing">
          <SelectTrigger id="timing"><SelectValue placeholder="Select one" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Right away">Right away</SelectItem>
            <SelectItem value="Within a week">Within a week</SelectItem>
            <SelectItem value="Within a month">Within a month</SelectItem>
            <SelectItem value="Just exploring">Just exploring</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us a bit about your situation." />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" name="consent" required />
        <Label htmlFor="consent" className="m-0 text-[14px] font-normal text-ink-muted">
          I consent to be contacted by Lovereign Care Services about this inquiry.
        </Label>
      </div>
      {state.errors?.consent && <p className="text-sm text-red-600">{state.errors.consent}</p>}

      <SubmitButton />
    </form>
  );
}
