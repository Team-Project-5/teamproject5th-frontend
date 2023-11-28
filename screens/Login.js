import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Head from "../components/Head.js";
import LoginSet from "../components/LoginSet.js";
import JoinSet from "../components/JoinSet.js";
import CompleteButton from "../components/CompleteButton.js";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isJoin, setIsJoin] = useState(false);
  const [valid, setValid] = useState(false);

  const handleButton = () => {
    setIsLogin(!isLogin);
    setIsJoin(!isJoin);
  };

  const isDone = (Done) => {
    setValid(Done);
  }
  

  return (
    <View style={styles.screen}>
      <Head />
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity
            style={[
              styles.selectbutton,
              { backgroundColor: isLogin ? "#F4739E" : "#FDD3E1" },
            ]}
            onPress={handleButton}
          >
            <Text
              style={[styles.text, { color: isLogin ? "white" : "#F4739E" }]}
            >
              로그인
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectbutton,
              { backgroundColor: isJoin ? "#F4739E" : "#FDD3E1" },
            ]}
            onPress={handleButton}
          >
            <Text
              style={[styles.text, { color: isJoin ? "white" : "#F4739E" }]}
            >
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
        {isLogin && <View>
          <LoginSet isDone={isDone}/>
          <CompleteButton title="로그인 >" On={valid} /> 
          </View>}
        {isJoin && <View>
          <JoinSet isDone={isDone}/>
          <CompleteButton title="회원가입 >" On={true} /> 
          </View>}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: 330, //..
    height: 63,
    borderRadius: 230,
    flexDirection: "row",
    backgroundColor: "#FDD3E1",
    padding: 10,
    marginTop: 21,
  },
  selectbutton: {
    width: 151,
    height: 43,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 24,
  },
  findPassword: {
    marginBottom: "10%",
    marginLeft: "45%",
  },
  text: {
    fontSize: 17,
  },
});