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
import Axios from "../api/Axios";

const screenWidth = Dimensions.get("window").width;

const PostContent = ({
  title,
  author,
  time,
  content,
  station,
  id,
  like,
  reply,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dateString = time;
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - givenDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const AxiosScrap = async () => {
    await Axios.post(`http://172.20.10.2:8000/api/board/${id}/scrap`)
      .then((response) => {
        Alert.alert(
          "스크랩 완료",
          "스크랩 창에서 확인하세요",
          [
            {
              text: "확인",
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {},
          }
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const AxiosLike = async () => {
    await Axios.post(`http://172.20.10.2:8000/api/board/${id}`)
      .then((response) => {
        Alert.alert(
          "좋아요!",
          "글의 좋아요가 추가되었습니다",
          [
            {
              text: "확인",
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {},
          }
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <StationText>{station}</StationText>
          <InfoDownside>
            <AuthorText>{author}</AuthorText>
            <TimeText>
              {daysDifference === 0 ? "오늘" : `${daysDifference}일 전`}
            </TimeText>
          </InfoDownside>
        </InfoArea>
      </UpsideArea>
      <PostTitle>{title}</PostTitle>
      <DownsideArea>
        <SpecificArea>
          <ContentArticle>
            <Text style={styles.text}>{content}</Text>
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
            <Fontisto
              name="heart-alt"
              size={24}
              color="black"
              onPress={AxiosLike}
            />
            <Text style={styles.buttontext}>{like}</Text>
          </ButtonItem>
          <ButtonItem>
            <Fontisto name="commenting" size={24} color="black" />
            <Text style={styles.buttontext}>{reply.length}</Text>
          </ButtonItem>
          <ButtonItem2>
            <Fontisto
              name="bookmark"
              size={24}
              color="black"
              onPress={AxiosScrap}
            />
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
