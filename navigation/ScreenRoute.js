import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Auth";
import TabNavigator from "./TabNavigator";
import { AuthContext } from "../Global/AuthContext";

export default function ScreenRoute() {

  const { name } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!name ? <Auth /> : <TabNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
