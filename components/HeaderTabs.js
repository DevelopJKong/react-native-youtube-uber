import { View, Text ,TouchableOpacity} from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery"/>
      <HeaderButton text="Pickup"/>
    </View>
  );
};

const HeaderButton = (props) => {
  <TouchableOpacity style={{ backgroundColor: "black", paddingVertical: 6, paddingHorizontal: 16 }}>
    <Text style={{ color: "white" }}>{props.text}</Text>
  </TouchableOpacity>;
};
