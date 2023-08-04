import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Electronics = () => {
  return (
    <View>
      <Text style={styles.txt}>Electronics</Text>
    </View>
  );
};

export default Electronics;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "20%",
  },
});
