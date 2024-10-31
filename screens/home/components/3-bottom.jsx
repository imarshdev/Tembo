import fride from "../../../assets/f-ride.jpg";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";

export default function BottomImage() {
  return (
    <View style={styles.bottomImage}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={fride} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  imageContainer: {
    width: "95%",
    height: "95%",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
