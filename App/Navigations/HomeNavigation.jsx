import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BusinessDetails from "../Screens/BusinessDetailsScreen/BusinessDetails";
import BusinessListByCategory from "../Screens/BusinessListByCategoryScreen/BusinessListByCategory";
import Home from "../Screens/HomeScreen/Home";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="business-list" component={BusinessListByCategory} />
      <Stack.Screen name="business-details" component={BusinessDetails} />
    </Stack.Navigator>
  );
}
