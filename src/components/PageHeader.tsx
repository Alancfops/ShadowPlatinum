import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { colors } from "../../theme";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

export function PageHeader({
  title,
  subtitle,
  style,
  titleStyle,
  subtitleStyle,
}: PageHeaderProps) {
  return (
    <View style={[styles.header, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle ? (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.gold,
    letterSpacing: 2,
    marginTop: 36,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gold,
    marginTop: 6,
    opacity: 0.9,
  },
});
