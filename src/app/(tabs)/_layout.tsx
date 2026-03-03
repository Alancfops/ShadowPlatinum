import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.textLow,
        tabBarActiveBackgroundColor: colors.card,
        tabBarInactiveBackgroundColor: colors.card,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        tabBarLabelStyle: { fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chefes"
        options={{
          title: "Chefes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="skull" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="itens"
        options={{
          title: "Itens",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trofeus"
        options={{
          title: "Troféus",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size ?? 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
