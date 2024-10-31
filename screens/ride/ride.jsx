import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideSearch from "./comonents/RideSearch.jsx";
import ConfirmLocations from "./comonents/ConfirmLocations.jsx";
import ConfirmRide from "./comonents/ConfirmRide.jsx";
import Waiting from "./comonents/Waiting.jsx";
import RideResults from "./comonents/RideResults.jsx";
import OngoingRide from "./comonents/OngoingRide.jsx";
import RideEnded from "./comonents/RideEnded.jsx";

const RideStack = createNativeStackNavigator();

export default function RideNavigator() {
  return (
    <RideStack.Navigator screenOptions={{ headerShown: false }}>
      <RideStack.Screen name="RideSearch" component={RideSearch} />
      <RideStack.Screen name="ConfirmLocations" component={ConfirmLocations} />
      <RideStack.Screen name="ConfirmRide" component={ConfirmRide} />
      <RideStack.Screen name="Waiting" component={Waiting} />
      <RideStack.Screen name="RideResults" component={RideResults} />
      <RideStack.Screen name="OngoingRide" component={OngoingRide} />
      <RideStack.Screen name="RideEnded" component={RideEnded} />
    </RideStack.Navigator>
  );
}
