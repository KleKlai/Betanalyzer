import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(`Error on getdata: ${e}`);
  }
};

export {getData};
