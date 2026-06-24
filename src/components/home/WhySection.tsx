import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WhySection() {
  const t = useTranslations("home.why");

  return (
    <section className="bg-[#F7F7F5] py-20" aria-label="Pourquoi MoovAfrik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionTitle title={t("h2")} />
          <div className="mt-6 space-y-4">
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p1")}</p>
            <p className="text-[#2C2C2C] text-lg leading-relaxed">{t("p2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
