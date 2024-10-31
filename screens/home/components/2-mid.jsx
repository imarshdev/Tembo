import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function MidDetails() {
  const navigation = useNavigation();
  return (
    <View style={styles.midDetails}>
      <TouchableOpacity style={styles.serviceButton}>
        <Entypo name="shopping-bag" size={30} color="skyblue" />
        <View style={{ width: "100%", height: 10 }} />
        <Text>Shopping</Text>
        <Text style={{ fontSize: "12", color: "#ccc" }}>cooming soon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.serviceButton}
        onPress={() => navigation.navigate("OrderRide")}
      >
        <MaterialIcons name="sports-motorsports" size={30} color="limegreen" />
        <View style={{ width: "100%", height: 10 }} />
        <Text>Order Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceButton}>
        <MaterialCommunityIcons
          name="truck-delivery"
          size={30}
          color="orange"
        />
        <View style={{ width: "100%", height: 10 }} />
        <Text>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceButton}>
        <MaterialIcons name="schedule" size={30} color="purple" />
        <View style={{ width: "100%", height: 10 }} />
        <Text>Schedule Ride</Text>
        <Text style={{ fontSize: "12", color: "#ccc" }}>cooming soon</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  midDetails: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  serviceButton: {
    width: "48.5%",
    height: "45%",
    backgroundColor: "#fff",
    marginBottom: "3%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: Platform.OS === "android" ? 5 : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
