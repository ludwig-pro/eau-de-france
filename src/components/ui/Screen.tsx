import type { ReactNode } from "react";
import { View, type ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

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

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    padding: theme.spacing.lg,
  },
}));
