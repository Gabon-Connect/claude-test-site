export const runtime = "edge";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — MoovAfrik",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[Nunito] font-black text-3xl text-[#1A1A1A] mb-8">
          Mentions légales
        </h1>
        <div className="prose prose-gray max-w-none text-[#2C2C2C] space-y-6">
          <section>
            <h2 className="font-[Nunito] font-bold text-xl text-[#1A1A1A] mb-3">
              Éditeur du site
            </h2>
            <p>
              <strong>Gabon Connect Technology SARLU</strong>
              <br />
              Libreville, Gabon
              <br />
              Email : contact@gabonconnect.com
              <br />
              Directeur de publication : Jean Bruce Ekoga
            </p>
          </section>
          <section>
            <h2 className="font-[Nunito] font-bold text-xl text-[#1A1A1A] mb-3">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Gabon Connect Technology SARLU ou son
              prestataire d’hébergement. Les informations d’hébergement seront
              complétées lors du déploiement en production.
            </p>
          </section>
          <section>
            <h2 className="font-[Nunito] font-bold text-xl text-[#1A1A1A] mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble du contenu de ce site (textes, images, logos) est la
              propriété exclusive de Gabon Connect Technology SARLU. Toute
              reproduction sans autorisation est interdite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
