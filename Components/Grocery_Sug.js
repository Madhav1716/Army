import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Grocery_Sug_List from "./Grocery_Sug_List.json";
import { FlatList } from "react-native-gesture-handler";

const Grocery_Sug = () => {
  return (
    <View style={styles.Container}>
      <FlatList
        data={Grocery_Sug_List}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity style={styles.Main_Item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.Text}>
                <Text style={styles.price}>{item.Quanity}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator="false"
      />
    </View>
  );
};

export default Grocery_Sug;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  Container: {
    // height: "100%",
    // width: "100%",
    alignItems: "center",
    // backgroundColor: "red",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  listItem: {
    justifyContent: "center",
    margin: 8,
  },
  Main_Item: {
    // borderWidth: "1px",
    width: "100%",
  },
  price: {
    fontSize: 17,
    fontWeight: "500",
    color: "grey",
    textAlign: "center",
  },
  Text: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    margin: "2%",
  },
});
