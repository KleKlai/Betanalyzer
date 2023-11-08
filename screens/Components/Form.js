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
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Form = () => {
  const [game, setGame] = useState("SABONG");
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  onSubmit = async (data) => {

    // const cleanData = JSON.stringify(data)

    try {

      const value = await AsyncStorage.getItem("@BetRecord");

      if (value !== null) {
        await AsyncStorage.mergeItem("@BetRecord", JSON.stringify(data));
      } else {
        await AsyncStorage.setItem('@BetRecord', JSON.stringify(data));
      }

    } catch (e) {
      console.log(`Error on submiting data: ${e}`);
    }
  };

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
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="e.g WALA"
          />
        )}
        name="strategy"
        rules={{ required: true }}
      />

      <Text style={styles.inputTitle}>Amount</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="e.g 500"
          />
        )}
        name="amount"
        rules={{ required: true }}
      />

      <Text style={styles.inputTitle}>Notes</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Write your game notes here."
          />
        )}
        name="notes"
        rules={{ required: true }}
      />

      <TouchableOpacity
        style={[
          styles.submitBtn,
          { marginBottom: 30, backgroundColor: "#1E88E5" },
        ]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitBtnText}>Save</Text>
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
    marginBottom: 5,
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
