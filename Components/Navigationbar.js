import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navigationbar = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const navigation = useNavigation();

  const handlePress = (index) => {
    setActiveIconIndex(index);
    if (index === 0) {
      navigation.navigate("Home");
    } else if (index === 1) {
      navigation.navigate("Grocery");
    } else if (index === 2) {
      navigation.navigate("Clothes");
    } else if (index === 3) {
      navigation.navigate("Electronics");
    } else {
      console.error("Press Correct Key!");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress(0)}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress(1)}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1261/1261052.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress(2)}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3159/3159614.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress(3)}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2777/2777142.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navigationbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6F6E1",
    width: "100%",
    height: "10%", // Adjust the height as needed
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  iconContainer: {
    justifyContent: "center",
  },
  icon: {
    width: 35,
    height: 35, // Adjust the height to display the image properly
  },
});
