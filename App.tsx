import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./src/app/(auth)/login";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <StatusBar style="light" />
      <Login />
    </SafeAreaView>
  );
}
