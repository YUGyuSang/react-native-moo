import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FeatureHeader } from "../components/FeaturePage";

export const UsageHistory = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <FeatureHeader param="이용내역" />
      <View style={styles.contents}>
        <Text>이용내역페이지임</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    backgroundColor: "tomato",
    height: 60,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
