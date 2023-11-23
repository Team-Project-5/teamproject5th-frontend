import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CompleteButton = (props) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 330,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#FF8895",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default CompleteButton;
