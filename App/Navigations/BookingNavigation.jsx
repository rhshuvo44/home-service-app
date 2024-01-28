import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BusinessDetails from "../Screens/BusinessDetailsScreen/BusinessDetails";
import BusinessListByCategory from "../Screens/BusinessListByCategoryScreen/BusinessListByCategory";
import Home from "../Screens/HomeScreen/Home";
import Booking from "../Screens/BookingScreen/Booking";

const Stack = createStackNavigator();
export default function BookingNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="booking" component={Booking} />
      <Stack.Screen name="business-details" component={BusinessDetails} />
    </Stack.Navigator>
  );
}
