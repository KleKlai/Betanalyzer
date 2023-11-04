import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

// Components
import TransactionCard from '../Components/TransactionCard'

// Models
import TransactionModel from '../../model/TransactionModel'

export default function Transactions() {
  return (
    <View style={styles.container}>
      <FlatList
      data={TransactionModel}
      renderItem={({item}) => <TransactionCard item={item} />}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 15,
    paddingTop: 30,
  },
});
