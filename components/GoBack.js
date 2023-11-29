import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const GoBack = () => (
  <TouchableOpacity style={styles.container}>
    <Fontisto name="arrow-left" size={20} color="black" />
    <Text style={styles.text}>뒤로가기</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 51,
  },
  text: {
    fontSize: 14,
    marginLeft: 9,
  },
});

export default GoBack;
