import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

export default function BusinessAboutMe({ business }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <View style={{padding:20}}>
      <Heading text="About Me" />
      <Text
        style={{
          fontFamily: "outfit",
          lineHeight: 28,
          color: "#049",
          fontSize: 16,
        }}
        numberOfLines={readMore ? 20 : 5}
      >
        {business?.about}
      </Text>
      <TouchableOpacity onPress={() => setReadMore(!readMore)}>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit",
            fontSize: 16,
          }}
        >
          {readMore ? "Read Less" : "Read More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
