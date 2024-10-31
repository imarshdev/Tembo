import { SafeAreaProvider } from "react-native-safe-area-context/src";
import AppNavigator from "./navigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
