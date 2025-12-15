import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* État vide */}
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>Aucune commune favorite</Text>
        <Link href="/search" asChild>
          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>Ajouter ma commune</Text>
          </Pressable>
        </Link>
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
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  addButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
