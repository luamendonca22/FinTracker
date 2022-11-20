import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItem, ListItemSeparator } from "../../components/Lists";
import Icon from "../../components/Icon";

const ListSettings = ({ menuItems, onPress }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        onPress={onPress}
        title={item.title}
        IconComponent={
          <Icon
            style={styles.icon}
            icon={item.icon.name}
            size={20}
            iconColor={item.icon.iconColor}
            backgroundColor={item.icon.backgroundColor}
          />
        }
        chevrons={true}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.id}
        renderItem={renderItem}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },

  icon: {
    marginRight: 10,
  },
});

export default ListSettings;