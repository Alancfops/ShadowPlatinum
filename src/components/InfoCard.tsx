import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../theme";

interface InfoRow {
  label: string;
  value: string;
}

interface InfoCardProps {
  rows: InfoRow[];
  style?: ViewStyle;
}

export function InfoCard({ rows, style }: InfoCardProps) {
  return (
    <View style={[styles.card, style]}>
      {rows.map((row, index) => (
        <View key={row.label}>
          <Text style={[styles.label, index > 0 && styles.labelMargin]}>
            {row.label}
          </Text>
          <Text style={styles.value}>{row.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textLow,
    marginBottom: 4,
  },
  labelMargin: {
    marginTop: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
});
