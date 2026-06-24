import Link from "next/link";
import { useTranslations } from "next-intl";
import { SERVICES } from "@/data/services";

export default function Footer() {
  const t = useTranslations("footer");
  const tServices = useTranslations("common.servicesList");

  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div>
            <div className="font-[Nunito] font-black text-2xl mb-2">
              moov<span className="text-[#F5A623]">Afrik</span>
            </div>
            <p className="text-white/60 text-sm">{t("tagline")}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              {t("servicesTitle")}
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
                  >
                    {tServices(s.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              {t("contactTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="tel:+241055837 99"
                  className="hover:text-white transition-colors"
                >
                  {t("phone")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:moovafrik@gabonconnect.com"
                  className="hover:text-white transition-colors"
                >
                  {t("email")}
                </a>
              </li>
              <li>{t("address")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>{t("copyright")}</p>
          <nav className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-white/70 transition-colors"
            >
              {t("legal")}
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-white/70 transition-colors"
            >
              {t("privacy")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
