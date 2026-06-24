import { useTranslations } from "next-intl";
import { Shield, Clock, MessageCircle } from "lucide-react";

export default function ReassuranceBar() {
  const t = useTranslations("home.reassurance");

  const items = [
    { icon: <Shield className="w-8 h-8" />, title: t("title1"), text: t("text1") },
    { icon: <Clock className="w-8 h-8" />, title: t("title2"), text: t("text2") },
    { icon: <MessageCircle className="w-8 h-8" />, title: t("title3"), text: t("text3") },
  ];

  return (
    <section className="bg-[#F7F7F5] py-12" aria-label="Nos garanties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="text-[#F5A623] flex-shrink-0" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <h3 className="font-[Nunito] font-bold text-[#1A1A1A] text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
