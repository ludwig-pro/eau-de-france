import { View, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Card, Badge, ParameterRow, StatusBadge } from "@/components/ui";
import { type StatusType } from "@/design-system";

interface Parameter {
  name: string;
  value: string;
  status?: "ok" | "warning" | "error";
}

interface CommuneCardProps {
  name: string;
  status: StatusType;
  statusLabel: string;
  lastControlDate?: string;
  parameters?: Parameter[];
  variant?: "solid" | "dashed";
  badge?: string;
  disclaimer?: string;
}

export function CommuneCard({
  name,
  status,
  statusLabel,
  lastControlDate,
  parameters,
  variant = "solid",
  badge,
  disclaimer,
}: CommuneCardProps) {
  return (
    <Card variant={variant} style={styles.card}>
      {/* Badge optionnel */}
      {badge && (
        <View style={styles.badgeContainer}>
          <Badge>{badge}</Badge>
        </View>
      )}

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.communeName}>{name}</Text>
        <StatusBadge status={status} label={statusLabel} />
      </View>

      {/* Données */}
      {(lastControlDate || parameters) && (
        <View style={styles.dataSection}>
          {lastControlDate && (
            <Text style={styles.lastControl}>
              Dernier contrôle : {lastControlDate}
            </Text>
          )}

          {parameters && parameters.length > 0 && (
            <View style={styles.parameters}>
              {parameters.map((param) => (
                <ParameterRow
                  key={param.name}
                  name={param.name}
                  value={param.value}
                  status={param.status}
                />
              ))}
            </View>
          )}
        </View>
      )}

      {/* Disclaimer optionnel */}
      {disclaimer && <Text style={styles.disclaimer}>{disclaimer}</Text>}
    </Card>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    top: theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 1,
  },
  header: {
    marginBottom: theme.spacing.lg,
    paddingRight: theme.spacing.xxl,
  },
  communeName: {
    fontSize: theme.typography.size.xl,
    fontWeight: theme.typography.weight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  dataSection: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
    paddingTop: theme.spacing.md,
  },
  lastControl: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  parameters: {
    gap: theme.spacing.xs,
  },
  disclaimer: {
    marginTop: theme.spacing.lg,
    fontSize: theme.typography.size.xs,
    color: theme.colors.textTertiary,
    textAlign: "center",
    fontStyle: "italic",
  },
}));
