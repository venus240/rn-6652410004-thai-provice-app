import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}