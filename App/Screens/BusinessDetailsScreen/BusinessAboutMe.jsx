import React, { useState } from "react";
import { Text, View } from "react-native";
import Colors from "../../Utils/Colors";

export default function BusinessAboutMe({ business }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <View>
      <Heading text="About Me" />
      <Text
        style={{
          fontFamily: "outfit",
          lineHeight: 28,
          color: Colors.LIGHT_GRAY,
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
