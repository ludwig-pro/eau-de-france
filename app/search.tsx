import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nom de commune ou code INSEE"
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
        placeholderTextColor="#999"
        autoFocus
      />

      {/* Résultats de recherche */}
      <View style={styles.results}>
        <Text style={styles.hint}>
          Recherchez une commune pour l'ajouter à vos favoris
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  results: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hint: {
    color: "#999",
    fontSize: 14,
    textAlign: "center",
  },
});
