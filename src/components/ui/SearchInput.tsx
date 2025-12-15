import { TextInput, type TextInputProps } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

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
  const { theme } = useUnistyles();

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.textTertiary}
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  input: {
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: theme.radii.md,
    fontSize: theme.typography.size.md,
    backgroundColor: theme.colors.backgroundTertiary,
    color: theme.colors.text,
  },
}));
