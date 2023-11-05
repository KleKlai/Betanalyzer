import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; // For Icons

// Screens
import Home from "../screens/Home";
import Transaction from "../screens/Tab/Transactions";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "HomeTab") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "TransactionTab") {
        iconName = focused ? "document-text" : "document-text-outline";
      } else if (route.name === "ProfileTab") {
        iconName = focused ? "person-circle" : "person-circle-outline";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    unmountOnBlur: false,
    headerShown: false,
    tabBarActiveTintColor: "#1E88E5",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: {
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      height: 80,
      padding: 15,
    },
    tabBarItemStyle: {
      paddingBottom: 15,
    },
    tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 12,
    },
  });

  return (
    <Tab.Navigator {...{ screenOptions }}>
      <Tab.Screen name="HomeTab" component={Home} options={{title: 'Home'}} />
      <Tab.Screen name="TransactionTab" component={Transaction} options={{title: 'Transaction'}} />
      <Tab.Screen name="ProfileTab" component={ProfileNavigator} options={{title: 'Profile'}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    height: 80,
    padding: 10,

    // backgroundColor: '#95a5a6',
  },
  tabBarItemStyle: {
    paddingBottom: 15,
  },
});
