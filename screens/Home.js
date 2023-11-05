import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Global/AuthContext";

import Banner from "./Components/Banner";
import Form from "./Components/Form";
import KeyboardAvoidingWrapper from "./Components/KeyboardAvoidingWrapper";

const Home = ({ navigation }) => {
  const { name } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingWrapper>
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={{ paddingLeft: 20 }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 500,
                color: "#9E9E9E",
                letterSpacing: 1,
              }}
            >
              Hello,{" "}
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#424242",
                letterSpacing: 1,
                lineHeight: 28,
              }}
            >
              {name}
            </Text>
          </View>
          <Banner navigation={navigation} />
          <Form />
        </View>
      </KeyboardAvoidingWrapper>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight - 10,
  },
});
