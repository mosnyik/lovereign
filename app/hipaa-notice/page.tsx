import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "HIPAA Notice / Privacy Practices" };

export default function HipaaNoticePage() {
  return (
    <LegalLayout title="HIPAA Notice of Privacy Practices" updated="TODO: date pending compliance review">
      <p>
        {siteConfig.brand} may be considered a covered entity or business associate under the
        Health Insurance Portability and Accountability Act (HIPAA) depending on the services
        provided. This placeholder notice must be replaced with a complete Notice of Privacy
        Practices, reviewed by a qualified compliance professional, before launch.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">How this website handles health information</h2>
      <p>
        This website&apos;s live chat widget and general contact forms are not used to collect
        protected health information (PHI). Professional referrals containing client care details
        are routed through a secure, BAA-backed channel rather than email.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">Your rights</h2>
      <p>TODO: describe rights to access, amend, and request restrictions on PHI, and how to file a complaint.</p>
      <h2 className="font-serif text-2xl text-brand-900">Contact us</h2>
      <p>Questions about this notice can be sent to {siteConfig.email}.</p>
    </LegalLayout>
  );
}
