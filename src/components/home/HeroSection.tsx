import { useTranslations } from "next-intl";
import { getWaUrl } from "@/data/services";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  const waUrl = getWaUrl(
    "Bonjour%20MoovAfrik%2C%20je%20souhaite%20r%C3%A9server%20un%20service."
  );

  return (
    <section
      className="bg-[#1A1A1A] relative overflow-hidden"
      aria-label="Hero MoovAfrik"
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, #F5A623 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-[Nunito] font-black text-4xl md:text-6xl text-white leading-tight mb-6">
            {t("h1")}
            <br />
            <span className="text-[#F5A623]">{t("h1Line2")}</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5A623] text-[#1A1A1A] font-black text-base px-8 py-4 rounded-xl hover:bg-[#e09720] transition-colors min-h-[56px] flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {t("cta")}
            </a>
          </div>
          <p className="text-white/40 text-sm mt-4">{t("microtext")}</p>
        </div>
      </div>
    </section>
  );
}
