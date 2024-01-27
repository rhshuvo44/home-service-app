import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import PageHeading from "../../Components/PageHeading";
import Colors from "../../Utils/Colors";
import BusinessListItem from "./BusinessListItem";
export default function BusinessListByCategory() {
  const [businessList, setBusinessList] = useState([]);
  const param = useRoute().params;
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
      <PageHeading title={param?.name} />
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
