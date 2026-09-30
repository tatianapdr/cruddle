import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerseListScreen from "./src/components/screens/VerseListScreen";
import VerseAddScreen from "./src/components/screens/VerseAddScreen";
import VerseViewScreen from "./src/components/screens/VerseViewScreen";
import VerseModifyScreen from "./src/components/screens/VerseModifyScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisation -------------------------
  // State ----------------------------------
  // Handlers -------------------------------
  // View -----------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="VerseListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="VerseListScreen"
          component={VerseListScreen}
          options={{ title: "List Verses" }}
        />
        <Stack.Screen
          name="VerseAddScreen"
          component={VerseAddScreen}
          options={{ title: "Add Verses" }}
        />
        <Stack.Screen
          name="VerseViewScreen"
          component={VerseViewScreen}
          options={{ title: "View Verses" }}
        />
        <Stack.Screen
          name="VerseModifyScreen"
          component={VerseModifyScreen}
          options={{ title: "Modify Verses" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
