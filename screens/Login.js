import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Head from "../components/Head.js";
import styled from "styled-components/native";
import { TextInput, Dimensions, Alert } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isJoin, setIsJoin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleButton = () => {
    setIsLogin(!isLogin);
    setIsJoin(!isJoin);
  };

  const onChangeEmail = (payload) => {
    setEmail(payload);
  };

  const onChangePassword = (payload) => {
    setPassword(payload);
  };
  const onChangeNickname = (payload) => {
    setNickname(payload);
  };

  const onChangeNewEmail = (payload) => {
    setNewEmail(payload);
  };

  const onChangeNewPassword = (payload) => {
    setNewPassword(payload);
  };

  const handleLoginButton = () => {
    if ((email.trim() === "") | (password.trim() === "")) {
      Alert.alert(
        "로그인 오류",
        "적절한 입력이 이루어지지 않았습니다.",
        [
          {
            text: "확인",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    } else {
      navigation.navigate("Home");
    }
  };

  const handleJoinButton = () => {
    if (
      (nickname.trim() === "") |
      (newEmail.trim() === "") |
      (newPassword.trim() === "")
    ) {
      Alert.alert(
        "회원가입 오류",
        "적절한 입력이 이루어지지 않았습니다.",
        [
          {
            text: "확인",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    } else {
      console.log(nickname, newEmail, newPassword);
    }
  };

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
        {isLogin && (
          <View>
            <ItemBox>
              <Text style={styles.text}>이메일 주소</Text>
              <TextInput
                style={styles.input}
                placeholder="이메일을 입력하세요"
                onChangeText={onChangeEmail}
              ></TextInput>
            </ItemBox>
            <ItemBox>
              <Text style={styles.text}>비밀번호</Text>
              <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력하세요"
                onChangeText={onChangePassword}
                secureTextEntry={true}
              ></TextInput>
            </ItemBox>
            <TouchableOpacity
              style={{
                ...styles.submitbutton,
                backgroundColor: "#F8243C",
              }}
              onPress={handleLoginButton}
            >
              <Text style={styles.buttontext}>로그인</Text>
              <Fontisto name="angle-right" size={18} color="white" />
            </TouchableOpacity>
          </View>
        )}
        {isJoin && (
          <View>
            <ItemBox>
              <Text style={styles.text}>닉네임</Text>
              <TextInput
                style={styles.input}
                placeholder="닉네임을 입력하세요"
                onChangeText={onChangeNickname}
              ></TextInput>
            </ItemBox>
            <ItemBox>
              <Text style={styles.text}>이메일 주소</Text>
              <TextInput
                style={styles.input}
                placeholder="이메일을 입력하세요"
                onChangeText={onChangeNewEmail}
              ></TextInput>
            </ItemBox>
            <ItemBox>
              <Text style={styles.text}>비밀번호 생성</Text>
              <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력하세요"
                onChangeText={onChangeNewPassword}
                secureTextEntry={true}
              ></TextInput>
            </ItemBox>
            <TouchableOpacity
              style={{
                ...styles.submitbutton,
                backgroundColor: "#F8243C",
              }}
              onPress={handleJoinButton}
            >
              <Text style={styles.buttontext}>회원가입</Text>
              <Fontisto name="angle-right" size={18} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 330,
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
    marginTop: 6,
    width: "90%",
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EFF2F5",
    padding: 10,
  },
  findPassword: {
    marginBottom: "10%",
    marginLeft: "45%",
  },
  text: {
    fontSize: 17,
  },
  submitbutton: {
    position: "absolute",
    width: "80%",
    height: 44,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "124%",
    marginLeft: 55,
  },
  buttontext: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 4,
  },
});

const ItemBox = styled.View`
  width: ${screenWidth}px;
  justify-content: center;
  margin-top: 40px;
  margin-left: 34px;
`;

export default Login;
