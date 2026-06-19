import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="TODO: date pending compliance review">
      <p>
        {siteConfig.brand} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
        privacy. This placeholder policy outlines, at a high level, the kinds of information we
        collect through this website and how it is generally used. The final policy must be
        reviewed and approved by a qualified compliance professional before launch.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">Information we collect</h2>
      <p>
        TODO: describe categories of information collected through contact forms, the referral
        process, job applications, and the Tawk.to chat widget.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">How we use information</h2>
      <p>TODO: describe use of information for responding to inquiries, coordinating care, and recruiting.</p>
      <h2 className="font-serif text-2xl text-brand-900">Protected health information</h2>
      <p>
        Information that may constitute protected health information (PHI) is handled separately
        from general website communications and is not collected through this site&apos;s live
        chat. See our HIPAA Notice for more detail.
      </p>
      <h2 className="font-serif text-2xl text-brand-900">Contact us</h2>
      <p>Questions about this policy can be sent to {siteConfig.email}.</p>
    </LegalLayout>
  );
}
