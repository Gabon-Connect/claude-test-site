# MoovAfrik — Site vitrine

Site vitrine institutionnel de MoovAfrik, plateforme de mobilité et livraison de Gabon Connect Technology SARLU, Libreville.

## Stack

- Next.js 16 · TypeScript · Tailwind CSS
- next-intl (FR / EN)
- React Hook Form · EmailJS · Lucide React

## Installation

```bash
npm install
cp .env.example .env.local
# Renseigner les clés EmailJS dans .env.local
npm run dev
```

## Structure

```
src/
  app/[locale]/          # Routes i18n (App Router)
  components/layout/     # Header, Footer, WhatsApp sticky, Cookie banner
  components/home/       # Sections page d'accueil
  components/service/    # Template fiche service (×8)
  components/contact/    # Formulaires B2C et B2B
  components/ui/         # Composants partagés
  data/services.ts       # Source de vérité des 8 services
  i18n/                  # Configuration next-intl
messages/
  fr.json                # Textes français
  en.json                # Textes anglais
```
