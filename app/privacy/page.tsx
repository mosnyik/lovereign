import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 27, 2026">
      <p>
        {siteConfig.brand} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
        protecting the privacy of visitors to our website and individuals who contact us for
        services. This Privacy Policy explains what information we collect, how we use it, and
        your choices regarding that information.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Information we collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>
          <strong>Contact and inquiry forms.</strong> When you submit a family intake inquiry,
          professional referral, or general contact request, we collect the name, phone number,
          email address, county, and any details you choose to share about care needs.
        </li>
        <li>
          <strong>Job applications.</strong> When you apply for a position through our Careers
          page, we collect your name, contact information, and any materials you submit such as
          a cover letter or resume.
        </li>
        <li>
          <strong>Live chat.</strong> If you use the live chat widget on our site, the chat
          platform may collect the content of your messages and basic technical information such
          as your IP address and browser type.
        </li>
        <li>
          <strong>Automatically collected data.</strong> Like most websites, our hosting
          platform may collect standard log data including your IP address, browser type,
          referring page, and pages visited, for security and analytics purposes.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-brand-900">How we use information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to inquiries and connect families with appropriate care options</li>
        <li>Process and follow up on professional referrals</li>
        <li>Review and respond to job applications</li>
        <li>Communicate service updates or relevant information to people who have requested it</li>
        <li>Maintain the security and performance of this website</li>
      </ul>
      <p>
        We do not sell, rent, or share your personal information with third parties for their
        own marketing purposes.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Protected health information</h2>
      <p>
        General contact forms and live chat on this site are not intended for the transmission
        of protected health information (PHI). Professional referrals that include clinical
        details about a client are routed through a secure, BAA-backed channel. Please see our{" "}
        <a href="/hipaa-notice" className="text-brand-700 underline underline-offset-2">
          HIPAA Notice of Privacy Practices
        </a>{" "}
        for information about how we handle health information in the context of care services.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Data retention</h2>
      <p>
        We retain inquiry and application information only as long as necessary to respond to
        your request or fulfill the purpose for which it was collected, or as required by
        applicable law.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Third-party services</h2>
      <p>
        Our website uses third-party services including a live chat platform and an email
        delivery service to handle form submissions. These providers process data on our behalf
        and are subject to their own privacy policies. We do not authorize them to use your
        information for purposes beyond fulfilling our service requests.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of personal information we hold
        about you by contacting us at the address below. We will respond to reasonable requests
        in accordance with applicable law.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Contact us</h2>
      <p>
        Questions about this policy or requests related to your personal information can be
        directed to {siteConfig.brand} at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline underline-offset-2">
          {siteConfig.email}
        </a>{" "}
        or {siteConfig.phone}.
      </p>
    </LegalLayout>
  );
}
