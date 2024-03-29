import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import defaultStyles from "../../config/styles";

const ActivityIndicator = ({ style, visible = false }) => {
  if (!visible) return null;

  return (
    <View style={[styles.container, style]}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: defaultStyles.colors.white,
    height: "100%",
    width: "100%",
    opacity: 0.8,
    zIndex: 1,
  },
});

export default ActivityIndicator;
