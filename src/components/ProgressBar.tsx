import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../theme";

interface ProgressBarProps {
  percent: number;
  label?: string;
  value?: string;
  size?: "default" | "small";
  style?: ViewStyle;
}

export function ProgressBar({
  percent,
  label,
  value,
  size = "default",
  style,
}: ProgressBarProps) {
  const isSmall = size === "small";
  const trackStyle = isSmall ? styles.trackSmall : styles.track;

  return (
    <View style={[styles.wrap, style]}>
      {label ? (
        <Text style={styles.label}>{label}</Text>
      ) : null}
      {value != null ? (
        <Text style={styles.value}>{value}</Text>
      ) : null}
      <View style={trackStyle}>
        <View
          style={[styles.fill, isSmall && styles.fillSmall, { width: `${Math.min(100, Math.max(0, percent))}%` }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {},
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.gold,
    letterSpacing: 1,
    marginBottom: 6,
  },
  value: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 10,
  },
  track: {
    height: 8,
    backgroundColor: colors.input,
    borderRadius: 4,
    overflow: "hidden",
  },
  trackSmall: {
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  fill: {
    height: "100%",
    backgroundColor: colors.gold,
    borderRadius: 4,
  },
  fillSmall: {
    borderRadius: 3,
  },
});
