import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen.js';

export const ModuleViewScreen = ({ navigate, route }) => {
  // Initialisation -------------------------
  const { module } = route.params;
  // State ----------------------------------
  // Handlers -------------------------------
  // View -----------------------------------
  return (
    <Screen>
      <Text>
        View {module.ModuleCode} {module.ModuleName}
      </Text>
      <Text>Level {module.ModuleLevel}</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
