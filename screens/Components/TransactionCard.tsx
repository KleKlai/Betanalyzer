import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import formatReadableDate from "../../lib/datelib";
import { deleteDoc, doc } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConfig";

const TransactionCard = ({ item }: any) => {
  
  const ref = doc(FIREBASE_DB, `transactions/${item.id}`);

  console.log(
    ` ~ File:Transaction.tsx ~ renderTransaction ~ result: ${item.createdAt}`
  );

  const deleteItem = async () => {
    deleteDoc(ref);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Headtext}>{item.gametype}</Text>
      <Text style={styles.text}>Bet Strategy: {item.strategy}</Text>
      <Text style={styles.text}>Amount: PHP {item.amount}</Text>
      <Text style={styles.text}>Notes: {item.notes}</Text>

      {/* <Text style={styles.text}>Date: {item.createdAt}</Text> */}
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    row: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#1E88E5",
    margin: 10,
  },
  Headtext: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 15,
  },
  text: {
    color: "#FFF",
    fontStyle: "italic",
    fontWeight: "400",
  },
});
