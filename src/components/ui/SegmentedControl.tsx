import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/design-system";

interface Segment<T extends string> {
  key: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  segments: Segment<T>[];
  selected: T;
  onSelect: (key: T) => void;
}

export function SegmentedControl<T extends string>({
  segments,
  selected,
  onSelect,
}: SegmentedControlProps<T>) {
  return (
    <View style={styles.container}>
      {segments.map((segment) => {
        const isActive = segment.key === selected;
        return (
          <Pressable
            key={segment.key}
            onPress={() => onSelect(segment.key)}
            style={[styles.segment, isActive && styles.segmentActive]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {segment.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  segment: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  segmentActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
  },
  labelActive: {
    color: colors.primary,
    fontWeight: typography.weight.semibold,
  },
});
