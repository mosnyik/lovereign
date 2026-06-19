import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/Logo";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 font-serif text-lg text-white">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Compassionate home care and behavioral support for families across {siteConfig.serviceArea.replace("All counties across ", "")}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white break-all">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="text-white/50">{siteConfig.serviceArea}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Follow Along</h3>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href === "TODO" ? "#" : link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
          <div className="flex gap-5">
            {siteConfig.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
