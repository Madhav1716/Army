import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Grocery = () => {
  return (
    <View>
      <Text style={styles.txt}>Grocery</Text>
    </View>
  );
};

export default Grocery;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "20%",
  },
});
