import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="TODO: date pending compliance review">
      <p>
        These Terms of Use govern your access to and use of the {siteConfig.brand} website. This
        is placeholder content; the final terms must be reviewed and approved before launch.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">Use of this site</h2>
      <p>TODO: describe acceptable use, intellectual property, and disclaimers.</p>
      <h2 className="font-serif text-2xl text-brand-900">No medical advice</h2>
      <p>
        Content on this website, including articles and FAQ answers, is provided for general
        informational purposes only and does not constitute medical, clinical, or legal advice.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">Limitation of liability</h2>
      <p>TODO: standard limitation-of-liability language pending legal review.</p>
      <h2 className="font-serif text-2xl text-brand-900">Contact us</h2>
      <p>Questions about these terms can be sent to {siteConfig.email}.</p>
    </LegalLayout>
  );
}
