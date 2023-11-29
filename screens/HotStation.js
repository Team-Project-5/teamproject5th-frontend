import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Station from "../components/Station";
import styled from "styled-components/native";

const screenWidth = Dimensions.get("window").width;

const HotStation = ({ navigation }) => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <BackButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <Text style={styles.title}>실시간 인기역</Text>
      <Station rate="1위" station="서울역" NumberOfLike="131" />
      <Station rate="2위" station="성수역" NumberOfLike="103" />
      <Station rate="3위" station="인천역" NumberOfLike="76" />
      <Station rate="4위" station="종로3가역" NumberOfLike="45" />
      <Station rate="5위" station="용산역" NumberOfLike="24" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: screenWidth,
  },
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

export default HotStation;
