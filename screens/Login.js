import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../Global/AuthContext";

const Login = ({ navigation }) => {

  const { name, setName } = useContext(AuthContext);
  const [inputName, setInputName] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Onboardingview");

      if (value == null) {
        navigation.navigate("Onboarding");
      }
    } catch (e) {
      console.log(`Error on getData: ${e}`);
    }
  };

  const storeData = async () => {
    Keyboard.dismiss();

    setName(inputName)
    
    try {
      await AsyncStorage.setItem("name", JSON.stringify(inputName));
    } catch (e) {
      console.log(`Error on getData: ${e}`);
    }
  };

  // Run once
  useEffect(() => {
    getData();
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Let's Get Personal!</Text>
        <View style={styles.main}>
          <Text style={styles.description}>
            We'd love to make your experience unique. Could you share your name
            with us?
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setInputName(value)}
            placeholder="Your Name:"
          />
        </View>
        <TouchableOpacity
          style={styles.proceedbtn}
          onPress={storeData}
        >
          <Text style={styles.proceedbtnText}>Let's Begin</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 30,
  },
  main: {
    flex: 2,
  },
  loginBtn: {
    backgroundColor: "#F1F1F1",
    padding: 20,
    borderRadius: 25,
    width: 100,
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    flex: 1,
    color: "#424242",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 90,
  },
  description: {
    color: "#263238",
    fontWeight: "400",
  },
  input: {
    height: 50,
    marginTop: 20,
    backgroundColor: "#F1F1F1",
    padding: 10,
    borderRadius: 15,
    fontSize: 15,
  },
  proceedbtn: {
    backgroundColor: "#1E88E5",
    padding: 15,
    borderRadius: 15,
    color: "#FFF",
  },
  proceedbtnText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
});
