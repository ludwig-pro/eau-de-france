import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { type StatusType, statusEmoji } from "@/design-system";

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

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  emoji: {
    fontSize: theme.typography.size.md,
    marginRight: theme.spacing.sm,
  },
  label: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
  },
}));
