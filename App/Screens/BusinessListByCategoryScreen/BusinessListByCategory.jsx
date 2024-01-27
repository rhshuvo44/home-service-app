import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";
export default function BusinessListByCategory() {
  const [businessList, setBusinessList] = useState([]);

  const param = useRoute().params;
  const navigation = useNavigation();
  const getBusinessListByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((res) =>
      setBusinessList(res?.businessLists)
    );
  };
  useEffect(() => {
    param && getBusinessListByCategory();
  }, [param]);
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {param?.name}
        </Text>
      </TouchableOpacity>
      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
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
