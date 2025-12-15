import { View, Text, StyleSheet } from "react-native";
import {
  colors,
  spacing,
  typography,
  type StatusType,
  statusEmoji,
} from "@/design-system";

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{statusEmoji[status]}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  emoji: {
    fontSize: typography.size.md,
    marginRight: spacing.sm,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
  },
});
