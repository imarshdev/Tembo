import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text>ServicesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
