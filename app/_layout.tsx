import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f1ebfa' },
        headerTintColor: '#9A348E',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
