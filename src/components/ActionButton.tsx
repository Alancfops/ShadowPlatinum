import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme";

interface ActionButtonProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress: () => void;
  danger?: boolean;
  style?: ViewStyle;
}

export function ActionButton({
  icon,
  label,
  onPress,
  danger = false,
  style,
}: ActionButtonProps) {
  const iconColor = danger ? "#E53935" : colors.text;
  const textStyle = danger ? styles.textDanger : styles.text;

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={icon} size={22} color={iconColor} />
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  textDanger: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E53935",
  },
});
