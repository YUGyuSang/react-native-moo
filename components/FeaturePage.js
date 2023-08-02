import { View, Text, StyleSheet } from "react-native";

export const FeatureHeader = param => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.featureHeader}>{param.param}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  featureHeader: {
    paddingLeft: 30,
    paddingTop: 50,
    fontSize: 35,
    fontWeight: 700,
  },
});
