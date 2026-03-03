import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Login } from "./src/app/auth/Login";
import { SignUp } from "./src/app/auth/SignUp";

type Screen = "login" | "signup";

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <StatusBar style="light" />
      {screen === "login" ? (
        <Login SignUp={() => setScreen("signup")} />
      ) : (
        <SignUp Login={() => setScreen("login")} />
      )}
    </SafeAreaView>
  );
}
