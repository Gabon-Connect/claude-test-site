import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/services": "/services",
    "/services/transport-scolaire": { fr: "/services/transport-scolaire", en: "/services/school-transport" },
    "/services/corporate": { fr: "/services/corporate", en: "/services/corporate" },
    "/services/aeroport": { fr: "/services/aeroport", en: "/services/airport-transfers" },
    "/services/evenementiel": { fr: "/services/evenementiel", en: "/services/event-transport" },
    "/services/medical": { fr: "/services/medical", en: "/services/medical-transport" },
    "/services/livraison-express": { fr: "/services/livraison-express", en: "/services/express-delivery" },
    "/services/livraison-ecommerce": { fr: "/services/livraison-ecommerce", en: "/services/ecommerce-delivery" },
    "/services/location": { fr: "/services/location", en: "/services/car-rental" },
    "/contact": "/contact",
    "/a-propos": { fr: "/a-propos", en: "/about" },
    "/mentions-legales": { fr: "/mentions-legales", en: "/legal" },
    "/confidentialite": { fr: "/confidentialite", en: "/privacy" },
  },
});
