"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 lg:ml-14 lg:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[15px] font-medium text-ink-muted transition-colors hover:text-brand-700",
                pathname === item.href.split("#")[0] && "text-brand-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:ml-auto lg:flex">
          <Button asChild variant="secondary" size="sm">
            <Link href={siteConfig.ctas.refer.href}>{siteConfig.ctas.refer.label}</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={siteConfig.ctas.findCare.href}>{siteConfig.ctas.findCare.label}</Link>
          </Button>
        </div>

        {/* Persistent mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-brand-800 transition-colors hover:bg-brand-50 lg:hidden cursor-pointer"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-brand-100 bg-cream lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2.5 px-3">
                <Button asChild variant="secondary" onClick={() => setOpen(false)}>
                  <Link href={siteConfig.ctas.refer.href}>{siteConfig.ctas.refer.label}</Link>
                </Button>
                <Button asChild onClick={() => setOpen(false)}>
                  <Link href={siteConfig.ctas.findCare.href}>{siteConfig.ctas.findCare.label}</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
