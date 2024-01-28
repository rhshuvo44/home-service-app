import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItemSmall({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("business-details", {
          business: business,
        })
      }
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: business?.image[0]?.url }} />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
          {business?.name}
        </Text>
        <Text style={{ fontSize: 13, fontFamily: "outfit" }}>
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "outfit",
            padding: 3,
            color: Colors.PRIMARY,
            backgroundColor: Colors.LIGHT_GRAY,
            marginTop: 5,
            borderRadius: 3,
            paddingHorizontal: 7,
            alignSelf: "flex-start",
          }}
        >
          {business?.category?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});
