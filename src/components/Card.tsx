import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../theme";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: number;
}

export function Card({ children, style, maxWidth = 300 }: CardProps) {
  return (
    <View style={[styles.card, maxWidth ? { maxWidth } : undefined, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 24,
  },
});
