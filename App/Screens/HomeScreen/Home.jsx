import React from "react";
import { View } from "react-native";
import Header from "./Header";
import Slider from "./Slider";

export default function Home() {
  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
      </View>
    </View>
  );
}
