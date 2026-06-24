export const runtime = "edge";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import ReassuranceBar from "@/components/home/ReassuranceBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhySection from "@/components/home/WhySection";
import QuickContact from "@/components/home/QuickContact";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MoovAfrik — Mobilité & Livraison à Libreville",
    description:
      "Transport scolaire, corporate, aéroport, médical et livraison à Libreville. 8 services. Tarifs fixes. Réservation WhatsApp 7j/7.",
    openGraph: {
      title: "MoovAfrik — Mobilité & Livraison à Libreville",
      description:
        "Transport scolaire, corporate, aéroport, médical et livraison à Libreville. 8 services. Tarifs fixes. Réservation WhatsApp 7j/7.",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReassuranceBar />
      <ServicesGrid />
      <WhySection />
      <QuickContact />
    </>
  );
}
