import { View, StyleSheet, type ViewStyle, type ReactNode } from "react-native";
import { colors, spacing } from "@/design-system";

interface ScreenProps {
  children: ReactNode;
  padding?: boolean;
  style?: ViewStyle;
}

export function Screen({ children, padding = true, style }: ScreenProps) {
  return (
    <View style={[styles.container, padding && styles.padding, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  padding: {
    padding: spacing.lg,
  },
});
