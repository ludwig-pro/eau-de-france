import { Link } from "expo-router";
import { Screen, EmptyState, Button } from "@/components/ui";

export default function HomeScreen() {
  return (
    <Screen>
      <EmptyState message="Aucune commune favorite">
        <Link href="/search" asChild>
          <Button>Ajouter ma commune</Button>
        </Link>
      </EmptyState>
    </Screen>
  );
}
