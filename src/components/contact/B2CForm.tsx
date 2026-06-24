"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { SERVICE_SLUGS } from "@/data/services";

interface B2CFormData {
  name: string;
  phone: string;
  service: string;
  datetime: string;
  message?: string;
  honeypot?: string;
}

export default function B2CForm() {
  const t = useTranslations("contact.b2c");
  const tCommon = useTranslations("common.servicesList");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<B2CFormData>();

  async function onSubmit(data: B2CFormData) {
    if (data.honeypot) return;
    setSending(true);
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_B2C || "",
        {
          from_name: data.name,
          phone: data.phone,
          service: data.service,
          datetime: data.datetime,
          message: data.message || "",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-[#1E8A4C]/10 border border-[#1E8A4C] rounded-xl p-6 text-center"
      >
        <p className="text-[#1E8A4C] font-bold text-lg mb-2">
          ✅ {t("successTitle")}
        </p>
        <p className="text-[#2C2C2C] text-sm">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        {...register("honeypot")}
      />

      <div>
        <label htmlFor="b2c-name" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("name")} <span aria-hidden="true">*</span>
        </label>
        <input
          id="b2c-name"
          type="text"
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          className={`w-full border rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#F5A623] min-h-[48px] ${
            errors.name ? "border-[#C0392B]" : "border-[#e0e0e0]"
          }`}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p role="alert" className="text-[#C0392B] text-xs mt-1">
            Ce champ est requis
          </p>
        )}
      </div>

      <div>
        <label htmlFor="b2c-phone" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("phone")} <span aria-hidden="true">*</span>
        </label>
        <input
          id="b2c-phone"
          type="tel"
          placeholder={t("phonePlaceholder")}
          autoComplete="tel"
          className={`w-full border rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#F5A623] min-h-[48px] ${
            errors.phone ? "border-[#C0392B]" : "border-[#e0e0e0]"
          }`}
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <p role="alert" className="text-[#C0392B] text-xs mt-1">
            Ce champ est requis
          </p>
        )}
      </div>

      <div>
        <label htmlFor="b2c-service" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("service")} <span aria-hidden="true">*</span>
        </label>
        <select
          id="b2c-service"
          className={`w-full border rounded-lg px-4 py-3 text-[#2C2C2C] bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623] min-h-[48px] ${
            errors.service ? "border-[#C0392B]" : "border-[#e0e0e0]"
          }`}
          {...register("service", { required: true })}
        >
          <option value="">{t("servicePlaceholder")}</option>
          {SERVICE_SLUGS.map((slug) => (
            <option key={slug} value={slug}>
              {tCommon(slug)}
            </option>
          ))}
        </select>
        {errors.service && (
          <p role="alert" className="text-[#C0392B] text-xs mt-1">
            Veuillez sélectionner un service
          </p>
        )}
      </div>

      <div>
        <label htmlFor="b2c-datetime" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("datetime")} <span aria-hidden="true">*</span>
        </label>
        <input
          id="b2c-datetime"
          type="text"
          placeholder={t("datetimePlaceholder")}
          className={`w-full border rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#F5A623] min-h-[48px] ${
            errors.datetime ? "border-[#C0392B]" : "border-[#e0e0e0]"
          }`}
          {...register("datetime", { required: true })}
        />
        {errors.datetime && (
          <p role="alert" className="text-[#C0392B] text-xs mt-1">
            Ce champ est requis
          </p>
        )}
      </div>

      <div>
        <label htmlFor="b2c-message" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("message")}
        </label>
        <textarea
          id="b2c-message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className="w-full border border-[#e0e0e0] rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#F5A623] resize-none"
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-[#F5A623] text-[#1A1A1A] font-black py-4 rounded-xl hover:bg-[#e09720] transition-colors min-h-[56px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A1A1A] disabled:opacity-60"
      >
        {sending ? "Envoi en cours…" : t("submit")}
      </button>
    </form>
  );
}
