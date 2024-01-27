import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);
  const getBusinessLists = () => {
    GlobalApi.getBusinessList().then((res) =>
      setBusinessList(res?.businessLists)
    );
  };
  useEffect(() => {
    getBusinessLists();
  }, []);
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text="Latest Business" isViewAll="true" />
      <FlatList
        data={businessList}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
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
