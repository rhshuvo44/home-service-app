import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";
export default function Category() {
  const [category, setCategory] = useState([]);
  const getCategorys = () => {
    GlobalApi.getCategory().then((res) => setCategory(res?.categories));
  };
  useEffect(() => {
    getCategorys();
  }, []);
  return (
    <View>
      <Heading text="Categories" isViewAll="true" />
      <FlatList
        data={category}
        numColumns={4}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                style={{ width: 30, height: 30 }}
                source={{ uri: item?.icon?.url }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});