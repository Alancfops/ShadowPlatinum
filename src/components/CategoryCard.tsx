import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme";
import { ProgressBar } from "./ProgressBar";

export type CategoryIcon =
  | "construct-outline"
  | "skull-outline"
  | "flower-outline"
  | "trophy-outline";

interface CategoryCardProps {
  title: string;
  progress: string;
  percent: number;
  icon: CategoryIcon;
  onPress?: () => void;
}

export function CategoryCard({
  title,
  progress,
  percent,
  icon,
  onPress,
}: CategoryCardProps) {
  const content = (
    <>
      <Ionicons name={icon} size={28} color={colors.gold} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.progress}>{progress}</Text>
        <Text style={styles.percent}>{percent}%</Text>
        <ProgressBar percent={percent} size="small" />
      </View>
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.card}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: 12,
    marginBottom: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 150,
  },
  icon: {
    marginBottom: 6,
  },
  title: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.textLow,
    letterSpacing: 1,
    marginBottom: 4,
  },
  content: {
    marginTop: 12,
  },
  progress: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  percent: {
    fontSize: 12,
    color: colors.textLow,
    marginTop: 2,
    marginBottom: 8,
  },
});
