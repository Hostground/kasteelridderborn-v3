import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { KaartPin } from "@/components/KaartPin";
import { Wordmark } from "@/components/Wordmark";

import kaart from "@/assets/brochure/ferrariskaart-vliermaal-1771.jpg.asset.json";
import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";
import overzijdeHero from "@/assets/brochure/overzijde-hero.jpg.asset.json";
import page22 from "@/assets/brochure/page_22.jpg.asset.json";
import p3_1 from "@/assets/brochure/p3_1.jpg.asset.json";
import p5_1 from "@/assets/brochure/DSC_8275.jpg.asset.json";
import p3_2 from "@/assets/brochure/p3_2.jpg.asset.json";
import avond from "@/assets/avond-landgoed.jpg";
import p18_1 from "@/assets/brochure/p18_1.jpg.asset.json";
import p29_1 from "@/assets/brochure/p29_1.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridderborn — Een bijzondere plek in het hart van Haspengouw" },
      {
        name: "description",
        content:
          "Kasteel Ridderborn en zijn landgoed in Haspengouw: park, AngelPark, de Orangerie, Kasteelhoeve Rendelborn, het landschap, Shabos en Waterberg. Eén landgoed, één verhaal.",
      },
      { property: "og:title", content: "Ridderborn — Een bijzondere plek in het hart van Haspengouw" },
      {
        property: "og:description",
        content:
          "Een landgoed dat zich langzaam ontvouwt. Verschillende plekken, samen één verhaal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: kasteel.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: kasteel.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: "Ridderborn",
          description:
            "Landgoed in Haspengouw met park en bos, landbouwgronden, graslanden, erfgoed en kunst.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vliermaalroot (Hasselt)",
            addressRegion: "Limburg",
            addressCountry: "BE",
          },
        }),
      },
    ],
  }),
  component: Index,
});

