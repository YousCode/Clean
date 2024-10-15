// src/app/contact.js
"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisation d'EmailJS pour envoyer l'email
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Remplacez par votre Service ID
        'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
        e.target,
        'YOUR_USER_ID' // Remplacez par votre User ID (facultatif si vous avez activé la protection par clé API)
      )
      .then(
        (result) => {
          setStatus('Message envoyé avec succès!');
        },
        (error) => {
          setStatus('Échec de l\'envoi. Veuillez réessayer.');
        }
      );

    e.target.reset(); // Réinitialiser le formulaire après l'envoi
  };

  return (
    <div className="max-w-lg mx-auto py-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">Nom</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700"
        >
          Envoyer
        </button>
        <p className="mt-4 text-center">{status}</p>
      </form>
    </div>
  );
}