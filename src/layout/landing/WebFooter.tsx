"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2255A4] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Velasco Abogados"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-white/80 transition">
              Inicio
            </Link>
            <Link href="#" className="hover:text-white/80 transition">
              Nosotros
            </Link>
            <Link href="#" className="hover:text-white/80 transition">
              Servicios
            </Link>
            <Link href="#" className="hover:text-white/80 transition">
              Staff
            </Link>
            <Link href="#" className="hover:text-white/80 transition">
              Contáctanos
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/80 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white/80 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white/80 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm text-white/80">
          Velasco Abogados SAC - Todos los derechos reservados
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.65.86 5.1 2.32 7.08L4 29l7.08-2.29a12 12 0 0 0 4.96 1.04h.01C22.59 27.75 28 22.34 28 15.71 28 9.08 22.59 3.67 16.04 3.67zm0 21.8c-1.9 0-3.76-.51-5.39-1.47l-.38-.23-4.2 1.36 1.37-4.1-.25-.4a9.8 9.8 0 0 1-1.53-5.23c0-5.41 4.4-9.81 9.81-9.81s9.81 4.4 9.81 9.81-4.4 9.81-9.81 9.81zm5.53-7.36c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      </a>
    </footer>
  );
};