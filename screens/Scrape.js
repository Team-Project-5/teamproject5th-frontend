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

const Scrape = ({ navigation }) => {
  const [scrapItems, setScrapItems] = useState([]);
  const [notice, setNotice] = useState();
  const [url, setUrl] = useState("");

  const AxiosScrap = async () => {
    await Axios.get("http://172.20.10.2:8000/api/scrap")
      .then((response) => {
        setScrapItems(response.data.scraps);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    AxiosScrap();
  }, []);

  useEffect(() => {
    const result = scrapItems.map((item, index) => {
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
          time={item.createDate}
        />
      );
    });
    setNotice(result);
  }, [scrapItems]);

  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
        {url && (
          <Image source={{ uri: url }} style={{ width: 106, height: 49 }} />
        )}
      </BackButtonContainer>
      <TopContainer>
        <PageTitle>스크랩</PageTitle>
        <ButtonArea>
          <WritingButton onPress={AxiosScrap}>
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
  justify-content: space-between;
`;

const ButtonArea = styled.View`
  width: 100px;
  margin-top: 50px;
  margin-left: 180px;
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

export default Scrape;
