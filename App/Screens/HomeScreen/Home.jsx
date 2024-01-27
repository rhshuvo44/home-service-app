import React from "react";
import { ScrollView, View } from "react-native";
import Header from "./Header";
import Slider from "./Slider";
import Category from "./Category";
import BusinessList from "./BusinessList";

export default function Home() {
  return (
    <View>
      <Header />
      <ScrollView style={{ padding: 20 }}>
        <Slider />
        <Category />
        <BusinessList />
      </ScrollView>
    </View>
  );
}
