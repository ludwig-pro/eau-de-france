import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Screen, StatusBadge, SegmentedControl } from "@/components/ui";
import { colors, spacing, typography } from "@/design-system";

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

const styles = StyleSheet.create({
  header: {
    padding: spacing.lg,
    backgroundColor: colors.backgroundSecondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  communeName: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    marginBottom: spacing.sm,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  contentTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    marginBottom: spacing.md,
  },
  contentText: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
    lineHeight: typography.size.sm * typography.lineHeight.relaxed,
  },
});
