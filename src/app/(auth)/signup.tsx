import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { SignUp } from "../auth/SignUp";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUp
        Login={() => router.back()}
        onSuccess={() => router.replace("/(tabs)")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
