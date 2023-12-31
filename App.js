import { StyleSheet,} from "react-native";
import ScreenRoute from "./navigation/ScreenRoute";

// Context
import { AuthProvider } from "./Global/AuthContext";

export default function App() {

  return (
    <AuthProvider>
      <ScreenRoute />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
