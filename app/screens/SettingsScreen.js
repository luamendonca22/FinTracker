import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListSettings from "../components/Lists/ListSettings";
import defaultStyles from "../config/styles";

const SettingsScreen = () => {
  const menuItems = [
    {
      id: 1,
      title: "Conta",
      icon: {
        name: "account-settings",
        iconColor: defaultStyles.colors.white,
        backgroundColor: defaultStyles.colors.primary,
      },
      target: "",
    },
    {
      id: 2,
      title: "Notificações",
      icon: {
        name: "bell",
        iconColor: defaultStyles.colors.white,
        backgroundColor: defaultStyles.colors.primary,
      },
      target: "",
    },
    {
      id: 3,
      title: "Permissões",
      icon: {
        name: "account-lock",
        iconColor: defaultStyles.colors.white,
        backgroundColor: defaultStyles.colors.primary,
      },
      target: "",
    },
    {
      id: 4,
      title: "Sobre",
      icon: {
        name: "information",
        iconColor: defaultStyles.colors.white,
        backgroundColor: defaultStyles.colors.primary,
      },
      target: "About",
    },
  ];
  return <ListSettings menuItems={menuItems} />;
};

const styles = StyleSheet.create({});

export default SettingsScreen;
