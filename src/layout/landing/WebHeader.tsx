"use client";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
      <header
          className="sticky top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-sm transition-all duration-300">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

          {/* LOGO */}
          <div className="flex items-center">
            <Image
                src="/images/logo-velasco.png"
                alt="Velasco Abogados"
                width={160}
                height={50}
                className="object-contain"
            />
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#hero" className="hover:text-blue-400 transition">
              Inicio
            </Link>
            <Link href="#nosotros" className="hover:text-blue-400 transition">
              Nosotros
            </Link>
            <Link href="#inversiones" className="hover:text-blue-400 transition">
              Inversiones
            </Link>
            <Link href="#servicios" className="hover:text-blue-400 transition">
              Servicios
            </Link>
            <Link href="#staff" className="hover:text-blue-400 transition">
              Staff
            </Link>
            <Link href="#contacto" className="hover:text-blue-400 transition">
              Contáctanos
            </Link>
          </nav>
        </div>

      </header>
  );
};