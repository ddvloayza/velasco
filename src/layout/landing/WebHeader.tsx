"use client";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
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
          <Link href="#" className="hover:text-blue-400 transition">
            Inicio
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Nosotros
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Inversiones
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Servicios
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Staff
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Contáctanos
          </Link>
        </nav>
      </div>

    </header>
  );
};