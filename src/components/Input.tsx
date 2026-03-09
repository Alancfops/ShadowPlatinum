import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import { colors } from "../../theme";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

export function Input({
  label,
  error,
  touched,
  style,
  ...rest
}: InputProps) {
  const showError = touched && error;

  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.placeholder}
        {...rest}
      />
      {showError ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 12,
    color: "#E57373",
    marginTop: -12,
    marginBottom: 12,
  },
});
