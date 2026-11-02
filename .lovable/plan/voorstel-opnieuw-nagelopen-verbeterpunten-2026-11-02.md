# Voorstel opnieuw nagelopen — verbeterpunten

De homepage, het menu, Ons verhaal en de footer volgen het voorstel al grotendeels. Dit zijn de punten die nog beter kunnen.

## 1. De Overzijde-pagina (belangrijkste punt)
Deze pagina presenteert de afscheidsplek nu als iets dat al bestaat: titel "Natuurlijk afscheid bij Kasteelhoeve Rendelborn", met "urnebestemming en het uitstrooien van as" in de beschrijving. Dat gaat in tegen het voorstel.
- Pagina herschrijven tot **landschap & natuur aan de overzijde**: akkers, weilanden, biodiversiteit, "ruimte om te blijven ademen".
- Afscheid alleen nog als één rustige alinea "Een plek voor afscheid", met de vaste zin: *idee in ontwikkeling, onderzocht in overleg met de betrokken instanties*.
- Zoekmachinetitel en -beschrijving mee aanpassen.

## 2. Menu "De plekken" volgt de wandeling
Volgorde en namen gelijktrekken met het voorstel: Kasteel Ridderborn · AngelPark · De Orangerie · Kasteelhoeve Rendelborn · Landschap & natuur (De Overzijde) · Shabos · Waterberg. Nu staat er "Angelpark" en "De Oranjerie" (spelling wisselt met de homepage).

## 3. Homepage: kleine ontbrekende zinnen
Kort houden, maar de sterkste zinnen uit het voorstel terugzetten:
- Opening eindigt met een los, klein **"Ridderborn."**
- Kasteel: "Kunst en natuur lopen hier vanzelf in elkaar over."
- Orangerie: "Juist bij zulke momenten kan een mooie, rustige omgeving iets betekenen wat moeilijk in woorden is uit te drukken."
- Rendelborn: afsluiten met "Niet terug naar vroeger. Wel opnieuw begrijpen wat de grond ons kan geven." (nu half).
- Waterberg: "Een stem, een instrument, een koor of een gong…" (koor toevoegen).

## 4. Vervolgpagina's: de lange teksten een thuis geven
Het voorstel noemt de lange teksten "materiaal voor vervolgpagina's". Per pagina nakijken en aanvullen:
- Kasteel Ridderborn: park, kunst, halfedelstenen, glazen hartjes.
- Waterberg: vier ruimtes, oude gewelven vs. jongere betonnen ruimtes, geluid.
- Rendelborn: 1.500 m², kleinschalige landbouw, lokale voeding.
- Ons verhaal: volledige tekst "Meer dan twintig jaar" incl. "Een verborgen detail waar iemand onverwacht blij van wordt."

## 5. Rust en consistentie
- Alle pagina's controleren op tegels/kaders en knoppenbalken; waar mogelijk vervangen door één grote foto per hoofdstuk, daarna tekst.
- Zelfde zachte foto-verschijning (van de homepage) ook op de vervolgpagina's.
- Mobiel nakijken: dezelfde rustige volgorde, geen tekst over drukke foto's.

## Technische details
- Bestanden: `src/routes/de-overzijde.tsx`, `src/components/places.ts`, `src/routes/index.tsx`, de vervolgpagina's, hergebruik van `RevealImage`.
- Geen nieuwe pagina's; bestaande adressen blijven gelijk.
- Controle met de statische build en een Playwright-doorloop desktop + mobiel.
