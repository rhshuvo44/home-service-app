import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";
import moment from "moment";

export default function BookingModel({ id, hideModal }) {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  const { user } = useUser();

  useEffect(() => {
    getTime();
  }, []);
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i < 12; i++) {
      timeList.push({
        time: `${i} :00 AM`,
      });
      timeList.push({
        time: `${i} :30 AM`,
      });
    }
    for (let i = 1; i < 7; i++) {
      timeList.push({
        time: `${i} :00 PM`,
      });
      timeList.push({
        time: `${i} :30 PM`,
      });
    }
    setTimeList(timeList);
  };

  const createNewBooking = async () => {
    if (!selectedTime || !selectedDate) {
      ToastAndroid.show("Please select Date and Time", ToastAndroid.LONG);
      return;
    }
    const data = {
      businessId: id,
      date: moment(selectedDate).format("DD-MMM-yyyy"),
      time: selectedTime,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
    };
    GlobalApi.createBooking(data).then((res) => {
      ToastAndroid.show("Booking Create Successfully!", ToastAndroid.LONG);
      hideModal();
    });
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : 20}
        style={{ padding: 20 }}
      >
        <TouchableOpacity
          onPress={() => hideModal()}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
          <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
            Booking
          </Text>
        </TouchableOpacity>
        <Heading text="Select Date" />
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor={Colors.BLACK}
            todayTextStyle={{ color: Colors.WHITE }}
            selectedDayColor={Colors.LIGHT_GRAY}
            selectedDayTextColor={Colors.WHITE}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Heading text="Select Time Slot" />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedTime(item.time)}
                style={{ marginRight: 10 }}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Heading text="Any Suggestion Note" />
          <TextInput
            placeholder="Note"
            style={styles.noteTextArea}
            numberOfLines={4}
            multiline={true}
            onChange={(e) => setNote(e)}
          />
        </View>
        <TouchableOpacity
          onPress={() => createNewBooking()}
          style={{ marginTop: 10 }}
        >
          <Text style={styles.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Colors.PRIMARY,
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    fontFamily: "outfit",
  },
  confirmBtn: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 17,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 13,
    borderRadius: 99,
    elevation: 2,
  },
});
