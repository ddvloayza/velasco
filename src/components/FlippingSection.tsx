"use client";

import Image from "next/image";

export default function FlippingSection() {
  return (
    <section className="bg-[#F4F4F4] py-28">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Top Label */}
        <p className="text-sm tracking-widest text-blue-800 uppercase">
          Velasco Inversiones
        </p>

        {/* Title */}
        <h2 className="mt-4 text-5xl font-serif text-blue-900 font-semibold">
          Flipping Inmobiliario
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Con más de 30 años de experiencia en las diversas ramas del Derecho
          en el Perú, hemos trabajado con clientes del sector público y privado,
          acompañando a empresas como:
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/images/flipping1.jpg"
              alt="Adquisición Estratégica"
              width={400}
              height={500}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-8 left-8 right-8 text-left text-white">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold mb-6">
                1
              </div>
              <h3 className="text-2xl font-serif font-semibold">
                Adquisición Estratégica
              </h3>
              <p className="mt-3 text-sm text-gray-200">
                Identificamos oportunidades por debajo del precio de mercado
                con saneamiento legal complejo.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/images/flipping2.jpg"
              alt="Remodelación Total"
              width={400}
              height={500}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-8 left-8 right-8 text-left text-white">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold mb-6">
                2
              </div>
              <h3 className="text-2xl font-serif font-semibold">
                Remodelación Total
              </h3>
              <p className="mt-3 text-sm text-gray-200">
                Saneamiento, arquitectura y acabados para maximizar el valor
                de reventa en tiempo récord.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/images/flipping3.jpg"
              alt="Venta y Retorno"
              width={400}
              height={500}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-8 left-8 right-8 text-left text-white">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold mb-6">
                3
              </div>
              <h3 className="text-2xl font-serif font-semibold">
                Venta y Retorno
              </h3>
              <p className="mt-3 text-sm text-gray-200">
                Comercialización y distribución de utilidades a los
                inversionistas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}