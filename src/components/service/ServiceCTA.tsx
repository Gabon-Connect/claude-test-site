import { getWaUrl } from "@/data/services";
import { MessageCircle, Mail } from "lucide-react";

interface ServiceCTAProps {
  waMessage: string;
  waCtaText: string;
  emailCtaText?: string;
}

export default function ServiceCTA({
  waMessage,
  waCtaText,
  emailCtaText,
}: ServiceCTAProps) {
  const waUrl = getWaUrl(waMessage);

  return (
    <section className="bg-[#1A1A1A] py-16" aria-label="Réserver ce service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#F5A623] text-[#1A1A1A] font-black text-base px-8 py-4 rounded-xl hover:bg-[#e09720] transition-colors min-h-[56px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {waCtaText}
          </a>
          {emailCtaText && (
            <a
              href="mailto:contact@gabonconnect.com"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-bold text-base px-8 py-4 rounded-xl hover:border-white/60 hover:bg-white/5 transition-colors min-h-[56px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              {emailCtaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
