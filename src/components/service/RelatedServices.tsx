import { useTranslations } from "next-intl";
import Link from "next/link";
import { SERVICES } from "@/data/services";

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const tS = useTranslations("services");

  const related = SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-[#F7F7F5] py-16" aria-label="Autres services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[Nunito] font-extrabold text-2xl md:text-3xl text-[#1A1A1A] mb-8">
          Autres services MoovAfrik
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow border border-[#F7F7F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
            >
              <p className="font-[Nunito] font-bold text-[#1A1A1A] mb-1">
                {tS(`${s.slug}.name`)}
              </p>
              <p className="text-[#F5A623] font-bold text-sm">
                {tS(`${s.slug}.price`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
