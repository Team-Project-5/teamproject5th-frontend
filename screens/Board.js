import styled from "styled-components/native";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  RefreshControl,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import BoardItem from "../components/BoardItem";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    id: 1,
    station: "성수역",
    title: "성수역 디올",
    author: "김김김",
  },
  {
    id: 2,
    station: "성수역",
    title: "성수역 디올",
    author: "김김김",
  },
  {
    id: 3,
    station: "성수역",
    title: "성수역 디올",
    author: "김김김",
  },
  {
    id: 4,
    station: "성수역",
    title: "성수역 디올",
    author: "김김김",
  },
  {
    id: 5,
    station: "성수역",
    title: "성수역 디올",
    author: "김김김",
  },
  {
    id: 6,
    station: "성수역",
    title: "성수역 디올",
    author: "김김김",
  },
];

const Board = () => {
  const [items, setItems] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isNew, setNew] = useState(true);
  const toggleMenu = () => {
    setMenu(!isNew);
  };
  const onChangeText = (payload) => setSearchText(payload);

  const onEndReached = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          {
            id: prev[prev.length - 1].id + 1,
            station: "new station",
            title: "new title",
            author: "new author",
          },
        ]);
        setIsLoading(false);
      }, 3000);
    }
  };
  const handleEmpty = () => {
    return <Text>글이 존재하지 않습니다</Text>;
  };
  const renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <BoardItem
            station={item.station}
            title={item.title}
            author={item.author}
          />
        </View>
      </View>
    );
  };

  const selectSort = () => {
    Alert.alert(
      "정렬 기준 선택",
      "정렬 기준을 선택해주세요",
      [
        {
          text: "최신순",
          onPress: () => {
            setNew(true);
          },
        },
        {
          text: "인기순",
          onPress: () => {
            setNew(false);
          },
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      }
    );
  };

  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <TopContainer>
        <PageTitle>전체 게시글</PageTitle>
        <ButtonArea>
          <WritingButton>
            <Text>글 작성 하기</Text>
          </WritingButton>
          <SelectArea onPress={() => selectSort()}>
            <SelectTitle>{isNew ? "최신순" : "인기순"}</SelectTitle>
            <MaterialCommunityIcons
              name="cursor-default-click"
              size={18}
              color="black"
              marginTop={6}
            />
          </SelectArea>
        </ButtonArea>
      </TopContainer>
      <ArticleArea>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={handleEmpty}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.8}
            ListFooterComponent={
              isLoading && <LoadingText>읽어들이는 중...</LoadingText>
            }
            refreshing={isLoading}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          />
        </SafeAreaView>
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
          onSubmitEditing={() => console.log(searchText)}
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
  margin-left: 87px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const SelectTitle = styled.Text`
  font-size: 12px;
  margin-top: 12px;
`;

const SelectArea = styled.TouchableOpacity`
  width: 50px;
  flex-direction: row;
  justify-content: center;
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
