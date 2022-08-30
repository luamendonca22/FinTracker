import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
function CarouselItem({ item, onPress }) {
  return (
    <TouchableHighlight
      style={{ borderRadius: 15 }}
      underlayColor={defaultStyles.colors.light}
      onPress={onPress}
    >
      <View style={styles.item}>
        <Image style={styles.image} source={item.imageUrl} />
        <AppText numberOfLines={2} style={styles.itemTitle}>
          {item.name}
        </AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 15,
    elevation: 3,
  },
  itemTitle: {
    position: "absolute",
    fontWeight: "700",
    height: "98%",
    color: defaultStyles.colors.white,
    marginHorizontal: 8,
    textAlignVertical: "bottom",
  },
  image: {
    width: 115,
    height: 180,
    alignSelf: "center",
    borderRadius: 15,
  },
});

export default CarouselItem;
