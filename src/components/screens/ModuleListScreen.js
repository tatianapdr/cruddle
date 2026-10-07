import { ScrollView, StyleSheet } from 'react-native';
import Screen from '../layout/Screen.js';
import initialModules from '../../data/modules.js';
import ModuleItem from '../entity/modules/ModuleItem.js';

export const ModuleListScreen = () => {
  // Initialisation -------------------------
  const modules = initialModules;

  // State ----------------------------------
  // Handlers -------------------------------
  const handleSelect = () => alert('Item selected'); // anon: if called, will call alert

  // View -----------------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return <ModuleItem key={module.ModuleID} module={module} onSelect={handleSelect} />;
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
