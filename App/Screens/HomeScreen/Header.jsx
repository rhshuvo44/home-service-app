import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();

  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 20 }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={24} color={Colors.WHITE} />
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={Colors.PRIMARY}
            style={styles.textInput}
          />
        </View>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
  },
});
