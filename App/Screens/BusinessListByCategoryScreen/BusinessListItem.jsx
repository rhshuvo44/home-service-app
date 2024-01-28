import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Utils/Colors";

export default function BusinessListItem({ business }) {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate.push("business-details", {
          business: business,
        })
      }
    >
      <Image source={{ uri: business?.image[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.PRIMARY,
            fontSize: 15,
          }}
        >
          {business?.contactPerson}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
          {business?.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.BLACK,
            fontSize: 11,
          }}
        >
          <Ionicons name="location-sharp" size={12} color={Colors.PRIMARY} />
          {business?.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 7,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
