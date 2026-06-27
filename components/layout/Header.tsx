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
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center pl-0 pr-5 sm:pr-8 lg:pr-10">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:ml-6 lg:flex xl:ml-14 xl:gap-8"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href.split("#")[0];
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-2 py-2 text-sm font-medium text-ink-muted transition-colors duration-150 hover:bg-brand-50 hover:text-brand-700 active:bg-brand-100 xl:px-3.5 xl:text-[15px]",
                  isActive && "bg-brand-50 font-semibold text-brand-700"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:ml-auto lg:flex lg:pl-3 xl:gap-3 xl:pl-8">
          <Button asChild size="sm">
            <Link href={siteConfig.ctas.findCare.href}>
              <span className="xl:hidden">Find Care</span>
              <span className="hidden xl:inline">{siteConfig.ctas.findCare.label}</span>
            </Link>
          </Button>
        </div>

        {/* Persistent mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-brand-800 transition-colors duration-150 hover:bg-brand-50 active:bg-brand-100 lg:hidden cursor-pointer"
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
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href.split("#")[0];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors duration-150 hover:bg-brand-50 active:bg-brand-100",
                      isActive && "bg-brand-50 font-semibold text-brand-700"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2.5 px-3">
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
