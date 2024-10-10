// src/app/page.js

"use client"; // Nécessaire pour utiliser les hooks côté client

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "./assets/cleanhabitat.jpg";
import cleanHabitatLogo from "./assets/CleanHabitatLogo.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Animation GSAP pour la section "Nos Prestations"
    gsap.fromTo(
      ".animate-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".animate-section",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Section Hero avec une image de fond */}
      <section className="relative h-screen" id="hero">
        <Image
          src={heroImage}
          alt="Image principale"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-cleanhabitat-gradient">
              Clean Habitat Solutions
            </h1>
            <p className="text-4xl font-dancing mt-4 text-white">
              Votre maison, notre passion
            </p>
          </div>
        </div>
      </section>

      {/* Section Nos Prestations */}
      <section className="py-20 bg-gray-100" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            NOS PRESTATIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-section">
            {/* Colonne gauche */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/plumbing.svg" alt="Plomberie" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    TRAVAUX PLOMBERIE :
                  </h3>
                  <p className="text-gray-600">
                    Intervention pour système d'évacuation bouché (évier, lavabo, wc).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/lightbulb.svg" alt="Ampoules Usagées" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    AMPOULES USAGÉES :
                  </h3>
                  <p className="text-gray-600">
                    Remplacement des ampoules usagées.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/shutters.svg" alt="Volets Stores" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    VOLETS-STORES :
                  </h3>
                  <p className="text-gray-600">
                    Intervention sur volets roulants/stores bloqués ou décrochés.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/project.svg" alt="Projet Travaux" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    PROJET TRAVAUX :
                  </h3>
                  <p className="text-gray-600">
                    Réalisation d'un diagnostic, étude de marché, mise en relation avec les entreprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/electricity.svg" alt="Électricité" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    TRAVAUX ÉLECTRICITÉ :
                  </h3>
                  <p className="text-gray-600">
                    Remplacement/Réparation de prises et interrupteurs présentant des anomalies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/windows.svg" alt="Fenêtres" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    FENÊTRES :
                  </h3>
                  <p className="text-gray-600">
                    Intervention pour système d'ouverture/fermeture défectueux.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/water-damage.svg" alt="Dégât des Eaux" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    DÉGÂT DES EAUX :
                  </h3>
                  <p className="text-gray-600">
                    Prise en charge intégrale du sinistre. Création du dossier auprès de l'assurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/joints.svg" alt="Rénovation des Joints" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    RÉNOVATION DES JOINTS :
                  </h3>
                  <p className="text-gray-600">
                    Intervention annuelle pour réfection intégrale des joints (cuisine, salle de bain).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img src="/assets/door-lock.svg" alt="Porte Claquée" className="w-16 h-16" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    PORTE CLAQUÉE :
                  </h3>
                  <p className="text-gray-600">
                    Intervention d'urgence pour une porte claquée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-8 border-t-2 border-gray-200">
        {/* Trait de séparation avec un dégradé */}
        <div className="h-1 w-full bg-gradient-to-r from-[#00A4A2] to-[#64B34D]"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Colonne gauche : Logo et informations de contact */}
          <div className="text-center md:text-left">
            <Image
              src={cleanHabitatLogo}
              alt="Logo Clean Habitat"
              width={150}
              height={80}
              priority
            />
            <p className="mt-4 text-gray-700">
              1, place Jussieu - 75005 PARIS
            </p>
            <p className="mt-2 font-bold text-gray-900">
              Tél. 01 80 84 45 50
            </p>
          </div>

          {/* Colonne droite : Icônes et phrase */}
          <div className="mt-8 md:mt-0 text-center">
            <div className="flex justify-center space-x-4">
              <Image src="/assets/plumbing-icon.svg" alt="Plomberie" width={32} height={32} />
              <Image src="/assets/electricity-icon.svg" alt="Électricité" width={32} height={32} />
              <Image src="/assets/lightbulb-icon.svg" alt="Ampoules" width={32} height={32} />
            </div>
            <p className="mt-4 text-gray-900 font-bold">
              UN ENTRETIEN SUR MESURE À DOMICILE.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}