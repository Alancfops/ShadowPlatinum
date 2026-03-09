import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme";

interface AvatarProps {
  initial: string;
  onPress?: () => void;
  showCameraBadge?: boolean;
}

export function Avatar({
  initial,
  onPress,
  showCameraBadge = true,
}: AvatarProps) {
  const content = (
    <>
      <View style={styles.avatar}>
        <Text style={styles.avatarInicial}>{initial}</Text>
      </View>
      {showCameraBadge ? (
        <View style={styles.cameraBadge}>
          <Ionicons name="camera" size={18} color={colors.gold} />
        </View>
      ) : null}
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={styles.wrapper}>{content}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.card,
    borderWidth: 3,
    borderColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInicial: {
    fontSize: 40,
    fontWeight: "700",
    color: colors.gold,
  },
  cameraBadge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
  },
});
