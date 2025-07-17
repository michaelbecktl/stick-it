import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#f1ebfa' },
        headerTintColor: '#9A348E',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false,
        tabBarActiveTintColor: '#9A348E',
        tabBarStyle: { backgroundColor: '#FCF7FA' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  )
}
