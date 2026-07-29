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
      { title: "Villages Piranhas · Condomínio de alto padrão em Piranhas/SE" },
      {
        name: "description",
        content:
          "Villages Piranhas (Piranhas/SE): casas mobiliadas a partir de R$ 550 mil, lotes a partir de R$ 70 mil e aluguel de temporada a partir de R$ 800/diária em condomínio fechado com segurança 24h.",
      },
      { property: "og:title", content: "Villages Piranhas · História, charme e exclusividade" },
      {
        property: "og:description",
        content:
          "Condomínio fechado em Piranhas/SE. Casas mobiliadas, lotes e aluguel de temporada com infraestrutura de alto padrão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://villas-piranhas-experience.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Vista aérea do Villages Piranhas em Piranhas/SE" },
      { property: "og:url", content: "https://villas-piranhas-experience.lovable.app/" },
      { name: "twitter:image", content: "https://villas-piranhas-experience.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: "Villages Piranhas · História, charme e exclusividade" },
      { name: "twitter:description", content: "Condomínio fechado em Piranhas/SE. Casas mobiliadas, lotes e aluguel de temporada." },
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
