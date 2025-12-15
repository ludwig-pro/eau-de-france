/**
 * Design Tokens
 * Status types and helpers that are used alongside Unistyles themes
 */

export type StatusType = "success" | "warning" | "error";

export const statusEmoji: Record<StatusType, string> = {
  success: "🟢",
  warning: "🟠",
  error: "🔴",
};
