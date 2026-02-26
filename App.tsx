import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_700Bold,
} from "@expo-google-fonts/kanit";
import AppNavigator from "./src/navigation/AppNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately!
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}