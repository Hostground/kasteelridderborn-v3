import { RevealImage } from "@/components/RevealImage";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import kasteel from "@/assets/brochure/kasteel.jpg.asset.json";
import p35_1 from "@/assets/brochure/p35_1.jpg.asset.json";
import p5_2 from "@/assets/brochure/p5_2.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plan je bezoek aan Landgoed Ridderborn" },
      {
        name: "description",
        content:
          "Plan een bezoek aan Landgoed Ridderborn, organiseer een retreat, verblijf in Shabos of word Vriend van Angelpark. Neem contact op via het formulier.",
      },
      { property: "og:title", content: "Contact — Plan je bezoek aan Landgoed Ridderborn" },
      {
        property: "og:description",
        content:
          "We ontmoeten je graag in Haspengouw. Stuur ons een bericht via het contactformulier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: kasteel.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: kasteel.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],

  }),
  component: ContactPage,
});

const locations = [
  {
    title: "Ridderborn — Kernsite",
    line1: "Vliermaalroot (Hasselt)",
    line2: "Domein, landbouw & natuur",
    img: kasteel,
  },
  {
    title: "Shabos — Verblijf",
    line1: "Fazantstraat 22, Hoeselt",
    line2: "Logies tot 6 personen",
    img: p35_1,
  },
  {
    title: "Waterberg",
    line1: "Berg, Tongeren – Borgloon",
    line2: "Tentoonstelling & natuur",
    img: p5_2,
  },
];

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <header className="pt-40 pb-16 px-6 text-center">
        <p className="eyebrow text-accent">Contact</p>
        <h1 className="font-display mt-4 text-5xl md:text-7xl leading-[0.95]">
          Discover the <span className="italic text-primary">art of being.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Plan een bezoek, organiseer een retreat, verblijf in Shabos of word 'Vriend
          van Angelpark'. We ontmoeten je graag in Haspengouw.
        </p>
      </header>

      {/* Formulier + locaties */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
          <div className="lg:col-span-6 space-y-6">
            {locations.map((l) => (
              <div
                key={l.title}
                className="flex gap-5 items-center rounded-xl overflow-hidden border border-border bg-card p-4"
              >
                <RevealImage
                  src={l.img.url}
                  alt={l.title}
                  className="h-20 w-28 object-cover rounded-lg shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl text-primary">{l.title}</h3>
                  <p className="text-sm text-foreground/80 mt-1">{l.line1}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.line2}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h3 className="font-display text-xl text-primary">Liever rechtstreeks?</h3>
              <a
                href="mailto:hello@ridderborn.be"
                className="mt-2 inline-block text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-primary transition-colors"
              >
                hello@ridderborn.be
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function useTurnstileSiteKey() {
  const [siteKey, setSiteKey] = useState("");

  useEffect(() => {
    const key = (window as unknown as { SITE_CONFIG?: { turnstileSiteKey?: string } })
      .SITE_CONFIG?.turnstileSiteKey;
    if (!key) return;
    setSiteKey(key);

    const src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return siteKey;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const turnstileSiteKey = useTurnstileSiteKey();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        body: new FormData(form),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(json.error || "Verzenden mislukt.");
        setStatus("error");
        (window as unknown as { turnstile?: { reset: () => void } }).turnstile?.reset();
      }
    } catch {
      setErrorMsg("Verzenden mislukt. Mail ons rechtstreeks via hello@ridderborn.be.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <div className="font-display text-3xl text-primary">Bedankt!</div>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm border border-foreground/20 hover:border-foreground/60 transition-colors px-5 py-2.5 rounded-full"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5"
    >
      <h2 className="font-display text-2xl text-primary">Stuur ons een bericht</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Naam
        </label>
        <input id="name" name="name" type="text" required maxLength={200} className={inputCls} placeholder="Je naam" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          E-mailadres
        </label>
        <input id="email" name="email" type="email" required className={inputCls} placeholder="je@email.be" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          className={inputCls}
          placeholder="Waarmee kunnen we je helpen?"
        />
      </div>

      {/* Honeypot — onzichtbaar voor mensen, valt bots op */}
      <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Laat dit veld leeg
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Cloudflare Turnstile — verschijnt zodra er een site key in site-config.js staat */}
      {turnstileSiteKey && (
        <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />
      )}



      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Verzenden…" : "Verstuur bericht →"}
      </button>
    </form>
  );
}
