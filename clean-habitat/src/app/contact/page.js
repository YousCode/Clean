"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { gsap } from "gsap"; // Import GSAP pour l'animation

export default function QuoteForm() {
  const [status, setStatus] = useState("");

  // Animation GSAP pour l'apparition du formulaire
  useEffect(() => {
    gsap.fromTo(
      ".quote-form",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Gestion de l'envoi du formulaire avec EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Remplacez par votre Service ID
        "YOUR_TEMPLATE_ID", // Remplacez par votre Template ID
        e.target,
        "YOUR_USER_ID" // Remplacez par votre User ID (facultatif si vous avez activé la protection par clé API)
      )
      .then(
        (result) => {
          setStatus("Demande de devis envoyée avec succès!");
        },
        (error) => {
          setStatus("Échec de l'envoi. Veuillez réessayer.");
        }
      );

    e.target.reset(); // Réinitialiser le formulaire après l'envoi
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-100">
      {/* Fond marbré */}
      <div className="absolute inset-0 bg-[url('/path/to/your-marble-texture.jpg')] bg-cover bg-center opacity-70 z-[-1]"></div>

      {/* Formulaire avec effet de verre */}
      <div className="quote-form relative max-w-lg w-full bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg z-10 border border-white/30">
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500">
          Demande de renseignements
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500"
            >
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 p-2 w-full bg-white bg-opacity-50 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 p-2 w-full bg-white bg-opacity-50 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500"
            >
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="mt-1 p-2 w-full bg-white bg-opacity-50 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="mt-1 p-2 w-full bg-white bg-opacity-50 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>

          {/* Bouton Envoyer */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition-colors"
          >
            Envoyer
          </button>

          {/* Statut de l'envoi */}
          <p className="mt-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-blue-500">
            {status}
          </p>
        </form>
      </div>
    </div>
  );
}
