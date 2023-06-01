import { View, Text, StyleSheet } from "react-native-web";

export const FeatureHeader = param => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.FeatureHeader}>{param.param}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FeatureHeader: {
    paddingLeft: 30,
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 500,
    marginBottom:100,
  },
});
