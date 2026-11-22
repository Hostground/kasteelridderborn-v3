import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RevealImage } from "@/components/RevealImage";
import { siteConfig } from "@/content/site-config";

import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";
import p3_1 from "@/assets/brochure/p3_1.jpg.asset.json";
import p18_1 from "@/assets/brochure/p18_1.jpg.asset.json";

export const Route = createFileRoute("/vacatures")({
  head: () => ({
    meta: [
      { title: "Vacatures — Samen bouwen aan de toekomst van Ridderborn" },
      { name: "description", content: "Ridderborn zoekt een beheerdersstel voor Kasteel Ridderborn, AngelPark en Shabos, en een ondernemend stel voor Kasteelhoeve Rendelborn." },
      { property: "og:title", content: "Vacatures — Samen bouwen aan de toekomst van Ridderborn" },
      { property: "og:description", content: "Twee oproepen voor betrokken, ondernemende stellen op het landgoed Ridderborn in Haspengouw." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VacaturesPage,
});

type Vacature = { id: string; label: string; title: string; img: string; alt: string; paragraphs: string[]; links?: { href: string; label: string }[] };

const vacatures: Vacature[] = [
  {
    id: "beheerdersstel",
    label: "Vacature 1",
    title: "Beheerdersstel voor Kasteel Ridderborn, AngelPark en Shabos",
    img: p3_1.url,
    alt: "Zonovergoten bospad tussen hoge bomen in het park van Ridderborn.",
    paragraphs: [
      "Wij zoeken een betrokken, ondernemend stel dat wil helpen bij het beheer en de verdere ontwikkeling van Kasteel Ridderborn, AngelPark en Shabos. Een bijzondere omgeving met aandacht voor natuur, kunst, stilte en gastvrijheid.",
      "We zoeken mensen die praktisch kunnen werken, initiatief nemen en op termijn verantwoordelijkheid willen dragen.",
      "Het gaat niet om mede-eigendom. Eventuele woonmogelijkheden en de vorm van samenwerking worden persoonlijk besproken en zijn afhankelijk van de geldende mogelijkheden en vergunningen.",
    ],
    links: [
      { href: "https://www.angelpark.be", label: "www.angelpark.be" },
      { href: "https://www.shabos.be", label: "www.shabos.be" },
    ],
  },
  {
    id: "rendelborn",
    label: "Vacature 2",
    title: "Ondernemend stel voor Kasteelhoeve Rendelborn",
    img: p18_1.url,
    alt: "Akker en hoeveland bij Kasteelhoeve Rendelborn in het zachte ochtendlicht.",
    paragraphs: [
      "Voor Kasteelhoeve Rendelborn zoeken wij een ondernemend stel met liefde voor landbouw, natuur en dieren.",
      "Er zijn landbouwgronden, weilanden, stallen en ruimte om ideeën te onderzoeken rond teelten, natuurbeheer, educatie en het houden van boerderijdieren in miniformaat, zoals koeien, paarden, ezels, varkens, schapen en geiten.",
      "We zoeken mensen die zelfstandig werken, verantwoordelijkheid nemen en iets willen opbouwen. Ook hier gaat het niet om mede-eigendom; de praktische en juridische invulling bespreken we samen.",
    ],
  },
];

function VacaturesPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHero img={kasteel.url} alt="Kasteel Ridderborn tussen weidse grasvelden en oude bomen." eyebrow="Vacatures" title="Samen bouwen aan de toekomst van Ridderborn" />

      {!siteConfig.vacaturesActief ? (
        <section className="px-6 py-28 md:py-40 text-center">
          <p className="font-display text-2xl md:text-3xl">Er zijn momenteel geen openstaande vacatures.</p>
          <Link to="/contact" className="mt-10 inline-flex text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors">Contact</Link>
        </section>
      ) : (
        <>
          <section className="px-6 py-24 md:py-36">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-2xl md:text-3xl leading-[1.4]">
                Ridderborn groeit verder. Daarvoor zoeken we mensen die mee willen zorgen voor deze plek.
              </p>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Hieronder staan twee afzonderlijke oproepen. De precieze woon- en werkafspraken liggen nog niet vast en bespreken we persoonlijk.
              </p>
            </div>
          </section>

          {vacatures.map((v) => (
            <section key={v.id} className="pb-24 md:pb-40">
              <figure className="overflow-hidden">
                <RevealImage src={v.img} alt={v.alt} loading="lazy" className="h-[55svh] md:h-[75vh] w-full object-cover" />
              </figure>
              <div className="mx-auto max-w-2xl px-6 pt-14 md:pt-20 text-center">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">{v.label}</p>
                <h2 className="font-display mt-5 text-3xl md:text-4xl leading-[1.15]">{v.title}</h2>
                {v.paragraphs.map((p) => (
                  <p key={p} className="mt-6 text-lg text-muted-foreground leading-relaxed">{p}</p>
                ))}
                {v.links && (
                  <p className="mt-8 text-sm text-muted-foreground">
                    {v.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && " · "}
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">{l.label}</a>
                      </span>
                    ))}
                  </p>
                )}
                <a
                  href={`/contact?onderwerp=vacature&vacature=${v.id}`}
                  className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-foreground/25 pb-2 hover:border-foreground transition-colors"
                >
                  Reageer op deze vacature <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          ))}

          <section className="px-6 pb-28 md:pb-40">
            <div className="mx-auto max-w-2xl text-center border-t border-border pt-14">
              <p className="font-display text-xl md:text-2xl">Hoe reageren?</p>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Vertel ons kort wie je bent, welke ervaring je hebt en wat je graag zou willen bijdragen.
              </p>
            </div>
          </section>
        </>
      )}
      <Footer />
    </div>
  );
}
