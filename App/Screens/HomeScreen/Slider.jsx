import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import GlobalApi from "../../Utils/GlobalApi";

export default function Slider() {
  const [sliders, setSliders] = useState([]);
  const getSliders = () => {
    GlobalApi.getSlider().then((res) => setSliders(res?.sliders));
  };
  useEffect(() => {
    getSliders();
  }, []);
  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList
        data={sliders}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <Image
              style={styles.sliderImage}
              source={{ uri: item?.image?.url }}
            />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
  },
});
