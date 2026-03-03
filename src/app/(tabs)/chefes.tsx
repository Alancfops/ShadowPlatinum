import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../theme";

export default function ChefesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chefes</Text>
      <Text style={styles.subtitle}>Em breve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.gold,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textLow,
    marginTop: 8,
  },
});
