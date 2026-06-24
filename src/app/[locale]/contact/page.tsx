import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import B2CForm from "@/components/contact/B2CForm";
import B2BForm from "@/components/contact/B2BForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Réserver — MoovAfrik Libreville",
    description:
      "Réservez votre service MoovAfrik ou demandez un devis entreprise. Réponse sous 1h. WhatsApp ou formulaire en ligne.",
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[Nunito] font-black text-4xl md:text-5xl text-white mb-4">
            {t("h1")}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </div>

      {/* Forms */}
      <div className="bg-[#F7F7F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* B2C */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-2">
                <span className="text-xs font-bold text-[#F5A623] bg-[#F5A623]/10 px-2 py-1 rounded-full">
                  PARTICULIERS
                </span>
              </div>
              <h2 className="font-[Nunito] font-extrabold text-2xl text-[#1A1A1A] mb-6">
                {t("b2cTitle")}
              </h2>
              <B2CForm />
            </div>

            {/* B2B */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-2">
                <span className="text-xs font-bold text-[#1A1A1A] bg-[#1A1A1A]/10 px-2 py-1 rounded-full">
                  ENTREPRISES
                </span>
              </div>
              <h2 className="font-[Nunito] font-extrabold text-2xl text-[#1A1A1A] mb-6">
                {t("b2bTitle")}
              </h2>
              <B2BForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
