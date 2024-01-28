import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Colors from "../../Utils/Colors";
export default function Profile() {
  const { user } = useUser();
  const profileMenu = [
    { id: 1, name: "Home", icon: "home" },
    { id: 2, name: "My Booking", icon: "bookmark-sharp" },
    { id: 3, name: "Logout", icon: "log-out" },
  ];
  return (
    <View>
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 26,
            fontFamily: "outfit-bold",
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
            }}
          >
            {user?.fullName}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              fontFamily: "outfit",
              color: Colors.WHITE,
            }}
          >
            {user?.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <Ionicons name={item.icon} size={30} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
