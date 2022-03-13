import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Navigation from "./components/Screen/Navigation/Navigation";

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "blue",
  },
});
