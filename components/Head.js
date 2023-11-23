import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Head = () => (
  //다른 화면들까지 바꿔서 해야할듯
  <View style={styles.view}>
    <Text style={{ fontSize: 36 }}>환영합니다!</Text>
    <Text style={{ fontSize: 17, color: "#6A798A" }}>
      회원가입 또는 로그인을 해주세요
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginLeft: 20,
    marginTop: 80,
  },
});

export default Head;
