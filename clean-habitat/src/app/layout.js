// src/app/layout.js

"use client"; // Ajoutez ceci pour indiquer que c'est un composant client

import './globals.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import cleanHabitatLogo from './assets/CleanHabitatLogo.svg';

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  useEffect(() => {
    // Animation ScrollTrigger ici
    ScrollTrigger.create({
      trigger: '.service-card',
      start: 'top 80%',
      onEnter: () => gsap.fromTo('.service-card', { opacity: 0 }, { opacity: 1, duration: 1 }),
    });
  }, []);

  return (
    <html lang="fr">
      <body className="antialiased">
        <header className="bg-white backdrop-blur-md bg-opacity-80 fixed top-0 w-full z-10 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center py-4">
            <Link href="/">
              <Image
                src={cleanHabitatLogo}
                alt="Logo Clean Habitat"
                width={150}
                height={80}
                priority
              />
            </Link>
            <nav className="flex space-x-4 text-gray-700">
              <Link href="/" className="hover:text-teal-500">Accueil</Link>
              <a href="#services" className="hover:text-teal-500">Services</a> {/* Lien vers la section */}
              <a href="#about" className="hover:text-teal-500">À propos</a>
              <a href="#contact" className="hover:text-teal-500">Contact</a>
            </nav>
          </div>
        </header>
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}