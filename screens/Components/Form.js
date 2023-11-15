import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";

// Model
import GameModel from "../../model/GameModel";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConfig";
import { serverTimestamp } from 'firebase/firestore'

const loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const Form = () => {

  const [loading, setLoading] = useState(true);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gametype: "SABONG"
    }
  });

  onSubmit = async (data) => {
    try {

      setLoading(true)
      // Add Validation
      
      const doc = await addDoc(collection(FIREBASE_DB, "transactions"), {
        ...data,
        createdAt: serverTimestamp()
      }).then(() => {
        reset({
          game: "",
          strategy: "",
          amount: "",
          notes: "",
        });

        showToast();
        setLoading(false)
      });
      // console.log("~ file:List.tsx:13 ~ addTodo ~ doc:", doc);
    } catch (e) {
      console.log(`Error on submiting data: ${e}`);
      setLoading(false)
    }
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Saved Successfully",
      position: "bottom",
      visibilityTime: 2000,
    });
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
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={value}
            onBlur={onBlur}
            onValueChange={(value) => onChange(value)}
          >
            {GameModel.map((game, index) => (
              <Picker.Item key={index} label={game.name} value={game.name} />
            ))}
          </Picker>
        )}
        name="gametype"
        rules={{ required: true }}
      />

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
            keyboardType="numeric"
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
        disabled={loading ? true : false}
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
