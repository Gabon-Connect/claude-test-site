export type ServiceSlug =
  | "transport-scolaire"
  | "corporate"
  | "aeroport"
  | "evenementiel"
  | "medical"
  | "livraison-express"
  | "livraison-ecommerce"
  | "location";

export interface ServiceData {
  slug: ServiceSlug;
  module: string;
  waMessage: string;
  hasB2BCta: boolean;
}

export const SERVICES: ServiceData[] = [
  { slug: "transport-scolaire", module: "01", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20inscrire%20mon%20enfant%20au%20transport%20scolaire.", hasB2BCta: false },
  { slug: "corporate", module: "02", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20un%20devis%20pour%20les%20navettes%20de%20mon%20entreprise.", hasB2BCta: true },
  { slug: "aeroport", module: "03", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20r%C3%A9server%20un%20transfert%20a%C3%A9roport.%20Num%C3%A9ro%20de%20vol%20%3A", hasB2BCta: true },
  { slug: "evenementiel", module: "04", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20un%20devis%20transport%20pour%20un%20%C3%A9v%C3%A9nement%20le%20%3A", hasB2BCta: false },
  { slug: "medical", module: "05", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20r%C3%A9server%20un%20transport%20m%C3%A9dical%20pour%20le%20%3A", hasB2BCta: false },
  { slug: "livraison-express", module: "06", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20une%20livraison%20express%20de%20%3A%20%5Bd%C3%A9part%5D%20%C3%A0%20%3A%20%5Barrivee%5D.", hasB2BCta: false },
  { slug: "livraison-ecommerce", module: "07", waMessage: "Bonjour%20MoovAfrik%2C%20je%20suis%20commer%C3%A7ant(e)%20et%20je%20souhaite%20un%20partenariat%20livraison.", hasB2BCta: true },
  { slug: "location", module: "08", waMessage: "Bonjour%20MoovAfrik%2C%20je%20souhaite%20louer%20un%20v%C3%A9hicule%20du%20%3A%20au%20%3A", hasB2BCta: false },
];

export const WA_NUMBER = "241076567587";
export const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;
export const WA_DEFAULT_URL = `${WA_BASE_URL}?text=Bonjour%20MoovAfrik%2C%20je%20souhaite%20en%20savoir%20plus.`;

export function getWaUrl(message: string): string {
  return `${WA_BASE_URL}?text=${message}`;
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
