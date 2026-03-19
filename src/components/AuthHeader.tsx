import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
      <Image
        source={require("../assets/logo1.png")}
        style={styles.logo}
        resizeMode="contain"
      />
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
  logo: {
    width: 120,
    height: 120,
    borderRadius: 25,
    overflow: "hidden",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.gold,
    marginTop: 10,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textLow,
    marginTop: 6,
  },
});
