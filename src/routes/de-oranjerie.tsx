import { RevealImage } from "@/components/RevealImage";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import o1 from "@/assets/brochure/oranjerie-1.jpg.asset.json";
import o2 from "@/assets/brochure/oranjerie-2.jpg.asset.json";
import o3 from "@/assets/brochure/oranjerie-3.jpg.asset.json";
import o4 from "@/assets/brochure/oranjerie-4.jpg.asset.json";
import o5 from "@/assets/brochure/oranjerie-5.jpg.asset.json";
import o6 from "@/assets/brochure/oranjerie-6.jpg.asset.json";

export const Route = createFileRoute("/de-oranjerie")({
  head: () => ({
    meta: [
      { title: "De Oranjerie — een unieke locatie in een adembenemend parklandschap" },
      {
        name: "description",
        content:
          "De Oranjerie op het domein van Kasteel Ridderborn in Vliermaalroot: een stijlvolle ruimte over twee verdiepingen voor maximaal 40 personen, uitsluitend voor goede doelen.",
      },
      { property: "og:title", content: "De Oranjerie — een unieke locatie in een adembenemend parklandschap" },
      {
        property: "og:description",
        content:
          "Een stijlvolle plek voor inspirerende bijeenkomsten, kunstbeleving en rust in het groen, op het landgoed Ridderborn in Haspengouw.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/de-oranjerie" },
      { property: "og:image", content: o1.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: o1.url },
    ],
    links: [{ rel: "canonical", href: "/de-oranjerie" }],
  }),
  component: OranjeriePage,
});

const feiten = [
  { label: "Capaciteit", value: "Maximaal 40 personen" },
  { label: "Indeling", value: "Twee verdiepingen, verbonden door een glazen vloer" },
  { label: "Voorzieningen", value: "Moderne keuken en verzorgd sanitair" },
  { label: "Parkeren", value: "Ruime parking voor minstens 30 voertuigen" },
  { label: "Reservatie", value: "Uitsluitend overdag; avondreservaties niet mogelijk" },
  { label: "Bestemming", value: "Uitsluitend beschikbaar voor goede doelen" },
];

function OranjeriePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <header className="relative h-[86svh] flex items-center justify-center overflow-hidden">
        <RevealImage
          src={o1.url}
          alt="De Oranjerie op het domein van Kasteel Ridderborn, gelegen in het parklandschap."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative px-6 text-center text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/80">Ridderborn</p>
          <h1 className="font-display mt-6 text-4xl md:text-6xl uppercase tracking-[0.14em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            De Oranjerie
          </h1>
          <p className="mt-6 text-sm md:text-base tracking-[0.08em] text-white/85">
            Een unieke locatie in een adembenemend parklandschap
          </p>
        </div>
      </header>

      <section className="px-6 py-24 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35]">
            Een stijlvolle plek voor inspirerende bijeenkomsten, kunstbeleving en rust in het groen.
          </p>
          <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
            Beleef een bijzondere dag in de Oranjerie, gelegen in het prachtige domein van
            Kasteel Ridderborn aan de Baron A. De Heuschstraat 24 in Vliermaalroot. Deze
            stijlvolle ruimte is verdeeld over twee verdiepingen, verbonden door een glazen
            vloer die zorgt voor een overvloed aan natuurlijk licht en een open, ruimtelijk
            gevoel.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Op de benedenverdieping kunnen gasten zich laten verrassen door een unieke
            kunsttentoonstelling met werken vervaardigd uit halfedelstenen en andere
            bijzondere materialen.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-36">
        <div className="mx-auto max-w-[92rem] grid gap-4 md:grid-cols-2">
          <RevealImage
            src={o2.url}
            alt="Interieur van de Oranjerie met veel natuurlijk licht."
            loading="lazy"
            className="w-full h-[50vh] md:h-[64vh] object-cover"
          />
          <RevealImage
            src={o3.url}
            alt="Zicht op de ruime opstelling in de Oranjerie."
            loading="lazy"
            className="w-full h-[50vh] md:h-[64vh] object-cover"
          />
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-36">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground text-center">
            Praktisch
          </p>
          <dl className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {feiten.map((f) => (
              <div key={f.label} className="border-t border-foreground/15 pt-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-2 text-lg leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl md:text-3xl leading-[1.4]">
            Als extra troef kunnen bezoekers gratis genieten van een wandeling door het
            uitgestrekte park.
          </p>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Exclusieve sculpturen en bijzondere boomsoorten zijn er te bewonderen. Voor
            gasten met beperkte mobiliteit is elektrisch vervoer beschikbaar, zodat ook zij
            volop kunnen meegenieten van de natuurlijke pracht van het domein.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28 md:pb-40">
        <div className="mx-auto max-w-[92rem] grid gap-4 md:grid-cols-3">
          <RevealImage
            src={o4.url}
            alt="Detail van de kunsttentoonstelling in de Oranjerie."
            loading="lazy"
            className="w-full h-[42vh] md:h-[52vh] object-cover"
          />
          <RevealImage
            src={o5.url}
            alt="De Oranjerie vanuit het park gezien."
            loading="lazy"
            className="w-full h-[42vh] md:h-[52vh] object-cover"
          />
          <RevealImage
            src={o6.url}
            alt="Het park rond de Oranjerie met bijzondere boomsoorten."
            loading="lazy"
            className="w-full h-[42vh] md:h-[52vh] object-cover"
          />
        </div>
      </section>

      <section className="px-6 pb-28 md:pb-40 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
          Interesse?
        </p>
        <p className="font-display mt-6 text-2xl md:text-3xl">Doe hier je aanvraag.</p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
        >
          Contact
        </Link>
      </section>

      <Footer />
    </div>
  );
}
