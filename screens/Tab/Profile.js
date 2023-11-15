import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bgImage from "../../assets/images/bgImage.png";
import { AuthContext } from "../../Global/AuthContext";

// Screens
import Register from "../Register";

const Profile = ({ navigation }) => {
  const { name, setName } = useContext(AuthContext);

  clearData = async () => {
    try {
      await AsyncStorage.clear();
      setName(null);
    } catch (e) {
      console.log(`Error clearing data: ${e}`);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bgImage.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${name}&size=512&rounded=true&bold=true`,
            }}
            style={styles.profileImage}
          />
          <Text style={styles.ProfileName}>Welcome back, {name}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.playBtn,
              { marginBottom: 10},
            ]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.deleteAccountTxt}>PLAY CLASSODDS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.deleteAccountBtn,
              { marginBottom: 30, backgroundColor: "#F44336" },
            ]}
            onPress={clearData}
          >
            <Text style={styles.deleteAccountTxt}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 30,
  },
  profileContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: 20,
  },
  ProfileName: {
    fontSize: 20,
    fontWeight: "500",
  },
  deleteAccountBtn: {
    padding: 15,
    borderRadius: 15,
    color: "#FFF",
  },
  deleteAccountTxt: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
  playBtn: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#FDD835',
  },
});
