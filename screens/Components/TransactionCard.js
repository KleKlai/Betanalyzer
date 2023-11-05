import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import formatReadableDate from '../../lib/datelib'

const TransactionCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Headtext}>{item.game}</Text>
      <Text style={styles.text}>Bet Strategy: {item.bet}</Text>
      <Text style={styles.text}>Amount: PHP {item.amount}</Text>
      <Text style={styles.text}>Notes: {item.notes}</Text>

      <Text style={styles.text}>Date: {formatReadableDate(item.createdAt)}</Text>
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
  container: {
    row: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1E88E5',
    margin: 10,
  },
  Headtext: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 15,
  },
  text: {
    color: '#FFF',
    fontStyle: 'italic',
    fontWeight: '400'
  }
})