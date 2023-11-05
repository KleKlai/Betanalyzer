import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

// Model
import GameModel from "../../model/GameModel";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";

const Form = () => {
  const [game, setGame] = useState("SABONG");

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "800",
          paddingBottom: 20,
        }}
      >
        RECORD BET
      </Text>
      <Text style={styles.inputTitle}>Game Type</Text>
      <Picker selectedValue={game} onValueChange={(value) => setGame(value)}>
        {GameModel.map((game, index) => (
          <Picker.Item key={index} label={game.name} value={game.name} />
        ))}
      </Picker>
      <Text style={styles.inputTitle}>Bet Strategy</Text>
      <TextInput placeholder="e.g WALA" style={styles.input} />
      <Text style={styles.inputTitle}>Amount</Text>
      <TextInput placeholder="e.g 500" style={styles.input} />
      <Text style={styles.inputTitle}>Notes</Text>
      <TextInput
        placeholder="Write your game notes here."
        style={styles.input}
      />

      <TouchableOpacity
        style={[
          styles.submitBtn,
          { marginBottom: 30, backgroundColor: "#1E88E5" },
        ]}
      >
        <Text style={styles.submitBtnText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 20,
    paddingBottom: 15,
    paddingTop: 10,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#9E9E9E",
    marginBottom: 5
  },
  submitBtn: {
    marginTop: 10,
    padding: 15,
    borderRadius: 15,
    color: "#FFF",
  },
  submitBtnText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
});
