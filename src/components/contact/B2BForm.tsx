"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { SERVICE_SLUGS } from "@/data/services";

interface B2BFormData {
  company: string;
  contact: string;
  function?: string;
  email: string;
  phone: string;
  service: string;
  volume?: string;
  message: string;
  honeypot?: string;
}

export default function B2BForm() {
  const t = useTranslations("contact.b2b");
  const tCommon = useTranslations("common.servicesList");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<B2BFormData>();

  async function onSubmit(data: B2BFormData) {
    if (data.honeypot) return;
    setSending(true);
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_B2B || "",
        {
          company: data.company,
          contact: data.contact,
          function: data.function || "",
          email: data.email,
          phone: data.phone,
          service: data.service,
          volume: data.volume || "",
          message: data.message,
          subject: "[DEVIS B2B]",
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

  const inputClass = (hasError: boolean) =>
    `w-full border rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#F5A623] min-h-[48px] bg-white ${
      hasError ? "border-[#C0392B]" : "border-[#e0e0e0]"
    }`;

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center"
      >
        <p className="text-blue-800 font-bold text-lg mb-2">
          ✅ {t("successTitle")}
        </p>
        <p className="text-blue-700 text-sm">{t("successText")}</p>
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
        <label htmlFor="b2b-company" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("company")} <span aria-hidden="true">*</span>
        </label>
        <input
          id="b2b-company"
          type="text"
          placeholder={t("companyPlaceholder")}
          autoComplete="organization"
          className={inputClass(!!errors.company)}
          {...register("company", { required: true })}
        />
        {errors.company && (
          <p role="alert" className="text-[#C0392B] text-xs mt-1">Ce champ est requis</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="b2b-contact" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
            {t("contact")} <span aria-hidden="true">*</span>
          </label>
          <input
            id="b2b-contact"
            type="text"
            autoComplete="name"
            className={inputClass(!!errors.contact)}
            {...register("contact", { required: true })}
          />
          {errors.contact && (
            <p role="alert" className="text-[#C0392B] text-xs mt-1">Ce champ est requis</p>
          )}
        </div>
        <div>
          <label htmlFor="b2b-function" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
            {t("function")}
          </label>
          <input
            id="b2b-function"
            type="text"
            placeholder={t("functionPlaceholder")}
            autoComplete="organization-title"
            className={inputClass(false)}
            {...register("function")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="b2b-email" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
            {t("email")} <span aria-hidden="true">*</span>
          </label>
          <input
            id="b2b-email"
            type="email"
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
            className={inputClass(!!errors.email)}
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <p role="alert" className="text-[#C0392B] text-xs mt-1">Email invalide</p>
          )}
        </div>
        <div>
          <label htmlFor="b2b-phone" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
            {t("phone")} <span aria-hidden="true">*</span>
          </label>
          <input
            id="b2b-phone"
            type="tel"
            autoComplete="tel"
            className={inputClass(!!errors.phone)}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p role="alert" className="text-[#C0392B] text-xs mt-1">Ce champ est requis</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="b2b-service" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
            {t("service")} <span aria-hidden="true">*</span>
          </label>
          <select
            id="b2b-service"
            className={inputClass(!!errors.service)}
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
            <p role="alert" className="text-[#C0392B] text-xs mt-1">Veuillez sélectionner un service</p>
          )}
        </div>
        <div>
          <label htmlFor="b2b-volume" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
            {t("volume")}
          </label>
          <input
            id="b2b-volume"
            type="text"
            placeholder={t("volumePlaceholder")}
            className={inputClass(false)}
            {...register("volume")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="b2b-message" className="block text-sm font-semibold text-[#2C2C2C] mb-1">
          {t("message")} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="b2b-message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={`w-full border rounded-lg px-4 py-3 text-[#2C2C2C] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#F5A623] resize-none ${
            errors.message ? "border-[#C0392B]" : "border-[#e0e0e0]"
          }`}
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p role="alert" className="text-[#C0392B] text-xs mt-1">Ce champ est requis</p>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-[#1A1A1A] text-white font-black py-4 rounded-xl hover:bg-[#252525] transition-colors min-h-[56px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623] disabled:opacity-60"
      >
        {sending ? "Envoi en cours…" : t("submit")}
      </button>
    </form>
  );
}
