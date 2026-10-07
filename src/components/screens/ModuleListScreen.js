import { useState } from 'react';
import { StyleSheet } from 'react-native';
import initialModules from '../../data/modules.js';
import Screen from '../layout/Screen.js';
import ModuleList from '../entity/modules/ModuleList.js';
import RenderCount from '../UI/RenderCount.js';

export const ModuleListScreen = () => {
  // Initialisation -------------------------
  // State ----------------------------------
  const [modules, setModules] = useState(initialModules); // state arrays, functions

  // Handlers -------------------------------
  const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // View -----------------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
