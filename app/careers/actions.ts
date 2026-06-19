"use server";

import { z } from "zod";
import { getResendClient } from "@/lib/resend";
import { siteConfig } from "@/lib/siteConfig";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  jobTitle: z.string().min(1),
  coverLetter: z.string().optional(),
});

export type ApplicationState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof applicationSchema>, string>>;
};

const ACCEPTED_RESUME_TYPES = [".pdf", ".doc", ".docx"];

export async function submitApplication(
  _prevState: ApplicationState,
  formData: FormData
): Promise<ApplicationState> {
  const parsed = applicationSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    jobTitle: formData.get("jobTitle"),
    coverLetter: formData.get("coverLetter") ?? undefined,
  });

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

  const resume = formData.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return {
      status: "error",
      message: "Please attach your résumé (.pdf, .doc, or .docx).",
    };
  }
  const hasValidExtension = ACCEPTED_RESUME_TYPES.some((ext) =>
    resume.name.toLowerCase().endsWith(ext)
  );
  if (!hasValidExtension) {
    return {
      status: "error",
      message: "Résumé must be a .pdf, .doc, or .docx file.",
    };
  }

  const resend = getResendClient();
  if (!resend) {
    return {
      status: "error",
      message:
        "Applications can't be submitted right now — email isn't configured. Please try again later or call us directly.",
    };
  }

  const { fullName, email, phone, jobTitle, coverLetter } = parsed.data;
  const resumeBuffer = Buffer.from(await resume.arrayBuffer());

  try {
    await resend.emails.send({
      from: `${siteConfig.brand} Careers <careers@${process.env.RESEND_SEND_DOMAIN ?? "resend.dev"}>`,
      to: siteConfig.careersEmail,
      replyTo: email,
      subject: `New Application: ${jobTitle} — ${fullName}`,
      text: [
        `Position: ${jobTitle}`,
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Cover Letter:",
        coverLetter || "(none provided)",
      ].join("\n"),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your application. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Your application has been sent. We'll be in touch soon!",
  };
}
