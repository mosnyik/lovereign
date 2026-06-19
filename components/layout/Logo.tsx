import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image
        src="/logo.jpeg"
        alt={`${siteConfig.brand} logo`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
        priority
      />
      <span
        className={`font-serif text-lg sm:text-xl font-semibold leading-none ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        Lovereign
        <span className="block text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-accent-500">
          Care Services
        </span>
      </span>
    </Link>
  );
}
