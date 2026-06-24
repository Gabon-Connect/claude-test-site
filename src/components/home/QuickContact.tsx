import { useTranslations } from "next-intl";
import { WA_DEFAULT_URL } from "@/data/services";
import { MessageCircle, Mail } from "lucide-react";

export default function QuickContact() {
  const t = useTranslations("home.quickContact");

  return (
    <section className="bg-white py-20 border-t border-[#F7F7F5]" aria-label="Contact rapide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[Nunito] font-extrabold text-3xl md:text-4xl text-[#1A1A1A] mb-10">
          {t("h2")}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WA_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#1A1A1A] rounded-xl px-6 py-5 hover:bg-[#252525] transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623] min-h-[48px]"
          >
            <MessageCircle className="w-6 h-6 text-[#25D366] flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-white font-bold">{t("waLabel")}</p>
              <p className="text-white/50 text-sm">{t("waSubtext")}</p>
            </div>
          </a>
          <a
            href="mailto:contact@gabonconnect.com"
            className="flex items-center gap-4 bg-[#F7F7F5] rounded-xl px-6 py-5 hover:bg-[#eeeeec] transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623] min-h-[48px]"
          >
            <Mail className="w-6 h-6 text-[#F5A623] flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-[#1A1A1A] font-bold">{t("emailLabel")}</p>
              <p className="text-[#6B6B6B] text-sm">{t("emailSubtext")}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
