interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-[Nunito] font-extrabold text-3xl md:text-4xl mb-3 ${
          light ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[#6B6B6B]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
