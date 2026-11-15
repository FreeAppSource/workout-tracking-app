import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FONTS } from '../sketch/fonts';

// The Sketch artboards include their own iOS status bar, so the system one is hidden.
export default function RootLayout() {
  const [loaded, error] = useFonts(FONTS);
  if (!loaded && !error) return <View style={{ flex: 1, backgroundColor: "#f8f9f9" }} />;
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />
    </SafeAreaProvider>
  );
}
