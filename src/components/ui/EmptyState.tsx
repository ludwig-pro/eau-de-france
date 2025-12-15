import { View, Text, StyleSheet, type ReactNode } from "react-native";
import { colors, spacing, typography } from "@/design-system";

interface EmptyStateProps {
  message: string;
  children?: ReactNode;
}

export function EmptyState({ message, children }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {children && <View style={styles.action}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  message: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
    textAlign: "center",
  },
  action: {
    marginTop: spacing.lg,
  },
});
