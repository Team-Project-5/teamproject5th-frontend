import styled from "styled-components/native";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;

const Modify = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleText = (payload) => {
    setTitle(payload);
  };
  const onChangeContentText = (payload) => {
    setContent(payload);
  };
  const handleSubmitButton = () => {
    if (title.trim() === "" || content.trim() === "") {
      Alert.alert(
        "제목 또는 내용이 없습니다",
        "양식을 확인하세요.",
        [
          {
            text: "확인",
            style: "default",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    } else {
      Alert.alert(
        "게시물 작성 완료",
        "글이 작성되었습니다.",
        [
          {
            text: "확인",
            style: "default",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {},
        }
      );
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <PageArea>
        <BackButtonContainer>
          <TouchableOpacity>
            <Fontisto name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <BackTitle>뒤로가기</BackTitle>
        </BackButtonContainer>
        <PostArea>
          <TitleBox>
            <PostTitle
              placeholder="제목을 입력하세요"
              onChangeText={onChangeTitleText}
            ></PostTitle>
          </TitleBox>
          <ContentBox horizontal={false}>
            <ContentWriting
              placeholder="내용을 작성하세요"
              multiline={true}
              onChangeText={onChangeContentText}
            ></ContentWriting>
          </ContentBox>
          <PostButton onPress={handleSubmitButton}>
            <Text style={styles.text}>글 수정하기</Text>
            <Fontisto name="angle-right" size={24} color="white" />
          </PostButton>
        </PostArea>
      </PageArea>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
    marginRight: 2,
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

const PostArea = styled.View`
  width: ${screenWidth}px;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.View`
  width: 90%;
  border-bottom-width: 1px solid;
  border-bottom-color: #47b1d2;
  margin-top: 25px;
`;

const PostTitle = styled.TextInput`
  font-size: 36px;
`;

const ContentBox = styled.ScrollView`
  width: 90%;
  height: 45%;
  margin-top: 12px;
`;

const ContentWriting = styled.TextInput`
  font-size: 17px;
`;

const PostButton = styled.TouchableOpacity`
  width: 183px;
  height: 64px;
  border-radius: 18px;
  background-color: #f8243c;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 45%;
`;

export default Modify;
