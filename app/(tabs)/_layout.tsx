import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#C67B54',
        tabBarInactiveTintColor: '#E8CDBB',
        tabBarActiveBackgroundColor: '#F7F1EB',
        tabBarItemStyle: { borderRadius: 10, margin: 5, padding: 5 },
        tabBarLabel: ({ focused, color, children }) => (
          <Text style={{
            color,
            fontSize: focused ? 14 : 12,
            fontWeight: focused ? '900' : 'normal'
          }}>
            {children}
          </Text>
        ),
        headerStyle: { backgroundColor: '#F7F1EB' },
        headerTintColor: '#323232',
        tabBarButton: HapticTab,
        tabBarStyle: { backgroundColor: '#FFFFFF', borderTopColor: '#E0E0E0', height: 70 },
      }}>
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.bullet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerTitle: 'Your Orders',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />

    </Tabs>
  );
}
