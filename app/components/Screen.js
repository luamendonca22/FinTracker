import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    top: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
