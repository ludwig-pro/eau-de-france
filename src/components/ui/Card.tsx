import type { ReactNode } from "react";
import { View, type ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type CardVariant = "solid" | "dashed";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  style?: ViewStyle;
}

export function Card({ children, variant = "solid", style }: CardProps) {
  return <View style={[styles.card, styles[variant], style]}>{children}</View>;
}

const styles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.radii.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
  },
  solid: {
    borderColor: theme.colors.borderLight,
    borderStyle: "solid",
  },
  dashed: {
    borderColor: theme.colors.borderLight,
    borderStyle: "dashed",
  },
}));
