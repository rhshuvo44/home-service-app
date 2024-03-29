import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";
export default function Category() {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();
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
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", {
                  category: item?.name,
                })
              }
            >
              <View style={styles.iconContainer}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{ uri: item?.icon?.url }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
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
