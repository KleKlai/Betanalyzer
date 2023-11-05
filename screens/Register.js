import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Register = () => {
  return (
    <WebView
      styles={styles.webview}
      source={{
        uri: "https://www.clashodds.com.ph",
      }}
    />
  );
};

export default Register;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
