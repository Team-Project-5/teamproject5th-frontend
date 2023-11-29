import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CompleteButton = (props) => (
  <TouchableOpacity
    style={[
      styles.button,
      { backgroundColor: props.On ? "#F8243C" : "#FF8895" },
    ]}
    disabled={!props.On}
  >
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 340,
    height: 44,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "124%",
    marginLeft: "4.2%",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default CompleteButton;
