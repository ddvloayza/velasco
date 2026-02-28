"use client";

import Image from "next/image";

export default function StaffSection() {
  const staff = [
      {
      name: "Yuri Velasco Velezmoro",
      role: "--- In memoriam ---",
      description: "Socio Fundador y Abogado",
      image: "/images/staff/yuri-velasco.png",
    },
    {
      name: "Iván Velasco Velezmoro",
      role: "",
      description:
        "Socio Fundador y Abogado principal del Estudio. Con 33 años de experiencia como Abogado colegiado, y 35 años trabajando en el área legal.",
      image: "/images/staff/ivan-velasco.png",
    },
    {
      name: "Gerardo Widawsky Kleinberg",
      role: "",
      description:
        "Abogado penalista con 35 años de experiencia en casos de Derecho Penal.",
      image: "/images/staff/gerardo-widauski.png",
    },
    {
      name: "José León Alva",
      role: "",
      description:
        "Abogado procesalista, con 15 años de experiencia en el rubro.",
      image: "/images/staff/jose-leon.png",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-28" id="staff">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Title */}
        <h2 className="text-4xl font-serif font-semibold text-blue-900">
          Nuestro <span className="font-bold">Staff</span>{" "}
          <span className="text-yellow-500">›</span>
        </h2>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {staff.map((member, index) => (
            <div key={index} className="text-center">

              {/* Image */}
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={176}
                  height={176}
                  className="object-cover object-[center_10%] w-full h-full"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-bold text-blue-900 leading-snug">
                {member.name}
              </h3>

              {/* Role (if exists) */}
              {member.role && (
                <p className="mt-3 text-sm text-gray-600">
                  {member.role.includes("memoriam") ? (
                    <span className="italic text-gray-500">— In memoriam —</span>
                  ) : (
                    member.role
                  )}
                </p>
              )}

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}