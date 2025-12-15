import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type BadgeVariant = "primary" | "success" | "warning" | "error" | "neutral";

interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  return (
    <View style={[styles.badge, styles[variant]]}>
      <Text style={[styles.text, styles[`text_${variant}`]]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radii.sm,
  },
  text: {
    fontSize: theme.typography.size.xs,
    fontWeight: theme.typography.weight.semibold,
  },
  // Variants
  primary: {
    backgroundColor: theme.colors.primary,
  },
  success: {
    backgroundColor: theme.colors.success,
  },
  warning: {
    backgroundColor: theme.colors.warning,
  },
  error: {
    backgroundColor: theme.colors.error,
  },
  neutral: {
    backgroundColor: theme.colors.backgroundTertiary,
  },
  // Text variants
  text_primary: {
    color: theme.colors.white,
  },
  text_success: {
    color: theme.colors.white,
  },
  text_warning: {
    color: theme.colors.white,
  },
  text_error: {
    color: theme.colors.white,
  },
  text_neutral: {
    color: theme.colors.textSecondary,
  },
}));
