import styled from "styled-components/native";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import ReportModal from "./ReportModal";

const screenWidth = Dimensions.get("window").width;

const PostContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const selectMenu = () => {
    Alert.alert(
      "글 수정/신고",
      "원하는 메뉴를 선택해주세요",
      [
        {
          text: "글 수정",
          onPress: () => {
            console.log("글수정");
          },
        },
        {
          text: "글 신고",
          onPress: () => {
            setIsModalVisible(true);
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
    <ContentArea>
      <UpsideArea>
        <ImageArea></ImageArea>
        <InfoArea>
          <StationText>성수역</StationText>
          <InfoDownside>
            <AuthorText>박준혁</AuthorText>
            <TimeText>1일전</TimeText>
          </InfoDownside>
        </InfoArea>
      </UpsideArea>
      <PostTitle>성수역 디올</PostTitle>
      <DownsideArea>
        <SpecificArea>
          <ContentArticle>
            <Text style={styles.text}>
              이번 전시는 미스 디올 향수에 관한 전시입니다. 이 향수의 탄생부터
              역사와 스토리, 그리고 미스 디올 향수를 재해석한 작품까지 다양하게
              만나볼 수 있습니다.
            </Text>
          </ContentArticle>
        </SpecificArea>
        <ScrollView
          style={styles.scorllview}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ ...styles.view, backgroundColor: "red" }}></View>
          <View style={{ ...styles.view, backgroundColor: "blue" }}></View>
          <View style={{ ...styles.view, backgroundColor: "black" }}></View>
        </ScrollView>
        <ButtonArea>
          <ButtonItem>
            <Fontisto name="heart-alt" size={24} color="black" />
            <Text style={styles.buttontext}>5</Text>
          </ButtonItem>
          <ButtonItem>
            <Fontisto name="commenting" size={24} color="black" />
            <Text style={styles.buttontext}>3</Text>
          </ButtonItem>
          <ButtonItem2>
            <Fontisto name="bookmark" size={24} color="black" />
          </ButtonItem2>
          <ButtonItem2 onPress={selectMenu}>
            <Fontisto name="move-h-a" size={24} color="black" />
          </ButtonItem2>
        </ButtonArea>
        <ReportModal
          isVisible={isModalVisible}
          visibleFunc={setIsModalVisible}
        />
      </DownsideArea>
    </ContentArea>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  scorllview: {
    width: 375,
    height: 422,
    marginTop: 7,
  },
  view: {
    width: 375,
    height: 422,
  },
  buttontext: {
    fontSize: 12,
    color: "#919eb6",
    marginLeft: 3,
  },
});

const ContentArea = styled.View`
  width: ${screenWidth}px;
`;

const UpsideArea = styled.View`
  width: ${screenWidth}px;
  flex-direction: row;
  margin-left: 22px;
  margin-top: 16px;
`;

const ImageArea = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const InfoArea = styled.View`
  width: 66px;
  height: 31px;
  margin-left: 10px;
`;

const StationText = styled.Text`
  font-size: 10px;
  color: #919eb6;
`;

const InfoDownside = styled.View`
  width: 66px;
  height: 14px;
  flex-direction: row;
  margin-top: 7px;
`;

const AuthorText = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

const TimeText = styled.Text`
  font-size: 10px;
  color: #919eb6;
  margin-left: 4px;
`;

const DownsideArea = styled.View`
  width: ${screenWidth}px;
  align-items: center;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-top: 12px;
  margin-left: 22px;
`;

const SpecificArea = styled.View`
  width: ${screenWidth}px;
  align-items: center;
  margin-top: 16px;
`;

const ContentArticle = styled.View`
  width: 90%;
`;

const ButtonArea = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 11px;
`;

const ButtonItem = styled.TouchableOpacity`
  width: 40px;
  height: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const ButtonItem2 = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

export default PostContent;
