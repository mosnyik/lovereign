import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "HIPAA Notice / Privacy Practices" };

export default function HipaaNoticePage() {
  return (
    <LegalLayout title="HIPAA Notice of Privacy Practices" updated="June 27, 2026">
      <p>
        {siteConfig.brand} is committed to protecting the privacy of your health information.
        This Notice of Privacy Practices describes how we may use and disclose your protected
        health information (PHI) in connection with the home health and behavioral support
        services we provide, and explains your rights regarding that information.
      </p>
      <p>
        <strong>Please review this notice carefully.</strong> We are required by the Health
        Insurance Portability and Accountability Act of 1996 (HIPAA) and the HITECH Act to
        maintain the privacy of your PHI and to provide you with this notice of our legal
        duties and privacy practices.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">How we use and disclose your health information</h2>
      <p>We may use and disclose your PHI for the following purposes without requiring your separate written authorization:</p>
      <ul>
        <li>
          <strong>Treatment.</strong> To coordinate and provide care, share information with
          physicians, nurses, therapists, behavior analysts, and other members of your care
          team.
        </li>
        <li>
          <strong>Payment.</strong> To submit claims, obtain authorizations, and receive
          reimbursement from insurance carriers, Medicaid, or other payers on your behalf.
        </li>
        <li>
          <strong>Health care operations.</strong> For internal quality review, staff training,
          compliance, and other activities necessary to operate our agency.
        </li>
        <li>
          <strong>As required by law.</strong> To comply with applicable federal, state, or
          local laws, including reporting obligations and responses to lawful government
          requests.
        </li>
        <li>
          <strong>Public health activities.</strong> As required to report communicable
          diseases, abuse, neglect, or other matters to authorized public health authorities.
        </li>
      </ul>
      <p>
        All other uses or disclosures of your PHI — including for marketing, sale of PHI, or
        most research purposes — require your prior written authorization. You may revoke that
        authorization in writing at any time, except where we have already acted in reliance on
        it.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">How this website handles health information</h2>
      <p>
        General contact forms and the live chat widget on this website are not intended for the
        submission of protected health information. Professional referrals that include clinical
        client details are routed through a secure, Business Associate Agreement (BAA)–backed
        channel rather than standard email, to maintain HIPAA compliance.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Your rights</h2>
      <p>You have the following rights regarding your protected health information:</p>
      <ul>
        <li>
          <strong>Right to access.</strong> You may request a copy of your health information
          that we maintain in a designated record set. We will provide access or a copy within
          30 days of your written request.
        </li>
        <li>
          <strong>Right to amend.</strong> If you believe your health information is inaccurate
          or incomplete, you may request that we amend it. We may deny the request under
          certain circumstances and will explain any denial in writing.
        </li>
        <li>
          <strong>Right to an accounting of disclosures.</strong> You may request a list of
          instances in which we have disclosed your PHI for purposes other than treatment,
          payment, or health care operations during the prior six years.
        </li>
        <li>
          <strong>Right to request restrictions.</strong> You may request that we restrict
          certain uses or disclosures of your PHI. We are not required to agree to all
          requests, but we will accommodate reasonable requests where feasible.
        </li>
        <li>
          <strong>Right to confidential communications.</strong> You may request that we
          communicate with you about your health matters in a specific way or at a specific
          location.
        </li>
        <li>
          <strong>Right to a paper copy of this notice.</strong> You may request a printed
          copy of this notice at any time, even if you have received it electronically.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-brand-900">How to file a complaint</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a complaint with us
        directly or with the U.S. Department of Health and Human Services Office for Civil
        Rights. We will not retaliate against you for filing a complaint.
      </p>
      <p>
        To file a complaint with {siteConfig.brand}, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline underline-offset-2">
          {siteConfig.email}
        </a>{" "}
        or call {siteConfig.phone}.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Changes to this notice</h2>
      <p>
        We reserve the right to change this Notice of Privacy Practices and to apply the
        revised notice to PHI we already hold. If we make a material change, we will post the
        updated notice on this website. The &quot;last updated&quot; date at the top of this
        page reflects the most recent revision.
      </p>

      <h2 className="font-serif text-2xl text-brand-900">Contact us</h2>
      <p>
        For questions about this notice or to exercise your rights, contact{" "}
        {siteConfig.brand} at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline underline-offset-2">
          {siteConfig.email}
        </a>{" "}
        or {siteConfig.phone}.
      </p>
    </LegalLayout>
  );
}
