import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from '../screens/Home'
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: 'Home'
        }}/>
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default HomeNavigator