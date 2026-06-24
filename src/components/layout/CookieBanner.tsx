"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function handleChoice(accepted: boolean) {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ accepted, date: Date.now() })
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#1A1A1A] text-white px-4 py-4 shadow-2xl border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80">{t("text")}</p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handleChoice(false)}
            className="border border-white/30 text-white/70 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
          >
            {t("refuse")}
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="bg-[#F5A623] text-[#1A1A1A] font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#e09720] transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
