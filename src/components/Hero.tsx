"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-home.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

        <div className="max-w-2xl">

          {/* Title */}
          <h1 className="text-white font-light leading-tight">
            <span className="block text-5xl md:text-6xl font-serif">
              Asesoría Legal
            </span>

            <span className="flex items-center gap-4 mt-4 text-4xl md:text-5xl font-light text-gray-300">
              <span className="text-yellow-500 text-3xl">›</span>
              desde 1998
            </span>
          </h1>

          {/* Divider */}
          <div className="mt-6 h-[2px] w-32 bg-blue-600" />

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="#"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Contáctanos
            </Link>

            <Link
              href="#"
              className="px-6 py-3 rounded-full bg-blue-500/80 hover:bg-blue-600 transition font-medium"
            >
              Inversiones
            </Link>
          </div>

        </div>
      </div>



    </section>
  );
}