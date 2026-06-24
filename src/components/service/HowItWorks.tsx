interface HowItWorksProps {
  title: string;
  steps: string[];
}

export default function HowItWorks({ title, steps }: HowItWorksProps) {
  return (
    <section className="bg-[#F7F7F5] py-16" aria-label="Comment ça marche">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[Nunito] font-extrabold text-2xl md:text-3xl text-[#1A1A1A] mb-8">
          {title}
        </h2>
        <ol className="space-y-6">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span
                className="bg-[#F5A623] text-[#1A1A1A] font-black text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-[#2C2C2C] text-base leading-relaxed pt-2">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
