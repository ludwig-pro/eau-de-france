import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useSelector } from "@legendapp/state/react";
import { Screen, Button } from "@/components/ui";
import { ExampleCommuneCard } from "@/components/ExampleCommuneCard";
import { store$ } from "@/store";
import { StyleSheet } from "react-native-unistyles";

export default function HomeScreen() {
  const favorites = useSelector(() => store$.favorites.get());
  const hasFavorites = favorites.length > 0;

  if (hasFavorites) {
    // TODO: Afficher la vraie liste de favoris
    return (
      <Screen>
        <Text>Liste des favoris ({favorites.length})</Text>
      </Screen>
    );
  }

  // Onboarding : carte exemple
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Carte exemple */}
        <ExampleCommuneCard />

        {/* Message pédagogique */}
        <View style={styles.messageSection}>
          <Text style={styles.message}>
            Ajoutez votre commune pour consulter la qualité de l&apos;eau du
            robinet chez vous.
          </Text>
        </View>

        {/* CTA unique */}
        <Link href="/search" asChild>
          <Button size="lg">Ajouter ma commune</Button>
        </Link>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: theme.spacing.xl,
  },
  messageSection: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  message: {
    fontSize: theme.typography.size.md,
    color: theme.colors.textSecondary,
    textAlign: "center",
    lineHeight: theme.typography.size.md * theme.typography.lineHeight.relaxed,
  },
}));
