import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme";

interface PasswordInputProps extends Omit<TextInputProps, "secureTextEntry"> {
  label?: string;
  error?: string;
  touched?: boolean;
}

export function PasswordInput({
  label,
  error,
  touched,
  style,
  ...rest
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const showError = touched && error;

  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, styles.inputWithIcon, style]}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={!showPassword}
          {...rest}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword((p) => !p)}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          disabled={rest.editable === false}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color={colors.placeholder}
          />
        </TouchableOpacity>
      </View>
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
  inputRow: {
    position: "relative",
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
  },
  inputWithIcon: {
    paddingRight: 48,
  },
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: 14,
    padding: 4,
  },
  errorText: {
    fontSize: 12,
    color: "#E57373",
    marginTop: -12,
    marginBottom: 12,
  },
});
