import { StyleSheet, View, Text } from "react-native";
import TopBox from "./components/1-top";
import MidDetails from "./components/2-mid";
import BottomImage from "./components/3-bottom";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <TopBox />
      </View>
      <View style={{ width: "100%", height: 10 }} />
      <View style={styles.midDetails}>
        <MidDetails />
      </View>
      <View style={{ width: "100%", height: 10 }} />
      <View style={styles.image}>
        <BottomImage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "start",
    alignItems: "center",
  },
  topBox: {
    width: "95%",
    height: "30%",
    backgroundColor: "limegreen",
    borderRadius: 10,
  },
  midDetails: {
    width: "90%",
    height: "35%",
  },
  image: {
    width: "95%",
    height: "30%",
  },
});
