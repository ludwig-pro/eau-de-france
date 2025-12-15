import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Screen, SearchInput } from "@/components/ui";
import { colors, typography } from "@/design-system";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <Screen>
      <SearchInput
        value={query}
        onChangeText={setQuery}
        placeholder="Nom de commune ou code INSEE"
        autoFocus
      />

      <View style={styles.results}>
        <Text style={styles.hint}>
          Recherchez une commune pour l&apos;ajouter à vos favoris
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  results: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hint: {
    color: colors.textTertiary,
    fontSize: typography.size.sm,
    textAlign: "center",
  },
});
