"use client"; // Nécessaire pour utiliser les hooks côté client

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Formules from "./formules.js";
// Importation des images et SVG
import heroImage from "./assets/cleanhabitat.jpg";
import cleanHabitatLogo from "./assets/CleanHabitatLogo.svg";
import PlumbingIcon from "./assets/plumbing-icon.svg";
import ElectricityIcon from "./assets/electricity-icon.svg";
import LightbulbIcon from "./assets/lightbulb-icon.svg";
import WindowsIcon from "./assets/windows-icon.svg";
import ShuttersIcon from "./assets/shutters-icon.svg";
import WaterDamageIcon from "./assets/water-damage-icon.svg";
import JointsIcon from "./assets/joints-icon.svg";
import DoorIcon from "./assets/door-icon.svg";

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
                <img
                  src={PlumbingIcon.src}
                  alt="Plomberie"
                  className="w-16 h-16"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    TRAVAUX PLOMBERIE :
                  </h3>
                  <p className="text-gray-600">
                    Intervention pour système d'évacuation bouché (évier,
                    lavabo, wc).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={LightbulbIcon.src}
                  alt="Ampoules Usagées"
                  className="w-16 h-16"
                />
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
                <img
                  src={ShuttersIcon.src}
                  alt="Volets Stores"
                  className="w-16 h-16"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    VOLETS-STORES :
                  </h3>
                  <p className="text-gray-600">
                    Intervention sur volets roulants/stores bloqués ou
                    décrochés.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={WindowsIcon.src}
                  alt="Fenêtres"
                  className="w-16 h-16"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    FENÊTRES :
                  </h3>
                  <p className="text-gray-600">
                    Intervention pour système d'ouverture/fermeture défectueux.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="space-y-8">
              <div className="flex items-start">
                <img
                  src={ElectricityIcon.src}
                  alt="Électricité"
                  className="w-16 h-16"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    TRAVAUX ÉLECTRICITÉ :
                  </h3>
                  <p className="text-gray-600">
                    Remplacement/Réparation de prises et interrupteurs
                    présentant des anomalies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={WaterDamageIcon.src}
                  alt="Dégât des Eaux"
                  className="w-16 h-16"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    DÉGÂT DES EAUX :
                  </h3>
                  <p className="text-gray-600">
                    Prise en charge intégrale du sinistre. Création du dossier
                    auprès de l'assurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={JointsIcon.src}
                  alt="Rénovation des Joints"
                  className="w-16 h-16"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-teal-600">
                    RÉNOVATION DES JOINTS :
                  </h3>
                  <p className="text-gray-600">
                    Intervention annuelle pour réfection intégrale des joints
                    (cuisine, salle de bain).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src={DoorIcon.src}
                  alt="Porte Claquée"
                  className="w-16 h-16"
                />
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
      <section id="formules" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          Découvrez Nos Formules
        </h2>
        <Formules /> {/* Appel de la section Formules */}
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t-2 border-gray-200">
        <div className="h-1 w-full bg-gradient-to-r from-[#00A4A2] to-[#64B34D] mb-8"></div>

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
            <p className="mt-4 text-gray-700">1, place Jussieu - 75005 PARIS</p>
            <p className="mt-2 font-bold text-gray-900">Tél. 01 80 84 45 50</p>
          </div>

          {/* Colonne droite : Icônes et phrase */}
          <div className="mt-8 md:mt-0 text-center">
            <div className="flex justify-center space-x-4">
              <img
                src={PlumbingIcon.src}
                alt="Plomberie"
                className="w-16 h-16"
              />
              <img
                src={ElectricityIcon.src}
                alt="Électricité"
                className="w-16 h-16"
              />
              <img
                src={LightbulbIcon.src}
                alt="Ampoules"
                className="w-16 h-16"
              />
              <img src={WindowsIcon.src} alt="Fenêtres" className="w-16 h-16" />
              <img src={ShuttersIcon.src} alt="Volets" className="w-16 h-16" />
              <img
                src={WaterDamageIcon.src}
                alt="Dégât des Eaux"
                className="w-16 h-16"
              />
              <img src={JointsIcon.src} alt="Joints" className="w-16 h-16" />
              <img src={DoorIcon.src} alt="Porte" className="w-16 h-16" />
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
