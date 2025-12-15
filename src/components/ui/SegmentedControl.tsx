import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";

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

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  segment: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    alignItems: "center",
  },
  segmentActive: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  label: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.textSecondary,
  },
  labelActive: {
    color: theme.colors.primary,
    fontWeight: theme.typography.weight.semibold,
  },
}));
