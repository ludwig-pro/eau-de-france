import { View, Text } from "react-native";
import { useState } from "react";
import { Screen, SearchInput } from "@/components/ui";
import { StyleSheet } from "react-native-unistyles";

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

const styles = StyleSheet.create((theme) => ({
  results: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hint: {
    color: theme.colors.textTertiary,
    fontSize: theme.typography.size.sm,
    textAlign: "center",
  },
}));
