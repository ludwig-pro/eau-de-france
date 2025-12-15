import { CommuneCard } from "./CommuneCard";

const EXAMPLE_PARAMETERS = [
  { name: "Nitrates", value: "18 mg/L", status: "ok" as const },
  { name: "Pesticides", value: "conformes", status: "ok" as const },
  { name: "Bactéries", value: "0 /100mL", status: "ok" as const },
];

/**
 * Carte exemple pour l'onboarding
 * Composition de CommuneCard avec des données fictives
 */
export function ExampleCommuneCard() {
  return (
    <CommuneCard
      name="Votre commune"
      status="success"
      statusLabel="Eau conforme"
      lastControlDate="il y a 7 jours"
      parameters={EXAMPLE_PARAMETERS}
      variant="dashed"
      badge="Exemple"
      disclaimer="Données fictives à titre illustratif"
    />
  );
}
