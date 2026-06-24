export const runtime = "edge";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import SectionTitle from "@/components/ui/SectionTitle";
import ServicesGrid from "@/components/home/ServicesGrid";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nos services — MoovAfrik Libreville",
    description:
      "Découvrez les 8 services de mobilité et livraison MoovAfrik à Libreville : transport scolaire, corporate, aéroport, médical, livraison, location.",
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("services");

  return (
    <div>
      <div className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t("hubTitle")}
            subtitle={t("hubSubtitle")}
            light
          />
        </div>
      </div>
      <ServicesGrid />
    </div>
  );
}
