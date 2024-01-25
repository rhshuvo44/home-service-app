import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import loginImg from "../../../assets/login.png";
import Colors from "../../Utils/Colors";
export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={loginImg} style={styles.loginImage} />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Colors.WHITE }}>
          Let's{" "}
          <Text style={{ fontWeight: "bold" }}>
            Find Professional Cleaning and repair
          </Text>{" "}
          Service
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          Best App to find service near you which deliver you a Professional
          service
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button Click")}
        >
          <Text
            style={{ textAlign: "center", fontSize: 17, color: Colors.PRIMARY }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    // marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    textAlign: "center",
    marginTop: 40,
  },
});
