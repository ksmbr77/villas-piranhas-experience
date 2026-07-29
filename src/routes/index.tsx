import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Differentiators } from "@/components/site/Differentiators";
import { Houses } from "@/components/site/Houses";
import { Rental } from "@/components/site/Rental";
import { Lots } from "@/components/site/Lots";
import { Amenities } from "@/components/site/Amenities";
import { VideoSection } from "@/components/site/VideoSection";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casas Villages Piranhas · Condomínio de alto padrão em Piranhas/AL" },
      {
        name: "description",
        content:
          "Villages Piranhas: casas e lotes de alto padrão em condomínio fechado, com segurança 24h, natureza preservada e infraestrutura completa de lazer.",
      },
      { property: "og:title", content: "Casas Villages Piranhas · Viver bem em cada detalhe" },
      {
        property: "og:description",
        content:
          "Condomínio residencial exclusivo em Piranhas. Casas, lotes e aluguel com padrão internacional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Differentiators />
        <Houses />
        <Rental />
        <Lots />
        <Amenities />
        <VideoSection />
        <Gallery />
        <Location />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
