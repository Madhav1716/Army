import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Clothes = () => {
  return (
    <View>
      <Text style={styles.txt}>Clothes</Text>
    </View>
  );
};

export default Clothes;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "20%",
  },
});
