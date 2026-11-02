import type { ReactElement } from "react";

import {
  MarkAngelpark,
  MarkAntwerpen,
  MarkKasteel,
  MarkOranjerie,
  MarkOverzijde,
  MarkRendelborn,
  MarkShabos,
  MarkWaterberg,
} from "@/components/Marks";

export type Place = {
  label: string;
  to: string;
  mark: (p: { className?: string }) => ReactElement;
};

/** De werelden onder RIDDERBORN, in de volgorde waarin het verhaal zich ontvouwt. */
export const places: Place[] = [
  { label: "Kasteel Ridderborn", to: "/kasteel-ridderborn", mark: MarkKasteel },
  { label: "AngelPark", to: "/angelpark", mark: MarkAngelpark },
  { label: "De Orangerie", to: "/de-oranjerie", mark: MarkOranjerie },
  { label: "Kasteelhoeve Rendelborn", to: "/ridderboeren", mark: MarkRendelborn },
  { label: "Landschap & natuur", to: "/de-overzijde", mark: MarkOverzijde },
  { label: "Shabos", to: "/shabos", mark: MarkShabos },
  { label: "Waterberg", to: "/waterberg", mark: MarkWaterberg },
  { label: "Antwerpen — Venue Fourteen", to: "/antwerpen", mark: MarkAntwerpen },
];
