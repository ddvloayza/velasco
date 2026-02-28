"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";


export default function ContactSection() {

  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setSuccess(true);
      formRef.current?.reset();

      setTimeout(() => setSuccess(false), 4000);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-[#F4F4F4] py-16" id="contacto">
      <div className="max-w-6xl mx-auto px-8">

        <div className="rounded-2xl overflow-hidden border-2 border-blue-500 shadow-xl grid md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#274B8F] text-white p-12">

            <span className="inline-block border border-white text-white text-xs px-5 py-2 rounded-full tracking-wide mb-6">
              CONTÁCTANOS
            </span>

            <h2 className="text-3xl md:text-4xl font-serif leading-snug">
              ¿Tienes dudas? Déjanos tus datos y nos pondremos en contacto
            </h2>

            <div className="mt-10 space-y-6 text-sm">

              <div className="flex items-center gap-4">
                <Phone size={18} />
                <span>+51 976 540 751</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} />
                <span>velascoabogados3@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin size={18} />
                <span>Avenida La Encalada 1257 - Surco</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-12">

            <form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Tucorreo@email.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Celular
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+51 ..."
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Mensaje"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E3A8A] hover:bg-[#274B8F] transition text-white py-3 rounded-lg font-medium"
              >
                Enviar
              </button>

              {success && (
                <p className="text-green-600 text-sm mt-3">
                  Mensaje enviado correctamente ✔
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}