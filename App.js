import { StyleSheet, Text, View } from "react-native";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
