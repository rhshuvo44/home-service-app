import { useUser } from "@clerk/clerk-expo";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "../BusinessListByCategoryScreen/BusinessListItem";

export default function Booking() {
  const [bookingList, setBookingList] = useState([]);
  const { user } = useUser();
  const getBusinessListByCategory = () => {
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(
      (res) => setBookingList(res?.bookings)
    );
  };
  useEffect(() => {
    user && getBusinessListByCategory();
  }, [user]);
  return (
    <View style={{ padding: 20 }}>
      <Heading text="My Booking" />
      {bookingList?.length > 0 ? (
        <FlatList
          data={bookingList}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.businessList} />
          )}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%",
            color: Colors.LIGHT_GRAY,
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
}
