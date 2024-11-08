"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import cleanHabitatLogo from "./assets/CleanHabitatLogo.svg";
import savLogo from "./assets/SAV.svg";

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".service-card",
      start: "top 80%",
      onEnter: () => gsap.fromTo(".service-card", { opacity: 0 }, { opacity: 1, duration: 1 }),
    });
  }, []);

  return (
    <html lang="fr">
      <Head>
        <title>Clean Habitat - Services de nettoyage et entretien</title>
        <meta
          name="description"
          content="Clean Habitat offre des services d'entretien, de nettoyage et de plomberie de qualité. Nous nous engageons à maintenir votre habitat propre et en bon état."
        />
        <meta name="keywords" content="nettoyage, entretien, plomberie, services, Clean Habitat" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Clean Habitat - Services de nettoyage et entretien" />
        <meta property="og:description" content="Découvrez nos services de nettoyage, entretien et plomberie pour un habitat propre et bien entretenu." />
        <meta property="og:url" content="https://cleanhabitatsolutions.com" />
        <meta property="og:type" content="website" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <body className="antialiased">
        <header className="bg-white backdrop-blur-md bg-opacity-80 fixed top-0 w-full z-10 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center py-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={cleanHabitatLogo}
                alt="Logo Clean Habitat"
                className="w-28 h-auto md:w-32"
                priority
              />
            </Link>

            <div className="flex justify-center flex-grow relative group">
              <Link
                href="https://www.economie.gouv.fr/cedef/services-a-la-personne"
                className="flex-shrink-0"
              >
                <Image
                  src={savLogo}
                  alt="Logo SAV"
                  className="w-16 h-auto md:w-20"
                  priority
                />
              </Link>

              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 text-sm p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-green-400">
                <p className="text-white">Service à la personne : soutien à domicile et accompagnement des personnes âgées.</p>
                <a
                  href="https://www.economie.gouv.fr/cedef/services-a-la-personne"
                  className="text-white hover:text-gray-200 underline mt-2 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  En savoir plus
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-teal-500 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex space-x-4 text-gray-700 flex-shrink-0">
              <Link href="/" className="hover:text-teal-500">Accueil</Link>
              <a href="#services" className="hover:text-teal-500">Services</a>
              <a href="#about" className="hover:text-teal-500">À propos</a>
              <Link href="/contact" className="hover:text-teal-500">Contact</Link>
            </nav>
          </div>

          {menuOpen && (
            <nav className="md:hidden bg-white w-full shadow-md">
              <ul className="flex flex-col items-center space-y-4 py-4">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    Accueil
                  </Link>
                </li>
                <li>
                  <a href="#services" className="text-gray-700 hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    À propos
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-teal-500" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}