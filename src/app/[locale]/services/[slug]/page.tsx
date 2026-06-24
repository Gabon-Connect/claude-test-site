import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SERVICES, getServiceBySlug } from "@/data/services";
import ServiceHero from "@/components/service/ServiceHero";
import HowItWorks from "@/components/service/HowItWorks";
import PricingSection from "@/components/service/PricingSection";
import ServiceCTA from "@/components/service/ServiceCTA";
import RelatedServices from "@/components/service/RelatedServices";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.flatMap((s) =>
    ["fr", "en"].map((locale) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const t = await getTranslations(`services.${slug}`);

  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDesc"),
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const t = await getTranslations(`services.${slug}`);

  return (
    <>
      <ServiceHero
        module={service.module}
        name={t("name")}
        target={t("target")}
        price={t("price")}
        h1={t("h1")}
        h1Line2={t("h1Line2")}
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-4">
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p1")}</p>
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p2")}</p>
          </div>
        </div>
      </section>

      <HowItWorks
        title={t("howTitle")}
        steps={[t("step1"), t("step2"), t("step3")]}
      />

      <PricingSection
        title={t("pricingTitle")}
        pricing={t("pricing")}
        details={t("pricingDetails")}
      />

      <ServiceCTA
        waMessage={service.waMessage}
        waCtaText={t("waCtaText")}
        emailCtaText={
          service.hasB2BCta && t("emailCtaText") ? t("emailCtaText") : undefined
        }
      />

      <RelatedServices currentSlug={slug} />
    </>
  );
}
