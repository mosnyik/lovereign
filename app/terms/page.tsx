import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="June 27, 2026">
      <p>
        Welcome to the {siteConfig.brand} website. By accessing or using this site, you agree
        to be bound by these Terms of Use. If you do not agree, please do not use this site.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Use of this site</h2>
      <p>
        This website is provided for informational purposes — to help families, professionals,
        and prospective employees learn about our services and contact us. You agree to use
        this site only for lawful purposes and in a manner that does not infringe the rights of
        others or restrict their use of the site.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Use the site to transmit any unlawful, harmful, or offensive content</li>
        <li>Attempt to gain unauthorized access to any part of the site or its infrastructure</li>
        <li>
          Scrape, copy, or reproduce content from this site for commercial purposes without
          our prior written consent
        </li>
        <li>
          Misrepresent your identity or affiliation when submitting inquiries, referrals, or
          applications
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-brand-900">Intellectual property</h2>
      <p>
        All content on this site — including text, images, logos, and design — is the property
        of {siteConfig.brand} or its licensors and is protected by applicable copyright and
        intellectual property laws. You may view and print pages for personal, non-commercial
        use only. No content may be reproduced, distributed, or modified without our express
        written permission.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">No medical advice</h2>
      <p>
        Content on this website, including articles, FAQ answers, and service descriptions, is
        provided for general informational purposes only. It does not constitute medical,
        clinical, nursing, or legal advice and should not be relied upon as such. Always
        consult a qualified healthcare professional regarding medical decisions or care needs.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Third-party links</h2>
      <p>
        This site may contain links to third-party websites for your convenience. We do not
        control those sites and are not responsible for their content, privacy practices, or
        accuracy. A link does not constitute an endorsement.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Disclaimer of warranties</h2>
      <p>
        This website is provided &quot;as is&quot; and &quot;as available&quot; without
        warranties of any kind, express or implied, including but not limited to warranties of
        merchantability, fitness for a particular purpose, or non-infringement. We do not
        warrant that the site will be uninterrupted, error-free, or free of viruses or other
        harmful components.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by applicable law, {siteConfig.brand} and its owners,
        employees, and agents shall not be liable for any indirect, incidental, special, or
        consequential damages arising from your use of — or inability to use — this website or
        its content, even if we have been advised of the possibility of such damages. Our total
        liability to you for any claim arising from your use of this site shall not exceed one
        hundred dollars ($100).
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Changes to these terms</h2>
      <p>
        We may update these Terms of Use from time to time. The &quot;last updated&quot; date
        at the top of this page indicates when the most recent revision was made. Continued use
        of the site after changes are posted constitutes your acceptance of the revised terms.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Governing law</h2>
      <p>
        These Terms of Use are governed by the laws of the State of New Jersey, without regard
        to its conflict-of-law principles. Any disputes arising under these terms shall be
        subject to the exclusive jurisdiction of the courts located in Union County, New Jersey.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Contact us</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline underline-offset-2">
          {siteConfig.email}
        </a>{" "}
        or {siteConfig.phone}.
      </p>
    </LegalLayout>
  );
}
