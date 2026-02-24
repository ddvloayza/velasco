import type { Metadata } from "next";
import Hero from "@/components/Hero";
import React from "react";
import { Header } from "@/layout/landing/WebHeader";
import { Footer } from "@/layout/landing/WebFooter";
import AboutSection from "@/components/AboutSection";
import FlippingSection from "@/components/FlippingSection";
import SimulatorSection from "@/components/SimulatorSection";
import ServicesSection from "@/components/ServicesSection";
import StaffSection from "@/components/StaffSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";


export default function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <Header />

      <Hero />
      <AboutSection/>
      <FlippingSection/>
        <SimulatorSection/>
        <ServicesSection/>
        <StaffSection/>
        <ClientsSection/>
        <ContactSection/>
        <MapSection/>
      <Footer />

    </div>
  );
}
