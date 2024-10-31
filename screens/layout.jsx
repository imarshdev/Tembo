import React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

import HomeScreen from "./home/home";
import AccountScreen from "./account/account";
import ServicesScreen from "./services/services";
import { StyleSheet } from "react-native";

export default function MyTabs() {
  const insets = useSafeAreaInsets();

  const renderTabIcon = ({ focused, color, size }, routeName) => {
    switch (routeName) {
      case "home":
        return <Entypo name="home" size={size} color={color} />;
      case "services":
        return <FontAwesome5 name="servicestack" size={size} color={color} />;
      case "account":
        return (
          <MaterialCommunityIcons
            name="racing-helmet"
            size={size}
            color={color}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon({ focused, color, size }, route.name),
          tabBarActiveTintColor: "limegreen",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            paddingBottom: 5,
            height: 80,
            paddingTop: insets.bottom,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: Platform.OS === "android" ? 5 : 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarLabelStyle: {
            fontSize: 12,
            textAlign: "center",
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="services" component={ServicesScreen} />
        <Tab.Screen name="account" component={AccountScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
