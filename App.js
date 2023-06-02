import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Contents, Footer } from "./screens/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FeatureHeader } from "./components/FeaturePage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { UsageHistory } from "./screens/UsageHistory";
import { TemporaryPassword } from "./screens/TemporaryPassword";
import { TemporaryPassword1 } from "./screens/TemporaryPassword1";

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

  // 화면전환 참고자료
  // https://velog.io/@su96in43/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8Creact-native-%ED%99%94%EB%A9%B4-%EC%9D%B4%EB%8F%99
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TemporaryPassword1">
        <Stack.Screen name="Contents" component={Contents} />
        <Stack.Screen name="UsageHistory" component={UsageHistory} />
        <Stack.Screen name="TemporaryPassword1" component={TemporaryPassword1} />
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

// branch pull request 시험
