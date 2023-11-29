import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import PostPreview from "../components/PostPreview";
import Paging from "../components/Paging";
import styled from "styled-components/native";

const Scrape = ({ navigation }) => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <BackButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <Text style={styles.title}>스크랩</Text>
      <View style={{ marginTop: "5%" }}>
        <PostPreview
          station="성수역"
          postTitle="성수역 디올"
          userName="박준혁"
        />
        <PostPreview
          station="성수역"
          postTitle="성수역 디올"
          userName="박준혁"
        />
        <PostPreview
          station="성수역"
          postTitle="성수역 디올"
          userName="박준혁"
        />
        <PostPreview
          station="성수역"
          postTitle="성수역 디올"
          userName="박준혁"
        />
        <PostPreview
          station="성수역"
          postTitle="성수역 디올"
          userName="박준혁"
        />
      </View>
      <Paging />
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {},
  title: {
    fontSize: 36,
    marginTop: 18,
    marginLeft: 27,
  },
});

const BackButtonContainer = styled.View`
  width: 83px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-left: 27px;
`;

const BackTitle = styled.Text`
  font-size: 14px;
  margin-left: 9px;
`;

export default Scrape;
