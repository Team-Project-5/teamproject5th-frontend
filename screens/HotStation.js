import styled from "styled-components/native";
import {
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import BoardItem from "../components/BoardItem";
import Axios from "../api/Axios";

const screenWidth = Dimensions.get("window").width;

const HotStation = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [popularItems, setPopularItems] = useState([]);
  const [notice, setNotice] = useState();
  const [url, setUrl] = useState("");

  const AxiosPopular = async () => {
    await Axios.get("http://172.20.10.2:8000/api/board/popular")
      .then((response) => {
        setPopularItems(response.data.boards);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    AxiosPopular();
  }, []);

  useEffect(() => {
    const likeSort = popularItems.sort((a, b) => b.likeCount - a.likeCount);
    const result = likeSort.map((item, index) => {
      return (
        <BoardItem
          key={index}
          title={item.title}
          station={item.subwayStation.name}
          id={item.id}
          author={item.user.nickname}
          image={item.content.split("\n")[0]}
          content={item.content.split("\n")[0]}
          navigator={navigation}
          like={item.likeCount}
          time={item.createDate}
        />
      );
    });
    setNotice(result);
  }, [popularItems]);

  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <TopContainer>
        <PageTitle onPress={AxiosPopular}>실시간 인기역</PageTitle>
        <ButtonArea>
          <WritingButton onPress={AxiosPopular}>
            <Text>글 새로고침</Text>
          </WritingButton>
        </ButtonArea>
      </TopContainer>
      <ArticleArea>
        <ScrollView>{notice}</ScrollView>
      </ArticleArea>
    </PageArea>
  );
};

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

const TopContainer = styled.View`
  width: 340px;
  height: 70px;
  flex-direction: row;
  align-items: center;
`;

const ButtonArea = styled.View`
  width: 100px;
  margin-left: 100px;
  margin-top: 55px;
  justify-content: center;
  align-items: center;
`;

const WritingButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: #eff2f5;
  justify-content: center;
  align-items: center;
`;

const BackTitle = styled.Text`
  font-size: 14px;
  margin-left: 9px;
`;

const PageTitle = styled.Text`
  font-size: 36px;
  margin-top: 30px;
  margin-left: 27px;
`;

const ArticleArea = styled.View`
  width: ${screenWidth}px;
  height: 450px;
  display: flex;
  align-items: center;
  margin-top: 27px;
`;

const SearchBox = styled.View`
  width: 320px;
  height: 40px;
  background-color: #eff2f5;
  flex-direction: row;
  align-items: center;
  border-radius: 14px;
  margin-top: 65px;
  margin-left: 34px;
`;

export default HotStation;
