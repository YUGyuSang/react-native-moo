import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Contents, Footer } from "./screens/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TemporaryPassword } from "./components/ TemporaryPassword";
import { FeatureHeader } from "./components/FeaturePage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { UsageHistory } from "./screens/UsageHistory";

export default function App() {
  const [defaultId, setDefaultId] = useState(1);

  const idPlus = () => {
    if (defaultId === 4) {
      return setDefaultId(1);
    }
    setDefaultId(defaultId + 1);
  };

  const idMinus = () => {
    if (defaultId === 1) {
      return setDefaultId(4);
    }
    setDefaultId(defaultId - 1);
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsageHistory">
        <Stack.Screen name="Contents" component={Contents} />
        <Stack.Screen name="UsageHistory" component={UsageHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
