import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";
import {
  GraduationCap,
  Building2,
  Plane,
  PartyPopper,
  Stethoscope,
  Zap,
  ShoppingBag,
  Car,
} from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  "transport-scolaire": <GraduationCap className="w-8 h-8" />,
  corporate: <Building2 className="w-8 h-8" />,
  aeroport: <Plane className="w-8 h-8" />,
  evenementiel: <PartyPopper className="w-8 h-8" />,
  medical: <Stethoscope className="w-8 h-8" />,
  "livraison-express": <Zap className="w-8 h-8" />,
  "livraison-ecommerce": <ShoppingBag className="w-8 h-8" />,
  location: <Car className="w-8 h-8" />,
};

export default function ServicesGrid() {
  const t = useTranslations("home.services");
  const tS = useTranslations("services");

  return (
    <section className="bg-[#1A1A1A] py-20" aria-label="Nos services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle
            title={t("h2")}
            subtitle={t("subtitle")}
            light
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              name={tS(`${service.slug}.name`)}
              tagline={tS(`${service.slug}.cardTagline`)}
              price={tS(`${service.slug}.price`)}
              badge={tS(`${service.slug}.badge`)}
              icon={ICONS[service.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
