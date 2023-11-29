import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const [text, onChangeText] = React.useState("");
  const isDone = () => {
    if (props.title == "이메일 주소") {
      if (text != "") {
        () => props.setEmail(true);
        props.email(text);
      } else {
        props.setEmail(false);
      }
    } else if (props.title == "비밀번호") {
      if (text != "") {
        () => props.setPW(true);
        props.password(text);
      } else {
        props.setPW(false);
      }
    } else if (props.title == "닉네임") {
      if (text != "") {
        props.setName(true);
      } else {
        props.setName(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        placeholder={props.message}
        style={styles.input}
        onChangeText={onChangeText}
        onKeyPress={isDone}
        value={text}
        secureTextEntry={props.isPassword ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 13,
  },
  input: {
    height: 51,
    width: 348,
    borderRadius: 14,
    backgroundColor: "#EFF2F5",
    marginTop: 6,
    paddingLeft: 10,
  },
  text: {
    fontSize: 17,
  },
});

export default Input;
