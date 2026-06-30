import type { Metadata } from "next";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { FamilyIntakeForm } from "@/components/contact/FamilyIntakeForm";
// import { ReferralForm } from "@/components/contact/ReferralForm";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  // title: "Contact / Referral",
  description:
    "Reach out for family care intake.",
  // description:
  //   "Reach out for family care intake or submit a professional referral to Lovereign Care Services.",
};

const expectations = [
  "We'll actually listen to what's going on with your loved one",
  "We'll explain how we work and answer every question you have",
  "We'll put together a plan that fits your family's situation",
  "You'll hear back quickly, and there's never any pressure",
];

export default function ContactPage() {
  // const referralConfigured = Boolean(siteConfig.referralEndpoint);

  return (
    <>
      <PageHero
        image="/images/contact-hero.jpg"
        imageAlt="A caregiver talking with a client at home"
        badge="Contact Us"
        // badge="Contact & Referrals"
        title="Let's talk about the care your family needs"
        description="Whether you're just starting to look into care options or you know exactly what you need, we're glad you're here. Send us a message and someone will get back to you, usually the same day."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-16">
            <div id="family" className="scroll-mt-24">
              <FadeIn>
                <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Family Intake</h2>
                <p className="mt-2 text-ink-muted">Fill this out and we&apos;ll reach out to schedule a free, no-pressure conversation.</p>
              </FadeIn>
              <FadeIn delay={0.06} className="mt-7">
                <FamilyIntakeForm />
              </FadeIn>
            </div>

            {/* REFERRAL SECTION — commented out, restore by uncommenting
            <div id="referral" className="scroll-mt-24 border-t border-brand-100 pt-14">
              <FadeIn>
                <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Professional Referral</h2>
                <p className="mt-2 text-ink-muted">
                  For case managers and care professionals. All referral information goes through a
                  secure channel, not email, so client details stay protected.
                </p>
              </FadeIn>
              <FadeIn delay={0.06} className="mt-7">
                <ReferralForm isConfigured={referralConfigured} />
              </FadeIn>
            </div>
            */}
          </div>

          <div className="space-y-8">
            <FadeIn className="rounded-2xl border border-brand-100 bg-white p-7">
              <h3 className="font-serif text-xl text-brand-900">What to expect when you reach out</h3>
              <ul className="mt-5 space-y-3.5">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.06} className="rounded-2xl border border-brand-100 bg-white p-7">
              <h3 className="font-serif text-xl text-brand-900">Get in touch</h3>
              <ul className="mt-5 space-y-3.5 text-[15px]">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <a href={siteConfig.phoneHref} className="text-ink-muted hover:text-brand-700">{siteConfig.phone}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.email}`} className="break-all text-ink-muted hover:text-brand-700">{siteConfig.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <span className="text-ink-muted">{siteConfig.address}</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink-muted">{siteConfig.serviceArea}</p>
              <div className="mt-5 flex gap-3">
                {[
                  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
                  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
                  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href || "#"}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 text-brand-700 hover:bg-brand-50"
                  >
                    <link.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="overflow-hidden rounded-2xl border border-brand-100">
              <iframe
                title="Lovereign Care Services location"
                src="https://www.google.com/maps?q=30+Union+Street,+Suite+37,+Elizabeth,+NJ+07202&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
