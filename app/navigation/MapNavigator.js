import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../screens/MapScreen";
import CetaceanProfileScreen from "../screens/CetaceanProfileScreen";
import CetaceanActivityScreen from "../screens/CetaceanActivityScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import FeatureScreen from "../screens/FeatureScreen";
import defaultStyles from "../config/styles";

const Stack = createStackNavigator();

const MapNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyles.colors.white },
      headerTintColor: defaultStyles.colors.black,
    }}
  >
    <Stack.Screen
      options={{ headerShown: false }}
      name="MapScreen"
      component={MapScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="CetaceansProfile"
      component={CetaceanProfileScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="CetaceanActivityScreen"
      component={CetaceanActivityScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="ProfileScreen"
      component={UserProfileScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Features"
      component={FeatureScreen}
    />
  </Stack.Navigator>
);

export default MapNavigator;
