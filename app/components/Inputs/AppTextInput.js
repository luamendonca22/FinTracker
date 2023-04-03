import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ErrorMessage } from "../Alerts";

import defaultStyles from "../../config/styles";

const AppTextInput = ({
  error,
  style,
  icon,
  secureTextEntry,
  ...otherProps
}) => {
  // ------- STATE MANAGEMENT ------
  const [hidden, setHidden] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  // ------ UTILITIES ------
  const handlePress = () => {
    setHidden(!hidden);
  };

  const hide = () => {
    return hidden ? ["eye", true] : ["eye-off", false];
  };

  const handleFocused = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          style,
          {
            borderColor: error
              ? defaultStyles.colors.danger
              : isFocused
              ? defaultStyles.colors.primary
              : defaultStyles.colors.white,
          },
        ]}
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            {...otherProps}
            color={defaultStyles.colors.black}
          />
        )}
        <TextInput
          {...otherProps}
          onBlur={handleBlur}
          onFocus={handleFocused}
          secureTextEntry={secureTextEntry ? hide()[1] : false}
          {...otherProps}
          placeholderTextColor={defaultStyles.colors.medium}
          style={[defaultStyles.text, styles.textInput]}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={handlePress}>
            <MaterialCommunityIcons
              name={hide()[0]}
              {...otherProps}
              color={defaultStyles.colors.black}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
      <ErrorMessage error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.white,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    borderRadius: 50,
    padding: 12,
    borderWidth: 0.8,
    elevation: 2,
    shadowColor: defaultStyles.colors.black,
    marginVertical: 5,
  },
  textInput: { flex: 1, marginLeft: 5 },
});

export default AppTextInput;
