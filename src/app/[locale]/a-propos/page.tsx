import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "À propos — MoovAfrik Gabon",
    description:
      "MoovAfrik est l'opérateur de mobilité et livraison de Gabon Connect Technology. Basé à Libreville depuis 2026.",
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  const stats = [
    { label: t("stat1Label"), value: t("stat1Value") },
    { label: t("stat2Label"), value: t("stat2Value") },
    { label: t("stat3Label"), value: t("stat3Value") },
    { label: t("stat4Label"), value: t("stat4Value") },
  ];

  return (
    <div>
      <div className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[Nunito] font-black text-4xl md:text-5xl text-white">
            {t("h1")}
          </h1>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-16">
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p1")}</p>
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p2")}</p>
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p3")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#F7F7F5] rounded-xl p-5 text-center"
              >
                <p className="text-[#F5A623] font-black text-2xl mb-1">
                  {s.value}
                </p>
                <p className="text-[#6B6B6B] text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F7F7F5] pt-8">
            <p className="text-[#6B6B6B] text-sm">{t("identity")}</p>
            <p className="text-[#6B6B6B] text-sm mt-1">
              <a
                href="mailto:contact@gabonconnect.com"
                className="hover:text-[#F5A623]"
              >
                contact@gabonconnect.com
              </a>{" "}
              · +241 65 58 37 00 · Libreville, Gabon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
