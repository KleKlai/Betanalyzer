import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
    </View>
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