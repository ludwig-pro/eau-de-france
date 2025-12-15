import { TextInput, StyleSheet, type TextInputProps } from "react-native";
import { colors, spacing, radii, typography } from "@/design-system";

interface SearchInputProps extends Omit<TextInputProps, "style"> {
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchInput({
  value,
  onChangeText,
  placeholder = "Rechercher...",
  ...props
}: SearchInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.textTertiary}
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: radii.md,
    fontSize: typography.size.md,
    backgroundColor: colors.backgroundTertiary,
    color: colors.text,
  },
});
