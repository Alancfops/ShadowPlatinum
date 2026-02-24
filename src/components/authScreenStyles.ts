import { StyleSheet } from "react-native";
import { colors } from "../../theme";

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
  card: {
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.input,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
    letterSpacing: 1,
  },
  linkWrap: {
    marginTop: 12,
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    color: colors.textLow,
  },
  linkHighlight: {
    color: colors.gold,
    fontWeight: "600",
  },
});
