export const siteConfig = {
  brand: "Lovereign Care Services",
  tagline: "Care that feels like family",
  contactName: "Bunmi Adelusi",
  email: "lovereigncareservices@gmail.com", // TODO: move to branded info@lovereigncareservices.com
  careersEmail: process.env.CAREERS_EMAIL ?? "lovereigncareservices@gmail.com", // TODO: confirm careers inbox
  phone: "08063862295", // TODO: confirm final business phone number
  phoneHref: "tel:08063862295",
  address: "TODO: business address",
  serviceArea: "All counties across TODO: STATE",
  social: {
    facebook: "TODO", // TODO: facebook URL
    instagram: "TODO", // TODO: instagram URL
    linkedin: "TODO", // TODO: linkedin URL
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lovereigncareservices.com", // TODO: confirm production domain
  referralEndpoint: process.env.REFERRAL_ENDPOINT_URL,
  tawkSrc: process.env.NEXT_PUBLIC_TAWK_SRC,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "FAQs", href: "/faq" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  ctas: {
    findCare: { label: "Find Care for a Loved One", href: "/contact#family" },
    refer: { label: "Refer a Client", href: "/contact#referral" },
    join: { label: "Join Our Team", href: "/careers" },
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "HIPAA Notice", href: "/hipaa-notice" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
