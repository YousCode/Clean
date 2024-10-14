import { useState } from "react";
import { gsap } from "gsap";

// Importation des icônes SVG
import PlumbingIcon from "./assets/plumbing-icon.svg";
import ElectricityIcon from "./assets/electricity-icon.svg";
import LightbulbIcon from "./assets/lightbulb-icon.svg";
import WindowsIcon from "./assets/windows-icon.svg";
import ShuttersIcon from "./assets/shutters-icon.svg";
import WaterDamageIcon from "./assets/water-damage-icon.svg";
import JointsIcon from "./assets/joints-icon.svg";
import DoorIcon from "./assets/door-icon.svg";

export default function Formules() {
  const [selectedFormule, setSelectedFormule] = useState(null);

  const handleClick = (formule) => {
    setSelectedFormule(formule);
    gsap.to(".formule-description", { opacity: 1, duration: 0.5 });
  };

  const formules = [
    {
      id: 1,
      title: "Formule Essentielle",
      price: "129€ / mois",
      description: `Travaux plomberie: Intervention pour système évacuation bouché (évier, lavabo, wc).
Travaux électricité: Remplacement/réparation prises/interrupteurs présentant des anomalies.
Fenêtres: Intervention pour système ouverture/fermeture défectueux.
Volets/Stores: Intervention sur volet roulant/store bloqué ou décroché.`,
      icons: [PlumbingIcon, ElectricityIcon, WindowsIcon, ShuttersIcon],
    },
    {
      id: 2,
      title: "Formule Confort",
      price: "169€ / mois",
      description: `Travaux plomberie: Intervention pour système évacuation bouché (évier, lavabo, wc).
Travaux électricité: Remplacement/réparation prises/interrupteurs présentant des anomalies.
Ampoules usagées: Remplacement des ampoules usagées.
Fenêtres: Intervention pour système ouverture/fermeture défectueux.
Volets/Stores: Intervention sur volet roulant/store bloqué ou décroché.
Dégâts des eaux: Prise en charge intégrale du sinistre: création du dossier auprès de l'assurance, prise de contact et mise en relation avec l'entreprise, gestion des travaux avec l'entreprise.
Projet travaux: Réalisation d'un diagnostic, étude de marché, recherche et mise en relation avec l'entreprise.`,
      icons: [PlumbingIcon, ElectricityIcon, LightbulbIcon, WindowsIcon, ShuttersIcon, WaterDamageIcon, JointsIcon],
    },
    {
      id: 3,
      title: "Formule Sérénité",
      price: "199€ / mois",
      description: `Travaux plomberie: Intervention pour système évacuation bouché (évier, lavabo, wc).
Travaux électricité: Remplacement/réparation prises/interrupteurs présentant des anomalies.
Ampoules usagées: Remplacement des ampoules usagées.
Fenêtres: Intervention pour système ouverture/fermeture défectueux.
Volets/Stores: Intervention sur volet roulant/store bloqué ou décroché.
Dégâts des eaux: Prise en charge intégrale du sinistre: création du dossier auprès de l'assurance, prise de contact et mise en relation avec l'entreprise, gestion des travaux avec l'entreprise.
Projet travaux: Réalisation d'un diagnostic, étude de marché, recherche et mise en relation avec l'entreprise.
Rénovation des joints: Intervention annuelle pour réfection intégrale des joints (cuisine, salle de bain).
Porte claquée: Intervention d'urgence pour «porte claquée».`,
      icons: [PlumbingIcon, ElectricityIcon, LightbulbIcon, WindowsIcon, ShuttersIcon, WaterDamageIcon, JointsIcon, DoorIcon],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {formules.map((formule) => (
          <div
            key={formule.id}
            onClick={() => handleClick(formule)}
            className="p-6 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1 backdrop-blur-lg bg-gradient-to-r from-[#00A4A2] to-[#64B34D] bg-opacity-30 text-white"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
          >
            <h3 className="text-2xl font-bold mb-4">{formule.title}</h3>
            <p className="text-gray-200">Prix: {formule.price}</p>
            <div className="flex space-x-4 mt-4">
              {formule.icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={formule.title}
                  className="w-8 h-8" // Tailles réduites pour les SVG
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedFormule && (
        <div
          className="mt-12 p-6 bg-gray-100 rounded-lg shadow-lg formule-description"
          style={{ opacity: 0 }}
        >
          <h3 className="text-2xl font-bold mb-4">{selectedFormule.title}</h3>
          <p className="text-lg text-gray-700">{selectedFormule.description}</p>
        </div>
      )}
    </div>
  );
}