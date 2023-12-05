import styled from "styled-components/native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Axios from "../api/Axios";

const screenWidth = Dimensions.get("window").width;

const MainPage = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [station, setStation] = useState("");
  const main = async () => {
    await Axios.get(`http://172.20.10.2:8000/`)
      .then((response) => {
        setUser(response.data.principal);
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const getStation = async () => {
    await Axios.get(`http://172.20.10.2:8000/api/subway`)
      .then((response) => {
        setStation(
          response.data.stationAll[
            Math.floor(Math.random() * response.data.stationAll.length)
          ].name
        );
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    main();
  }, []);

  useEffect(() => {
    getStation();
  }, []);

  return (
    <PageArea>
      <TitleContainer>
        <TitleText onPress={() => console.log(user)}>역이어때</TitleText>
        <View style={styles.view}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TitleContainer>
      <Image
        style={styles.image}
        source={require("../assets/images/Metro.png")}
        resizeMode="contain"
      />
      <MainButton
        onPress={() => {
          navigation.navigate("Board");
          getStation();
        }}
      >
        <UpsideTitle>오늘,</UpsideTitle>
        <DownsideTitleArea>
          <DownsideMainTitle>{station}어때?</DownsideMainTitle>
          <DownsideSubTitle>-전체 게시글 모아보기-</DownsideSubTitle>
        </DownsideTitleArea>
      </MainButton>
    </PageArea>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: 407,
  },
  view: {
    flexDirection: "row",
    marginRight: 5,
  },
  search: {
    marginRight: 15,
  },
});

const PageArea = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.View`
  width: ${screenWidth}px;
  height: 42px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const TitleText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-left: 22px;
  color: #f8243c;
  font-family: Jalnan;
`;

const MainButton = styled.TouchableOpacity`
  width: 350px;
  height: 158px;
  background-color: #f8243c;
  border-radius: 20px;
  box-shadow: 0px 0px 4px #f8243c;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const UpsideTitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  margin-left: 22px;
  color: white;
  font-family: Jalnan;
`;

const DownsideTitleArea = styled.View`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
`;

const DownsideMainTitle = styled.Text`
  font-size: 42px;
  font-weight: 600;
  color: white;
  font-family: Jalnan;
`;

const DownsideSubTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 0px 4px #000;
`;

export default MainPage;
