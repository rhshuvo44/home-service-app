import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

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
      <Heading text="Offers For You" />
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
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
  },
});
