import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CetaceansScreen from "../screens/CetaceansScreen";
import CetaceanProfileScreen from "../screens/CetaceanProfileScreen";
import defaultStyles from "../config/styles";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Cetaceans"
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: defaultStyles.colors.white },
      headerTintColor: defaultStyles.colors.black,
    }}
  >
    <Stack.Screen name="Cetaceans" component={CetaceansScreen} />
    <Stack.Screen name="CetaceansProfile" component={CetaceanProfileScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
