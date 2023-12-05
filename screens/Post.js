import styled from "styled-components/native";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert,
  Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import Axios from "../api/Axios";
import * as ImagePicker from "expo-image-picker";

const screenWidth = Dimensions.get("window").width;

const Post = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [station, setStation] = useState("");

  const handleFirstImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setFirstImage(result.assets[0].uri);
    }
  };

  const handleSecondImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setSecondImage(result.assets[0].uri);
    }
  };

  const handleThirdImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setThirdImage(result.assets[0].uri);
    }
  };

  const AxiosPost = async (
    title,
    content,
    firstImage,
    secondImage,
    thirdImage,
    station
  ) => {
    const mycontent = `${content}\n${firstImage}\n${secondImage}\n${thirdImage}`;
    const boardData = {
      board: {
        title: title,
        content: content,
      },
      subwayStationName: station,
    };
    await Axios.post("http://172.20.10.2:8000/api/board", {
      board: {
        title: title,
        content: content,
      },
      subwayStationName: station,
    })
      .then((response) => {
        if (response.data.status === 200) {
          Alert.alert(
            "글 작성 완료",
            "글 작성이 성공적으로 이루어졌습니다",
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
          navigation.navigate("Board");
        } else if (response.data.status === 500) {
          Alert.alert(
            "글 작성 실패",
            "해당 역이 존재하지 않습니다",
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeTitleText = (payload) => {
    setTitle(payload);
  };
  const onChangeContentText = (payload) => {
    setContent(payload);
  };
  const onChangeStationText = (payload) => {
    setStation(payload);
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
      AxiosPost(title, content, firstImage, secondImage, thirdImage, station);
      setTitle("");
      setContent("");
      setStation("");
      setFirstImage("");
      setSecondImage("");
      setThirdImage("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <PageArea>
        <BackButtonContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Board")}>
            <Fontisto name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <BackTitle onPress={() => console.log(content)}>뒤로가기</BackTitle>
        </BackButtonContainer>
        <PostArea>
          <TitleBox>
            <PostTitle
              placeholder="제목을 입력하세요"
              onChangeText={onChangeTitleText}
              value={title}
            ></PostTitle>
          </TitleBox>
          <ContentBox horizontal={false}>
            <ContentWriting
              placeholder="내용을 작성하세요"
              multiline={true}
              onChangeText={onChangeContentText}
              value={content}
            ></ContentWriting>
          </ContentBox>
          <StationBox>
            <StationSelect
              placeholder="역을 입력하세요"
              onChangeText={onChangeStationText}
              value={station}
            ></StationSelect>
          </StationBox>
          <ImageArea>
            {firstImage && (
              <Image
                source={{ uri: firstImage }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            )}
            {secondImage && (
              <Image
                source={{ uri: secondImage }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            )}
            {thirdImage && (
              <Image
                source={{ uri: thirdImage }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            )}
          </ImageArea>
          <ButtonBox>
            <TouchableOpacity style={styles.button} onPress={handleFirstImage}>
              <Text style={styles.buttontext}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSecondImage}>
              <Text style={styles.buttontext}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleThirdImage}>
              <Text style={styles.buttontext}>3</Text>
            </TouchableOpacity>
          </ButtonBox>
          <PostButton
            onPress={() => {
              handleSubmitButton(
                title,
                content,
                firstImage,
                secondImage,
                thirdImage,
                station
              );
            }}
          >
            <Text style={styles.text}>글 올리기</Text>
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
  button: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontWeight: "bold",
    color: "white",
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

const StationBox = styled.View`
  width: 90%;
  border-bottom-width: 1px solid;
  border-bottom-color: #47b1d2;
  align-items: center;
`;

const StationSelect = styled.TextInput`
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
  margin-top: 10%;
`;

const ButtonBox = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
`;

const ImageArea = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export default Post;
