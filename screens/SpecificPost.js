import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import PostContent from "../components/PostContent";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import Reply from "../components/Reply";
import { useState } from "react";
import { TextInput } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

const SpecificPost = () => {
  const [reply, setReply] = useState("");
  const [isFull, setIsFull] = useState(false);
  const onSetReply = (payload) => {
    setReply(payload);
    if (payload !== "") {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  };
  const handleButton = () => {
    if (reply === "") {
      Alert.alert(
        "댓글의 내용이 없습니다",
        "내용을 입력하세요",
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
        "댓글 작성 완료",
        "댓글이 작성되었습니다.",
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
      setReply("");
    }
  };
  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity>
          <Fontisto name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <BackTitle>뒤로가기</BackTitle>
      </BackButtonContainer>
      <ContentArea>
        <PostContent />
      </ContentArea>
      <ReplyArea>
        <Reply
          author={"김정민"}
          time={"1일전"}
          content={
            "어머 저 여기 가봤어요! 평소에 디올 향수 좋아해서 많이 가는데 외관도 이쁘고 볼거리도 많아요 추천합니당"
          }
          isReply={false}
        />
        <Reply
          author={"이민주"}
          time={"1일전"}
          content={
            "오 디올 향수 혹시 어떤거쓰세요? 저 이번에 가는데 하나 장만할까봐요"
          }
          isReply={true}
        />
        <Reply
          author={"임지민"}
          time={"1일전"}
          content={
            "여기 수요일, 목요일에 휴문데 꼭 확인해보고 가세요ㅠㅠ 저 저번에 모르고 갔다가 퇴짜 맞았어요 ㅠㅠㅠ"
          }
          isReply={false}
        />
      </ReplyArea>
      <ReplyPostContainer>
        <TextInput
          style={styles.textinput}
          placeholder="댓글을 남겨주세요."
          onChangeText={onSetReply}
          marginLeft={10}
          value={reply}
          enterKeyHint="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <Text style={styles.text}>등록</Text>
        </TouchableOpacity>
      </ReplyPostContainer>
    </PageArea>
  );
};

const styles = StyleSheet.create({
  textinput: {
    width: "80%",
    fontSize: 12,
    backgroundColor: "white",
  },
  button: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8243c",
  },
  text: {
    fontSize: 12,
    color: "white",
  },
});

const PageArea = styled.ScrollView`
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

const ContentArea = styled.View`
  width: ${screenWidth}px;
  display: flex;
  align-items: center;
`;

const ReplyArea = styled.View`
  width: ${screenWidth}px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ReplyPostContainer = styled.View`
  width: ${screenWidth}px;
  height: 55px;
  position: fixed;
  flex-direction: row;
`;

export default SpecificPost;
