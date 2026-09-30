import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const BookModifyScreen = () => {
  // Initialisation -------------------------
  // State ----------------------------------
  // Handlers -------------------------------
  // View -----------------------------------
  return (
    <View style={styles.container}>
      <Text>Modify</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookModifyScreen;
