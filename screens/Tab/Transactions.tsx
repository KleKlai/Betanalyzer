import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { collection, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConfig";
import TransactionCard from "../Components/TransactionCard";

export interface Transaction {
  id: string;
  amount: string,
  gametype: string,
  notes: string,
  strategy: string,
  createdAt: Date,
}
export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, "transactions");

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        // console.log(`~ File:Transactions.js ~ subscriber:23 ~ Updated`);

        const trans: Transaction[] = [];
        snapshot.docs.forEach((doc) => {
          console.log(`~ File:Transactions.js ~ subscriber:26 ~ doc`, doc.data());
          trans.push({
            id: doc.id,
            ...doc.data(),
          } as Transaction);
        });
        setTransactions(trans);
      },
    });

    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', padding: 20,}}>Record is retain for 6 months</Text>
      {transactions.length > 0 && (
        <View style={{ width: "100%", height: "400%" }}>
          <FlashList
            data={transactions}
            renderItem={TransactionCard}
            keyExtractor={item=> item.id}
            estimatedItemSize={100}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 30,
  },
});
