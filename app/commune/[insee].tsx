import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Screen, StatusBadge, SegmentedControl } from "@/components/ui";
import { StyleSheet } from "react-native-unistyles";

type Segment = "resume" | "analyses" | "historique";

const SEGMENTS = [
  { key: "resume" as const, label: "Résumé" },
  { key: "analyses" as const, label: "Analyses" },
  { key: "historique" as const, label: "Historique" },
];

export default function CommuneDetailScreen() {
  const { insee } = useLocalSearchParams<{ insee: string }>();
  const [segment, setSegment] = useState<Segment>("resume");

  return (
    <Screen padding={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.communeName}>Commune {insee}</Text>
        <StatusBadge status="success" label="Eau conforme" />
      </View>

      {/* Segments */}
      <SegmentedControl
        segments={SEGMENTS}
        selected={segment}
        onSelect={setSegment}
      />

      {/* Content */}
      <View style={styles.content}>
        {segment === "resume" && <ResumeContent />}
        {segment === "analyses" && <AnalysesContent />}
        {segment === "historique" && <HistoriqueContent />}
      </View>
    </Screen>
  );
}

function ResumeContent() {
  return (
    <View>
      <Text style={styles.contentTitle}>Résumé</Text>
      <Text style={styles.contentText}>
        L&apos;eau du robinet est potable selon les derniers contrôles.
      </Text>
    </View>
  );
}

function AnalysesContent() {
  return (
    <View>
      <Text style={styles.contentTitle}>Analyses</Text>
      <Text style={styles.contentText}>
        Liste des paramètres : Nitrates, Pesticides, Chlore, Dureté...
      </Text>
    </View>
  );
}

function HistoriqueContent() {
  return (
    <View>
      <Text style={styles.contentTitle}>Historique</Text>
      <Text style={styles.contentText}>
        Graphiques d&apos;évolution dans le temps...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  header: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.backgroundSecondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  communeName: {
    fontSize: theme.typography.size.xl,
    fontWeight: theme.typography.weight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  contentTitle: {
    fontSize: theme.typography.size.lg,
    fontWeight: theme.typography.weight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  contentText: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.size.sm * theme.typography.lineHeight.relaxed,
  },
}));
