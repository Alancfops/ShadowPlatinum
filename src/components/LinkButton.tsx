import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface LinkButtonProps {
  text: string;
  highlight: string;
  onPress: () => void;
  disabled?: boolean;
}

export function LinkButton({
  text,
  highlight,
  onPress,
  disabled = false,
}: LinkButtonProps) {
  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>
        {text} <Text style={styles.highlight}>{highlight}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: colors.textLow,
  },
  highlight: {
    color: colors.gold,
    fontWeight: "600",
  },
});
