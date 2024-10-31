import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>walamin App</Text>
      <TouchableOpacity
        style={styles.button}
        title="home"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'limegreen',
  },
});
