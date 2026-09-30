import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen.js";

import initialVerses from "../../data/verses.js";

export const VerseListScreen = () => {
  // Initialisation -------------------------
  const verses = initialVerses;

  // State ----------------------------------
  // Handlers -------------------------------
  const handleSelect = () => alert("Item selected"); // anon: if called, will call alert

  // View -----------------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {verses.map((verse) => {
          return (
            <Pressable key={verse.VerseID} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {verse.VerseBookName} {verse.VerseChapter}:{verse.VerseNumber}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default VerseListScreen;
