import { StyleSheet } from "react-native-unistyles";

// Spacing scale
const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

// Border radii
const radii = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
} as const;

// Typography
const typography = {
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
  weight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// Light theme (based on existing tokens)
const lightTheme = {
  colors: {
    primary: "#007AFF",
    primaryLight: "#4DA3FF",
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",
    background: "#FFFFFF",
    backgroundSecondary: "#F5F5F5",
    backgroundTertiary: "#F9F9F9",
    text: "#000000",
    textSecondary: "#666666",
    textTertiary: "#999999",
    border: "#E0E0E0",
    borderLight: "#DDDDDD",
    white: "#FFFFFF",
  },
  spacing,
  radii,
  typography,
} as const;

// Dark theme (iOS-style dark colors)
const darkTheme = {
  colors: {
    primary: "#0A84FF",
    primaryLight: "#5AC8FA",
    success: "#30D158",
    warning: "#FF9F0A",
    error: "#FF453A",
    background: "#000000",
    backgroundSecondary: "#1C1C1E",
    backgroundTertiary: "#2C2C2E",
    text: "#FFFFFF",
    textSecondary: "#8E8E93",
    textTertiary: "#636366",
    border: "#38383A",
    borderLight: "#48484A",
    white: "#FFFFFF",
  },
  spacing,
  radii,
  typography,
} as const;

// Themes
const appThemes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

// Breakpoints
const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
} as const;

// TypeScript declarations
type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

// Configure Unistyles
StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
  },
});
