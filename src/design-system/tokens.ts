/**
 * Design Tokens
 * Single source of truth for all design values
 */

export const colors = {
  // Brand
  primary: "#007AFF",
  primaryLight: "#4DA3FF",

  // Status
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",

  // Neutral
  white: "#FFFFFF",
  background: "#FFFFFF",
  backgroundSecondary: "#F5F5F5",
  backgroundTertiary: "#F9F9F9",

  // Text
  text: "#000000",
  textSecondary: "#666666",
  textTertiary: "#999999",

  // Borders
  border: "#E0E0E0",
  borderLight: "#DDDDDD",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radii = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
} as const;

export const typography = {
  // Sizes
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },

  // Weights
  weight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export type StatusType = "success" | "warning" | "error";

export const statusColors: Record<StatusType, string> = {
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
};

export const statusEmoji: Record<StatusType, string> = {
  success: "🟢",
  warning: "🟠",
  error: "🔴",
};
