import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Electronics_Sug from "../Components/Electronics_Sug";
import Grocery_Sug from "../Components/Grocery_Sug";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.appName}>cpc canteen</Text>
        <View style={styles.menuIconContainer}>
          <Ionicons
            name="menu-outline"
            size={50}
            color="#000"
            style={styles.menuIcon}
          />
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <Ionicons
          name="search"
          size={30}
          color="grey"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>
      <View style={styles.Sugestions}>
        <View style={styles.Electronics}>
          <Text style={styles.Sug_Text}>Electronics</Text>
          <Electronics_Sug />
        </View>
        <View style={styles.Grocery}>
          <Text style={styles.Sug_Text}>Grocery</Text>
          <Grocery_Sug />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    flex: 1,
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2%",
    paddingVertical: "4%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2%",
    backgroundColor: "#F5FFF9",
  },
  searchIcon: {
    marginRight: "2%",
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: "#000",
  },
  Sug_Text: {
    fontWeight: 600,
    fontSize: 26,
    marginHorizontal: "3%",
  },
  Sugestions: {
    marginTop: "5%",
  },
  Grocery: {
    marginTop: "5%",
  },
});

export default Home;
