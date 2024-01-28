import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../Utils/Colors";
import BookingModel from "./BookingModel";
import BusinessAboutMe from "./BusinessAboutMe";
import BusinessPhotos from "./BusinessPhotos";

export default function BusinessDetails() {
  const [showModal, setShowModal] = useState(false);

  const business = useRoute().params.business;

  const navigation = useNavigation();
  const onMessageBtnClick = () => {
    Linking.openURL(
      "mailto:" +
        business?.email +
        "?subject=I am looking for your Service&body=Hi There,"
    );
  };
  return (
    business && (
      <View>
        <ScrollView style={{ height: "88%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtnContainer}
          >
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color={Colors.WHITE}
            />
          </TouchableOpacity>
          <Image
            style={{ width: "100%", height: 300 }}
            source={{ uri: business?.image[0]?.url }}
          />
          <View style={styles.infoContainer}>
            <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
              {business?.name}
            </Text>
            <View style={styles.subContainer}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  color: Colors.PRIMARY,
                  fontSize: 20,
                }}
              >
                {business?.contactPerson}
              </Text>
              <Text>{business?.category?.name}</Text>
            </View>
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.BLACK,
                fontSize: 16,
              }}
            >
              <Ionicons
                name="location-sharp"
                size={20}
                color={Colors.PRIMARY}
              />
              {business?.address}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.PRIMARY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <BusinessAboutMe business={business} />
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.PRIMARY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <BusinessPhotos business={business} />
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            margin: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => onMessageBtnClick}
            style={styles.messageBtn}
          >
            <Text
              style={{
                textAlign: "center",
                color: Colors.PRIMARY,
                fontFamily: "outfit-medium",
                fontSize: 18,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles.bookingBtn}
          >
            <Text
              style={{
                textAlign: "center",
                color: Colors.WHITE,
                fontFamily: "outfit-medium",
                fontSize: 18,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide" visible={showModal}>
          <BookingModel
            id={business.id}
            hideModal={() => setShowModal(false)}
          />
        </Modal>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    gap: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});
