"use client";

import { useState } from "react";

export default function SimulatorSection() {
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(12);
  const [currency, setCurrency] = useState<"PEN" | "USD">("PEN");

  const rate = 0.18; // 18% anual estimado
  const profit = Math.round(amount * rate);
  const total = amount + profit;

  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] to-[#0F2B5C] py-28 text-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-4 py-2 rounded-full mb-6 tracking-wide">
            TU DINERO TRABAJANDO
          </span>

          <h2 className="text-5xl font-serif leading-tight">
            Calcula tu <br /> Crecimiento <br /> Patrimonial
          </h2>

          <p className="mt-8 text-gray-300 leading-relaxed max-w-lg">
            Utiliza nuestro simulador para estimar escenarios de inversión
            en proyectos de flipping inmobiliario, estructurados con respaldo legal
            y activos inmobiliarios.
          </p>

          <ul className="mt-8 space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs">
                ✓
              </span>
              Contratos privado y notariado.
            </li>

            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs">
                ✓
              </span>
              Cheque diferido como mecanismo de respaldo.
            </li>

            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs">
                ✓
              </span>
              Estructura legal orientada a la protección del capital.
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - SIMULATOR CARD */}
        <div className="bg-[#1B335E] rounded-2xl p-8 shadow-2xl border border-white/10">

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">
              Simulador de inversión
            </h3>

            <div className="relative flex items-center bg-white/10 rounded-full p-1 w-28 text-sm">
              <div
                className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                  currency === "PEN" ? "left-1" : "left-[calc(50%-2px)]"
                }`}
              />

              <button
                onClick={() => setCurrency("PEN")}
                className="relative z-10 flex-1 py-1 font-medium"
              >
                S/
              </button>

              <button
                onClick={() => setCurrency("USD")}
                className="relative z-10 flex-1 py-1 font-medium"
              >
                $
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Monto a invertir</span>
              <span className="text-blue-400 font-semibold">
                {currency === "PEN" ? "S/" : "$"}
                {amount.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="5000"
              max="1000000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          {/* Months */}
          <div className="mt-8">
            <p className="mb-3 text-sm">Plazo de Inversión</p>

            <div className="flex gap-3">
              {[12, 24, 36].map((m) => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`flex-1 py-2 rounded-lg text-sm ${
                    months === m
                      ? "bg-blue-600"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {m} Meses
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 bg-white/5 p-6 rounded-xl text-sm">
            <div className="flex justify-between">
              <span>Tasa anual estimada</span>
              <span className="text-blue-400 font-semibold">18%</span>
            </div>

            <div className="flex justify-between mt-3">
              <span>Ganancia Neta</span>
              <span className="text-green-400 font-semibold">
                + {currency === "PEN" ? "S/" : "$"}
                {profit.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between mt-6 text-lg font-semibold">
              <span>Retorno total</span>
              <span>
                {currency === "PEN" ? "S/" : "$"}
                {total.toLocaleString()}
              </span>
            </div>
          </div>

          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-medium">
            Quiero contactarme con un asesor
          </button>

          <p className="mt-4 text-xs text-gray-400 text-center">
            *Cálculo referencial. Sujeto a retornos.
          </p>
        </div>

      </div>
    </section>
  );
}