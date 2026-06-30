"use server";

import { z } from "zod";
import { getResendClient } from "@/lib/resend";
import { siteConfig } from "@/lib/siteConfig";

const familyIntakeSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  county: z.string().min(1, "Please enter a county."),
  careRecipient: z.string().min(1, "Please select an option."),
  careType: z.string().min(1, "Please select an option."),
  timing: z.string().min(1, "Please select an option."),
  message: z.string().optional(),
  consent: z.literal("on", { message: "Please confirm consent to be contacted." }),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string | undefined>;
};

export async function submitFamilyIntake(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = familyIntakeSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Please correct the errors below and try again.",
      errors: Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])
      ),
    };
  }

  const resend = getResendClient();
  if (!resend) {
    return {
      status: "error",
      message:
        "We can't submit this form right now — email isn't configured. Please call us directly.",
    };
  }

  const { name, phone, email, county, careRecipient, careType, timing, message } = parsed.data;

  try {
    await resend.emails.send({
      from: `${siteConfig.brand} Website <intake@${process.env.RESEND_SEND_DOMAIN ?? "resend.dev"}>`,
      to: process.env.CONTACT_EMAIL ?? siteConfig.email,
      replyTo: email,
      subject: `New Family Intake: ${name} (${county})`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `County: ${county}`,
        `Care for: ${careRecipient}`,
        `Type of care: ${careType}`,
        `Timing: ${timing}`,
        "",
        "Message:",
        message || "(none provided)",
      ].join("\n"),
    });
  } catch {
    return { status: "error", message: "Something went wrong sending your message. Please try again." };
  }

  return { status: "success", message: "Thank you — we've received your message and will be in touch promptly." };
}

/* REFERRAL SCHEMA & ACTION — commented out, restore by uncommenting
const referralSchema = z.object({
  referrerName: z.string().min(2, "Please enter your name."),
  organization: z.string().min(1, "Please enter your organization."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  county: z.string().min(1, "Please enter a county."),
  careNeeds: z.string().min(1, "Please describe the care needs."),
});

export async function submitReferral(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const endpoint = process.env.REFERRAL_ENDPOINT_URL;
  if (!endpoint) {
    return {
      status: "error",
      message:
        "Secure referral submission isn't configured yet. Please call us directly so we can assist without sending information by email.",
    };
  }

  const parsed = referralSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Please correct the errors below and try again.",
      errors: Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])
      ),
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!response.ok) throw new Error("Referral endpoint error");
  } catch {
    return { status: "error", message: "Something went wrong submitting the referral. Please try again." };
  }

  return { status: "success", message: "Thank you — the referral has been securely submitted. We'll follow up promptly." };
}
*/
