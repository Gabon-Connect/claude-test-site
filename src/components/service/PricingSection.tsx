interface PricingSectionProps {
  title: string;
  pricing: string;
  details: string;
}

export default function PricingSection({
  title,
  pricing,
  details,
}: PricingSectionProps) {
  return (
    <section className="bg-white py-16 border-y border-[#F7F7F5]" aria-label="Tarification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[Nunito] font-extrabold text-2xl md:text-3xl text-[#1A1A1A] mb-6">
          {title}
        </h2>
        <div className="bg-[#F7F7F5] rounded-xl p-6 max-w-xl">
          <p className="text-[#F5A623] font-bold text-2xl mb-2">{pricing}</p>
          <p className="text-[#6B6B6B] text-sm">{details}</p>
        </div>
      </div>
    </section>
  );
}
