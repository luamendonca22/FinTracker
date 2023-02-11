import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CetaceansScreen from "../screens/CetaceansScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import HomeNavigator from "./HomeNavigator";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "400",
      },
      tabBarStyle: {
        height: 60,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: defaultStyles.colors.white,
        backgroundColor: defaultStyles.colors.white,
      },
      tabBarActiveTintColor: defaultStyles.colors.secondary,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-outline" size={32} color={color} />
        ),
      }}
      name="Home"
      component={HomeNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={32}
            color={color}
          />
        ),
      }}
      name="Species"
      component={CetaceansScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="account-outline"
            size={32}
            color={color}
          />
        ),
      }}
      name="Profile"
      component={UserProfileScreen}
    />
  </Tab.Navigator>
);

export default AppNavigator;