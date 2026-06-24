import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — MoovAfrik",
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[Nunito] font-black text-3xl text-[#1A1A1A] mb-8">
          Politique de confidentialité
        </h1>
        <div className="text-[#2C2C2C] space-y-6">
          <section>
            <h2 className="font-[Nunito] font-bold text-xl text-[#1A1A1A] mb-3">
              Données collectées
            </h2>
            <p>
              Les formulaires de contact collectent : nom, numéro de téléphone,
              adresse email (pour les entreprises), service souhaité et message.
              Ces données sont utilisées uniquement pour répondre à votre
              demande.
            </p>
          </section>
          <section>
            <h2 className="font-[Nunito] font-bold text-xl text-[#1A1A1A] mb-3">
              Durée de conservation
            </h2>
            <p>
              Les données sont conservées le temps nécessaire au traitement de
              votre demande et au maximum 12 mois.
            </p>
          </section>
          <section>
            <h2 className="font-[Nunito] font-bold text-xl text-[#1A1A1A] mb-3">
              Vos droits
            </h2>
            <p>
              Vous disposez d’un droit d’accès, de rectification et de
              suppression de vos données. Pour exercer ces droits, contactez-
              nous à :{" "}
              <a
                href="mailto:contact@gabonconnect.com"
                className="text-[#F5A623] hover:underline"
              >
                contact@gabonconnect.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
