interface ServiceHeroProps {
  module: string;
  name: string;
  target: string;
  price: string;
  h1: string;
  h1Line2: string;
}

export default function ServiceHero({
  module,
  name,
  target,
  price,
  h1,
  h1Line2,
}: ServiceHeroProps) {
  return (
    <section className="bg-[#1A1A1A] relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, #F5A623 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#F5A623] font-bold text-sm font-mono">
            MODULE {module}
          </span>
          <span className="text-white/30">·</span>
          <span className="text-white/60 text-sm">{target}</span>
        </div>
        <h1 className="font-[Nunito] font-black text-4xl md:text-5xl text-white leading-tight mb-4">
          {h1}
          <br />
          <span className="text-[#F5A623]">{h1Line2}</span>
        </h1>
        <p className="text-[#F5A623] font-bold text-xl">{price}</p>
      </div>
    </section>
  );
}
