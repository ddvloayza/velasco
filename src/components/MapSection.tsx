"use client";

import Image from "next/image";

export default function MapSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[350px] md:h-[450px]">
        <Image
          src="/images/maps.png"
          alt="Ubicación Velasco Abogados"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}