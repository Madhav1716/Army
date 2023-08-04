import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigationbar from "./Components/Navigationbar";
import Home from "./Screens/Home";
import Grocery from "./Screens/Grocery";
import Clothes from "./Screens/Clothes";
import Electronics from "./Screens/Electronics";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Grocery"
          component={Grocery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Clothes"
          component={Clothes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Electronics"
          component={Electronics}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Navigationbar />
      {/* <Ticket /> */}
      {/* <Login /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
