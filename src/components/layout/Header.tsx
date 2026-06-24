"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { WA_DEFAULT_URL } from "@/data/services";
import BWToggle from "@/components/layout/BWToggle";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const otherLocale = locale === "fr" ? "en" : "fr";

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/a-propos", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-[#1A1A1A] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-[Nunito] font-black text-xl text-white">
              moov<span className="text-[#F5A623]">Afrik</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={WA_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5A623] text-[#1A1A1A] font-bold text-sm px-4 py-2 rounded-lg hover:bg-[#e09720] transition-colors min-h-[44px] flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label={t("cta")}
            >
              {t("cta")}
            </Link>
            <Link
              href={`/${otherLocale}`}
              className="text-white/60 hover:text-white text-xs font-semibold border border-white/30 px-2 py-1 rounded transition-colors"
              aria-label={`Switch to ${otherLocale.toUpperCase()}`}
            >
              {t("lang")}
            </Link>
            <BWToggle />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-[#1A1A1A] border-t border-white/10"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col px-4 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={WA_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5A623] text-[#1A1A1A] font-bold text-base px-4 py-3 rounded-lg text-center hover:bg-[#e09720] transition-colors min-h-[48px] flex items-center justify-center"
            >
              {t("cta")}
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href={`/${otherLocale}`}
                className="text-white/60 text-sm"
              >
                {t("lang")}
              </Link>
              <BWToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
