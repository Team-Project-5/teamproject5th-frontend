import styled from "styled-components/native";
import { Fontisto, Entypo } from "@expo/vector-icons";
import {
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
  Text,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const FindrouteResult = ({ route, navigation }) => {
  const mydist = route.params.dist / 1000;
  const mytime = Math.floor(route.params.time / 60);
  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <PageTitle>
        {route.params.startStation}에서{"\n"}
        {route.params.endStation}까지
      </PageTitle>
      <ResultArea>
        <ResultContainer>
          <ResultTitle>최소시간</ResultTitle>
          <ResultBox>
            <View style={styles.miniTitle}>
              <ThickText>{mytime}</ThickText>
              <ThinText>분</ThinText>
            </View>
          </ResultBox>
        </ResultContainer>
        <ResultContainer>
          <ResultTitle>최소비용</ResultTitle>
          <ResultBox>
            <View style={styles.miniTitle}>
              <ThickText>{route.params.cost}</ThickText>
              <ThinText>원</ThinText>
            </View>
          </ResultBox>
        </ResultContainer>
        <ResultContainer>
          <ResultTitle>최소거리</ResultTitle>
          <ResultBox>
            <View style={styles.miniTitle}>
              <ThickText>{mydist}</ThickText>
              <ThinText>km</ThinText>
            </View>
          </ResultBox>
        </ResultContainer>
        <ShapeBox>
          <BlueCircle>
            <ResultCircle>
              <Text style={styles.station}>{route.params.startStation}</Text>
            </ResultCircle>
          </BlueCircle>
          <Entypo name="arrow-long-right" size={50} color="black" />
          <RedCircle>
            <ResultCircle>
              <Text style={styles.station}>{route.params.endStation}</Text>
            </ResultCircle>
          </RedCircle>
        </ShapeBox>
      </ResultArea>
    </PageArea>
  );
};

const styles = StyleSheet.create({
  miniTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  station: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const PageArea = styled.View`
  flex: 1;
`;

const BackButtonContainer = styled.View`
  width: 83px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-left: 27px;
`;

const BackTitle = styled.Text`
  font-size: 14px;
  margin-left: 9px;
`;

const PageTitle = styled.Text`
  font-size: 36px;
  margin-top: 30px;
  margin-left: 20px;
`;

const ResultArea = styled.View`
  width: ${screenWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultContainer = styled.View`
  width: 100%;
  height: 112px;
  margin-top: 13px;
`;

const ResultBox = styled.View`
  width: 100%;
  height: 56px;
  background-color: #eff2f5;
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
`;

const ResultTitle = styled.Text`
  font-size: 36px;
  margin-left: 13px;
  color: #f8243c;
`;

const ThickText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-left: 21px;
`;

const ThinText = styled.Text`
  font-size: 21px;
`;

const ShapeBox = styled.View`
  width: 90%;
  height: 140px;
  border-radius: 20px;
  margin-top: 20px;
  background-color: #e99b9b;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const BlueCircle = styled.View`
  width: 93px;
  height: 93px;
  border-radius: 50%;
  background-color: #3570e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedCircle = styled.View`
  width: 93px;
  height: 93px;
  border-radius: 50%;
  background-color: #ef2626;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultCircle = styled.View`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: #ffe7e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FindrouteResult;
