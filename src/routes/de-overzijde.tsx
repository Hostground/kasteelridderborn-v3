import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";

import overzijdeHero from "@/assets/brochure/overzijde-hero.jpg.asset.json";
import p33_1 from "@/assets/brochure/p33_1.jpg.asset.json";

export const Route = createFileRoute("/de-overzijde")({
  head: () => ({
    meta: [
      { title: "De Overzijde — Natuurlijk afscheid bij Kasteelhoeve Rendelborn" },
      {
        name: "description",
        content:
          "De Overzijde: een natuurlijke en landschappelijke plek voor afscheid, herdenking, urnebestemming en het uitstrooien van as aan de overzijde van Kasteel Ridderborn.",
      },
      { property: "og:title", content: "De Overzijde — Natuurlijk afscheid bij Kasteelhoeve Rendelborn" },
      {
        property: "og:description",
        content:
          "Een plek voor het leven, van welkom tot afscheid. Bomen, grasland en stilte aan de overzijde van Ridderborn.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/de-overzijde" },
      { property: "og:image", content: overzijdeHero.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: overzijdeHero.url },
    ],
    links: [{ rel: "canonical", href: "/de-overzijde" }],

  }),
  component: DeOverzijdePage,
});

function DeOverzijdePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={overzijdeHero.url}
          alt="Stil weidelandschap bij zonsopgang met ochtendnevel en een smal pad dat tussen hoge bomen wegloopt."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative mx-auto max-w-7xl w-full px-6 pb-16 pt-40">
          <p className="eyebrow text-white/80">Kasteelhoeve Rendelborn</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95] text-white max-w-3xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            De <span className="italic">Overzijde.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl font-light">
            Een plek voor het leven, van welkom tot afscheid — aan de overzijde
            van Ridderborn.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Een landschappelijke gedachte" title="Natuurlijk afscheid aan de" italic="overzijde." />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Aan de overzijde van Ridderborn liggen zestien hectare graslanden. Onze
              visie is om, samen met de bevoegde instanties, te onderzoeken of een
              groot deel daarvan op termijn op een zeer natuurlijke en
              landschappelijke wijze kan worden ingericht als plek voor bestemming
              van de urne en het uitstrooien van as. Er is vandaag nog niets
              beslist of goedgekeurd: het is een gedachte die wij zorgvuldig willen
              onderzoeken, voor zover dit juridisch en ruimtelijk mogelijk is.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              De naam <span className="font-medium text-foreground">De Overzijde</span> draagt voor ons een mooie dubbele betekenis.
              Het is letterlijk de overzijde van Kasteel Ridderborn, maar verwijst
              tegelijkertijd heel subtiel naar de overgang die bij afscheid en
              overlijden hoort.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src={p33_1.url}
              alt="Bosrijk landschap met hoge bomen en bemoste grond bij Kasteelhoeve Rendelborn."
              className="aspect-[4/3] object-cover w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Persoonlijke aanleiding */}
      <section className="py-24 md:py-32 px-6 bg-secondary/40">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
            <div className="bg-background rounded-2xl p-8 md:p-10 border border-border">
              <p className="eyebrow text-accent">Waarom dit idee is ontstaan</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                De aanleiding voor dit initiatief is voor ons ook persoonlijk.
                Enige tijd geleden vond in onze Orangerie een afscheid plaats
                voor Els Smeyers. Wij waren persoonlijk diep betrokken bij haar
                overlijden.
              </p>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Ongeveer honderd mensen kwamen samen en wandelden daarna door
                het park. Wij hadden nooit voorzien dat Ridderborn hiervoor gebruikt
                zou worden, maar juist die dag hebben wij ervaren hoeveel een
                natuurlijke en mooie omgeving kan betekenen op een belangrijk en
                verdrietig moment in een mensenleven.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <SectionHeading eyebrow="Een persoonlijke ervaring" title="De betekenis van" italic="stilte en schoonheid." />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Tegelijkertijd hebben wij door de jaren heen gezien hoe mooi het
              domein kan zijn bij vreugdevolle momenten zoals een huwelijk, een
              geboorte of het verwelkomen van een kind.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Daaruit ontstond eigenlijk een heel eenvoudige gedachte:
              <span className="block mt-4 font-display text-2xl md:text-3xl text-primary italic leading-snug">
                een plek voor het leven, van welkom tot afscheid.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Richting" title="Een natuurlijk landschap van" italic="bomen, grasland en stilte." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Natuurlijk & landschappelijk",
                b: "Bomen, grasland en stilte, passend bij het landelijke karakter van Kasteelhoeve Rendelborn en de omliggende gronden.",
              },
              {
                t: "Juridisch & ruimtelijk verantwoord",
                b: "Samen met de Stad onderzoeken we welke vormen mogelijk zijn binnen de geldende wet- en regelgeving.",
              },
              {
                t: "Een plek voor het leven",
                b: "Van welkom tot afscheid: een omgeving die troost biedt bij verdriet én bijzonder is bij feestelijke momenten.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-secondary/40 rounded-xl p-7 border border-border">
                <h3 className="font-display text-2xl text-primary">{c.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/40 text-center">
        <p className="eyebrow text-accent">De Overzijde</p>
        <h2 className="font-display text-3xl md:text-5xl mt-5">
          Meer weten over <span className="italic text-primary">dit initiatief?</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Wij onderzoeken samen met betrokken partners de mogelijkheden. Neem
          contact op voor vragen of om op de hoogte te blijven.
        </p>
        <Link
          to="/contact"
          className="inline-flex mt-10 items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm hover:bg-primary/90 transition"
        >
          Neem contact op →
        </Link>
      </section>

      <Footer />
    </div>
  );
}
