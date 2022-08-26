import React from "react";
import { View, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import WavyBackground from "react-native-wavy-background";
const LoginScreen = (props) => {
  return (
    <>
      <WavyBackground
        height={150}
        width={150}
        amplitude={20}
        frequency={10}
        offset={90}
        color={defaultStyles.colors.primary}
      ></WavyBackground>

      <View style={styles.container}>
        <AppText style={styles.text}>{`Hello, 
Sign Up!`}</AppText>
        <View style={styles.inputsContainer}>
          <AppTextInput icon="account-circle" placeholder="Username" />
          <AppTextInput
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <AppTextInput icon="lock" placeholder="Password" secureTextEntry />
        </View>
        <View style={styles.button}>
          <AppButton title="Sign Up" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 26, fontWeight: "700" },
  container: { padding: 20, flex: 1 },
  inputsContainer: { marginTop: 100 },
  forgotPassword: {
    textAlign: "right",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default LoginScreen;