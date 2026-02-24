"use client";

import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    "/images/clients/conalvias.png",
    "/images/clients/hmv.png",
    "/images/clients/chancay.png",
    "/images/clients/haskoning.png",
    "/images/clients/cechriza.png",
    "/images/clients/lapivet.png",
    "/images/clients/totalcheck.png",
    "/images/clients/mannucci.png",
    "/images/clients/derby.png",
    "/images/clients/itineris.png",
    "/images/clients/reims.png",
    "/images/clients/vivir.png",
  ];

  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Title with lines */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-px bg-blue-300 flex-1 max-w-xs" />
          <h2 className="text-3xl font-serif text-blue-900 font-semibold">
            Algunos de Nuestros <span className="font-bold">Clientes</span>{" "}
            <span className="text-yellow-500">›</span>
          </h2>
          <div className="h-px bg-blue-300 flex-1 max-w-xs" />
        </div>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
          Con más de 25 años de experiencia en las diferentes ramas del Derecho en el Perú,
          hemos trabajado con diferentes clientes, tanto privados como empresas:
        </p>

        {/* Logos Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center  transition duration-300"
            >
              <Image
                src={logo}
                alt="Cliente"
                width={140}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}