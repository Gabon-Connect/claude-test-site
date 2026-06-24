import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  badge: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  slug,
  name,
  tagline,
  price,
  badge,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-[#1A1A1A] rounded-xl p-6 flex flex-col gap-3 hover:bg-[#252525] transition-colors border border-white/5 hover:border-[#F5A623]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
    >
      <div className="text-[#F5A623] text-3xl">{icon}</div>
      <div>
        <span className="text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-2 py-1 rounded-full">
          {badge}
        </span>
      </div>
      <h3 className="font-[Nunito] font-bold text-white text-lg group-hover:text-[#F5A623] transition-colors">
        {name}
      </h3>
      <p className="text-white/60 text-sm flex-1">{tagline}</p>
      <p className="text-[#F5A623] font-bold text-sm">{price}</p>
    </Link>
  );
}
