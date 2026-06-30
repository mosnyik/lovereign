export const siteConfig = {
  brand: "Lovereign Care Services",
  tagline: "Care that feels like family",
  contactName: "Bunmi Adelusi",
  email: "lovereigncareservices@gmail.com",
  careersEmail: process.env.CAREERS_EMAIL ?? "lovereigncareservices@gmail.com",
  phone: "+1 (908) 400-2323",
  phoneHref: "tel:+19084002323",
  address: "30 Union Street, Suite 37, Elizabeth, NJ 07202",
  serviceArea: "All counties across New Jersey",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://www.lovereigncareservices.care",
  // referralEndpoint: process.env.REFERRAL_ENDPOINT_URL,
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
    // refer: { label: "Refer a Client", href: "/contact#referral" },
    join: { label: "Join Our Team", href: "/careers" },
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "HIPAA Notice", href: "/hipaa-notice" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
