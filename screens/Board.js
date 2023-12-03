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

const Board = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [boardItems, setBoardItems] = useState([]);
  const [notice, setNotice] = useState();
  const [url, setUrl] = useState("");

  const AxiosBoard = async () => {
    await Axios.get("http://172.20.10.2:8000/api/board")
      .then((response) => {
        setBoardItems(response.data.boards);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const StationSearch = async (searchText) => {
    await Axios.get("http://172.20.10.2:8000/api/board")
      .then((response) => {
        const filtered = boardItems.filter((item) => {
          return item.subwayStation.name === searchText;
        });
        setBoardItems(filtered);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    AxiosBoard();
  }, []);

  useEffect(() => {
    const result = boardItems.map((item, index) => {
      return (
        <BoardItem
          key={index}
          title={item.title}
          station={item.subwayStation.name}
          author={item.user.nickname}
          image={item.content.split("\n")[0]}
          content={item.content.split("\n")[0]}
          navigator={navigation}
          time={"1일전"}
        />
      );
    });
    setNotice(result);
  }, [boardItems]);

  const onChangeText = (payload) => setSearchText(payload);

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
        <PageTitle onPress={AxiosBoard}>전체 게시글</PageTitle>
        <ButtonArea>
          <WritingButton onPress={AxiosBoard}>
            <Text>글 새로고침</Text>
          </WritingButton>
          <WritingButton onPress={() => navigation.navigate("Post")}>
            <Text>글 작성 하기</Text>
          </WritingButton>
        </ButtonArea>
      </TopContainer>
      <ArticleArea>
        <ScrollView>{notice}</ScrollView>
      </ArticleArea>
      <SearchBox>
        <Fontisto name="search" size={24} color="#45B8E9" marginLeft={15} />
        <TextInput
          style={styles.input}
          placeholder="역 검색"
          marginLeft={10}
          onChangeText={onChangeText}
          value={searchText}
          enterKeyHint="done"
          onSubmitEditing={() => StationSearch(searchText)}
        />
      </SearchBox>
    </PageArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

const LoadingText = styled.Text`
  text-align: center;
  color: red;
  font-weight: 700;
  margin: 15px;
`;

export default Board;
