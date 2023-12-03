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
import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import Axios from "../api/Axios";

const screenWidth = Dimensions.get("window").width;

const SpecificPost = ({ route, navigation }) => {
  const { title, author, time, content, station, id, like, reply } =
    route.params;
  const [myReply, setReply] = useState("");
  const [isFull, setIsFull] = useState(false);
  const [notice, setNotice] = useState();

  const onSetReply = (payload) => {
    setReply(payload);
    if (payload !== "") {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  };
  const handleButton = () => {
    if (myReply === "") {
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
      AxiosReply(myReply);
      setReply("");
    }
  };

  const AxiosReply = async (reply) => {
    await Axios.post(`http://172.20.10.2:8000/api/board/${id}/reply`, {
      content: reply,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const result = reply.map((item, index) => {
      return (
        <Reply
          key={index}
          author={item.user.nickname}
          content={item.content.split("\n")[0]}
          time={item.createDate}
        />
      );
    });
    setNotice(result);
  }, [reply]);

  return (
    <PageArea>
      <BackButtonContainer>
        <TouchableOpacity>
          <Fontisto
            name="arrow-left"
            size={20}
            color="black"
            onPress={() => navigation.navigate("Board")}
          />
        </TouchableOpacity>
        <BackTitle onPress={() => console.log(reply[0])}>뒤로가기</BackTitle>
      </BackButtonContainer>
      <ContentArea>
        <PostContent
          title={title}
          author={author}
          time={time}
          content={content}
          station={station}
          id={id}
          like={like}
          reply={reply}
        />
      </ContentArea>
      <ReplyArea>{notice}</ReplyArea>
      <ReplyPostContainer>
        <TextInput
          style={styles.textinput}
          placeholder="댓글을 남겨주세요."
          onChangeText={onSetReply}
          marginLeft={10}
          value={myReply}
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
