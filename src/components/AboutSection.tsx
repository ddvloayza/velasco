"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#F4F4F4] py-24" id="nosotros">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden ">
              <Image
                src="/images/nosotros-hero.png"
                alt="Velasco Abogados"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>


          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-semibold flex items-center gap-3">
              Nosotros
              <span className="text-yellow-500 text-3xl">›</span>
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Somos una firma legal peruana con más de{" "}
              <strong>30 años de experiencia</strong>, asesorando a clientes
              del sector público y privado en distintas áreas del Derecho.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Nuestra práctica se basa en principios de ética, rigor técnico y
              análisis preventivo, con el objetivo de{" "}
              <strong>
                brindar soluciones legales sólidas y sostenibles.
              </strong>{" "}
              El equipo del estudio cuenta con trayectoria en asuntos
              corporativos, inmobiliarios, tributarios y civiles, entre otros.
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 text-center gap-12">

          <div>
            <h3 className="text-4xl font-serif text-blue-900 font-semibold">
              +30
            </h3>
            <p className="mt-3 text-blue-800 tracking-wide text-sm">
              AÑOS DE TRAYECTORIA
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-serif text-blue-900 font-semibold">
              +5 millones
            </h3>
            <p className="mt-3 text-blue-800 tracking-wide text-sm">
              OPERACIONES INMOBILIARIAS
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-serif text-blue-900 font-semibold">
              18-30%
            </h3>
            <p className="mt-3 text-blue-800 tracking-wide text-sm">
              RANGO PROMEDIO RENTABILIDADES
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}