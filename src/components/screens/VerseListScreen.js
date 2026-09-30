import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen.js";

import initialVerses from "../../data/verses.js";

export const VerseListScreen = () => {
  // Initialisation -------------------------
  const verses = initialVerses;

  // State ----------------------------------
  // Handlers -------------------------------
  // View -----------------------------------
  return (
    <Screen>
      <View style={styles.container}>
        {verses.map((verse) => {
          return (
            <View key={verse.VerseID} style={styles.item}>
              <Text style={styles.text}>
                {verse.VerseBookName} {verse.VerseChapter}:{verse.VerseNumber}
              </Text>
            </View>
          );
        })}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default VerseListScreen;
