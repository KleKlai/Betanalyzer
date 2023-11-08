import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

// Components
import TransactionCard from '../Components/TransactionCard'

// Models
import TransactionModel from '../../model/TransactionModel'

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Transactions() {

  const [details, setDetails] = useState([])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@BetRecord');
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      if (jsonValue !== null) {
        console.log(JSON.parse(jsonValue))
        setDetails(JSON.stringify(jsonValue))
      }
    } catch (e) {
      // error reading value
      console.log('error')
    }
  };

  useEffect(() => {
    console.log(getData())
  })

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
