import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const authScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 24,
  },
  errorText: {
    fontSize: 12,
    color: "#E57373",
    marginTop: -16,
    marginBottom: 12,
  },
  successText: {
    fontSize: 14,
    color: "#81C784",
    marginBottom: 12,
    textAlign: "center",
  },
});
