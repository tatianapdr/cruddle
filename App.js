import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookListScreen from "./src/components/screens/BookListScreen";
import BookAddScreen from "./src/components/screens/BookAddScreen";
import BookViewScreen from "./src/components/screens/BookViewScreen";
import BookModifyScreen from "./src/components/screens/BookModifyScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisation -------------------------
  // State ----------------------------------
  // Handlers -------------------------------
  // View -----------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BookListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="BookListScreen"
          component={BookListScreen}
          options={{ title: "List Books" }}
        />
        <Stack.Screen
          name="BookAddScreen"
          component={BookAddScreen}
          options={{ title: "Add Books" }}
        />
        <Stack.Screen
          name="BookViewScreen"
          component={BookViewScreen}
          options={{ title: "View Books" }}
        />
        <Stack.Screen
          name="BookModifyScreen"
          component={BookModifyScreen}
          options={{ title: "Modify Books" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
