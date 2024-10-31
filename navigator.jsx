import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./screens/layout";
import RideNavigator from "./screens/ride/ride";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderRide"
        component={RideNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
