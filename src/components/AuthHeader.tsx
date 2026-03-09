import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
}

export function AuthHeader({
  title = "Shadow Platinum",
  subtitle = "Seu Guia Shinobi",
}: AuthHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.gold,
    marginTop: 16,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textLow,
    marginTop: 6,
  },
});
