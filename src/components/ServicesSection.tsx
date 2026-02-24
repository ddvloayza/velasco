"use client";

import {
  Building2,
  Briefcase,
  Users,
  UserCheck,
  FileText,
  Gavel,
  Home,
  DollarSign,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Derecho",
      highlight: "Corporativo",
      description:
        "Estructuración societaria y gobierno corporativo para empresas.",
    },
    {
      icon: Briefcase,
      title: "Derecho",
      highlight: "Empresarial",
      description:
        "Asesoría integral en la gestión y operación de negocios.",
    },
    {
      icon: Users,
      title: "Derecho",
      highlight: "Civil",
      description:
        "Resolución de conflictos, contratos y obligaciones civiles.",
    },
    {
      icon: UserCheck,
      title: "Derecho",
      highlight: "Laboral",
      description:
        "Gestión de recursos humanos, contrataciones y defensas laborales.",
    },
    {
      icon: FileText,
      title: "Derecho",
      highlight: "Tributario",
      description:
        "Planificación fiscal y defensa ante acotaciones tributarias.",
    },
    {
      icon: Gavel,
      title: "Derecho",
      highlight: "Penal",
      description:
        "Defensa especializada en delitos económicos y empresariales.",
    },
    {
      icon: Home,
      title: "Derecho Inmobiliario",
      highlight: "y registral",
      description:
        "Saneamiento físico-legal de predios y gestión ante SUNARP.",
    },
    {
      icon: DollarSign,
      title: "Inversiones en",
      highlight: "Flipping Inmobiliario",
      description:
        "Estructuración y ejecución de inversiones inmobiliarias bajo el modelo de flipping.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#071A3A] to-[#0D2B5E] py-28 text-white">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Badge */}
        <span className="inline-block border border-blue-500 text-blue-300 text-xs px-6 py-2 rounded-full tracking-wide">
          ÁREAS DE EXPERIENCIA
        </span>

        {/* Title */}
        <h2 className="mt-6 text-4xl md:text-5xl font-serif font-semibold">
          Soluciones Legales Integrales{" "}
          <span className="text-yellow-500">›</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          A través de los años, hemos expandido nuestro campo de acción para cubrir
          diversos aspectos del Derecho, brindando asesoría tanto al sector público
          como privado.
        </p>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#0F2347] border border-blue-500/30 rounded-2xl p-8 text-left transition hover:border-blue-400 hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/30 flex items-center justify-center mb-6">
                  <Icon className="text-blue-400" size={22} />
                </div>

                <h3 className="text-lg font-semibold leading-snug">
                  {service.title}{" "}
                  <span className="block text-white font-bold">
                    {service.highlight}
                  </span>
                </h3>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}