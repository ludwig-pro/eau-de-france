import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Mes communes" }} />
      <Stack.Screen
        name="search"
        options={{ title: "Ajouter une commune", presentation: "modal" }}
      />
      <Stack.Screen name="commune/[insee]" options={{ title: "Détail" }} />
    </Stack>
  );
}
