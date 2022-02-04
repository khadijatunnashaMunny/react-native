import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        paddingTop: 5,
        fontWeight: 700,
      }}
    >
      <HeaderButton
        text="Delivery"
        textColor="white"
        backgroundColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        textColor="black"
        backgroundColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      paddingVertical: 6,
      paddingHorizontal: 16,
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab == props.text ? "white" : "black" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
