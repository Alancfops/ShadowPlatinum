import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Login } from "../auth/Login";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login
        SignUp={() => router.push("/(auth)/signup")}
        onSuccess={() => router.replace("/(tabs)")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
