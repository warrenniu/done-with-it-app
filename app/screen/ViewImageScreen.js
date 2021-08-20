import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors.js";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: colors.primary,
    position: "absolute",
    width: 50,
    height: 50,
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: colors.secondary,
    position: "absolute",
    width: 50,
    height: 50,
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
