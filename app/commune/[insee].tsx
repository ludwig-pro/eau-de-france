import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

type Segment = "resume" | "analyses" | "historique";

const SEGMENTS: { key: Segment; label: string }[] = [
  { key: "resume", label: "Résumé" },
  { key: "analyses", label: "Analyses" },
  { key: "historique", label: "Historique" },
];

export default function CommuneDetailScreen() {
  const { insee } = useLocalSearchParams<{ insee: string }>();
  const [segment, setSegment] = useState<Segment>("resume");

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.communeName}>Commune {insee}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.statusIcon}>🟢</Text>
          <Text style={styles.statusText}>Eau conforme</Text>
        </View>
      </View>

      {/* Segments */}
      <View style={styles.segmentBar}>
        {SEGMENTS.map((s) => (
          <Pressable
            key={s.key}
            onPress={() => setSegment(s.key)}
            style={[
              styles.segmentButton,
              segment === s.key && styles.segmentButtonActive,
            ]}
          >
            <Text
              style={[
                styles.segmentText,
                segment === s.key && styles.segmentTextActive,
              ]}
            >
              {s.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Contenu du segment */}
      <View style={styles.content}>
        {segment === "resume" && (
          <View>
            <Text style={styles.contentTitle}>Résumé</Text>
            <Text style={styles.contentText}>
              L'eau du robinet est potable selon les derniers contrôles.
            </Text>
          </View>
        )}

        {segment === "analyses" && (
          <View>
            <Text style={styles.contentTitle}>Analyses</Text>
            <Text style={styles.contentText}>
              Liste des paramètres : Nitrates, Pesticides, Chlore, Dureté...
            </Text>
          </View>
        )}

        {segment === "historique" && (
          <View>
            <Text style={styles.contentTitle}>Historique</Text>
            <Text style={styles.contentText}>
              Graphiques d'évolution dans le temps...
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  communeName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: "#666",
  },
  segmentBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  segmentButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  segmentText: {
    fontSize: 14,
    color: "#666",
  },
  segmentTextActive: {
    color: "#007AFF",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});
