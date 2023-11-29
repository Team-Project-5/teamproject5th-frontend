import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import RouteModal from "../components/RouteModal";

const screenWidth = Dimensions.get("window").width;

const FindrouteMain = ({ navigation }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState([]);
  const [isStartModalVisible, setIsStartModalVisible] = useState(false);
  const [isEndModalVisible, setIsEndModalVisible] = useState(false);
  const onChangeStartText = (payload) => setStart(payload);
  const onChangeEndText = (payload) => setEnd(payload);
  const onSubmitText = (start, end) => {
    setResult([start, end]);
  };
  const handleStartModalChange = (visibility) => {
    setIsStartModalVisible(visibility);
  };
  const handleEndModalChange = (visibility) => {
    setIsEndModalVisible(visibility);
  };
  const handleStartStation = (station) => {
    setStart(station);
  };
  const handleEndStation = (station) => {
    setEnd(station);
  };

  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <PageTitle>길찾기</PageTitle>
      <StationArea>
        <StationBox>
          <Fontisto name="search" size={24} color="#45B8E9" marginLeft={15} />
          <TextInput
            style={styles.input}
            placeholder="출발역 검색"
            marginLeft={10}
            onChangeText={onChangeStartText}
            value={start}
            onPressIn={() => setIsStartModalVisible(!isStartModalVisible)}
            enterKeyHint="done"
          />
          <RouteModal
            isVisible={isStartModalVisible}
            visibleFunc={handleStartModalChange}
            setStationFunc={handleStartStation}
            isStart={true}
          />
        </StationBox>
        <StationBox>
          <Fontisto name="search" size={24} color="#45B8E9" marginLeft={15} />
          <TextInput
            style={styles.input}
            placeholder="도착역 검색"
            marginLeft={10}
            onChangeText={onChangeEndText}
            value={end}
            onPressIn={() => setIsEndModalVisible(!isEndModalVisible)}
            enterKeyHint="done"
          />
          <RouteModal
            isVisible={isEndModalVisible}
            visibleFunc={handleEndModalChange}
            setStationFunc={handleEndStation}
            isStart={false}
          />
        </StationBox>
        <SubmitButton
          onPress={() => {
            onSubmitText(start, end);
          }}
        >
          <SubmitTitle onPress={() => navigation.navigate("RouteResult")}>
            경로 검색!
          </SubmitTitle>
        </SubmitButton>
      </StationArea>
    </PageArea>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
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
  margin-top: 40px;
  margin-left: 27px;
`;

const BackTitle = styled.Text`
  font-size: 14px;
  margin-left: 9px;
`;

const PageTitle = styled.Text`
  font-size: 36px;
  margin-top: 18px;
  margin-left: 27px;
`;

const StationArea = styled.View`
  width: ${screenWidth}px;
  display: flex;
  align-items: center;
`;

const StationBox = styled.View`
  width: 347px;
  height: 50px;
  background-color: #eff2f5;
  flex-direction: row;
  align-items: center;
  border-radius: 14px;
  margin-top: 23px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 350px;
  height: 100px;
  background-color: #f8243c;
  border-radius: 20px;
  box-shadow: 0px 0px 4px #f8243c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 350px;
`;

const SubmitTitle = styled.Text`
  font-size: 42px;
  color: white;
  font-family: Jalnan;
`;

export default FindrouteMain;
