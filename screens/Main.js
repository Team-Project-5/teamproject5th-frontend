import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import { StyleSheet, Image, Dimensions, Text } from "react-native";

const screenWidth = Dimensions.get("window").width;

const MainPage = () => {
  return (
    <PageArea>
      <TitleContainer>
        <TitleText>역이어때</TitleText>
        <Text style={styles.search}>
          <Fontisto name="search" size={24} color="black" />
        </Text>
      </TitleContainer>
      <Image
        style={styles.image}
        source={require("../assets/images/Metro.png")}
        resizeMode="contain"
      />
      <MainButton>
        <UpsideTitle>오늘,</UpsideTitle>
        <DownsideTitleArea>
          <DownsideMainTitle>서울역 어때?</DownsideMainTitle>
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
  search: {
    marginRight: 21,
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
`;

const UpsideTitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  margin-left: 22px;
  color: white;
  font-family: Jalnan;
`;

const DownsideTitleArea = styled.View`
  width: 250px;
  height: 55px;
  margin-left: 90px;
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
