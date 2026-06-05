import { Stack } from 'expo-router';
import React from 'react';

export default function MenuStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#4A2511' },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: '☕ The Café Grande',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Coffee Details',
          headerBackTitle: 'Menu',
        }}
      />
    </Stack>
  );
}
