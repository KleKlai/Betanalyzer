import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [name, setName] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        setName(value)
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData()
  });

  return (
    <AuthContext.Provider value={{ name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
