import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type ParameterStatus = "ok" | "warning" | "error";

interface ParameterRowProps {
  name: string;
  value: string;
  status?: ParameterStatus;
}

const STATUS_ICONS: Record<ParameterStatus, string> = {
  ok: "✓",
  warning: "⚠",
  error: "✗",
};

export function ParameterRow({
  name,
  value,
  status = "ok",
}: ParameterRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={[styles.status, styles[`status_${status}`]]}>
        {STATUS_ICONS[status]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.xs,
  },
  name: {
    flex: 1,
    fontSize: theme.typography.size.sm,
    color: theme.colors.text,
  },
  value: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
    marginRight: theme.spacing.sm,
  },
  status: {
    fontSize: theme.typography.size.sm,
    fontWeight: theme.typography.weight.semibold,
  },
  status_ok: {
    color: theme.colors.success,
  },
  status_warning: {
    color: theme.colors.warning,
  },
  status_error: {
    color: theme.colors.error,
  },
}));
