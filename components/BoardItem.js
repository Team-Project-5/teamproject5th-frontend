import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const BoardItem = ({
  title,
  author,
  time,
  content,
  station,
  navigator,
  id,
  like,
}) => {
  return (
    <ItemContainer>
      <ContentArea>
        <ImageArea></ImageArea>
        <TextArea>
          <StationText>{station}</StationText>
          <TitleText>{title}</TitleText>
          <AuthorText>{author}</AuthorText>
        </TextArea>
        <InfoBox>
          <Fontisto name="heart-alt" size={20} color="black" />
          <Text style={stlyes.text}>{like}</Text>
          <TouchableOpacity
            onPress={() =>
              navigator.navigate("SpecificPost", {
                title: title,
                author: author,
                time: time,
                content: content,
                station: station,
                id: id,
                like: like,
              })
            }
          >
            <Fontisto name="angle-right" size={24} color="black" />
          </TouchableOpacity>
        </InfoBox>
      </ContentArea>
      <DivisionLine></DivisionLine>
    </ItemContainer>
  );
};

const stlyes = StyleSheet.create({
  text: {
    marginLeft: 3,
  },
});

const ItemContainer = styled.View`
  width: ${screenWidth}px;
  height: 70px;
  margin-bottom: 10px;
`;

const ContentArea = styled.View`
  width: ${screenWidth}px;
  height: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageArea = styled.View`
  width: 106px;
  height: 49px;
  background-color: black;
`;

const TextArea = styled.View`
  width: 191px;
  height: 56px;
  margin-left: 9px;
  display: flex;
  justify-content: center;
`;

const StationText = styled.Text`
  font-size: 10px;
  color: #919eb6;
`;

const TitleText = styled.Text`
  font-size: 17px;
  margin-top: 1px;
`;

const AuthorText = styled.Text`
  font-size: 13px;
  color: #292d32;
  margin-top: 5px;
`;

const DivisionLine = styled.View`
  width: ${screenWidth}px;
  height: 1px;
  background-color: #d5dee7;
  margin-top: 15px;
`;

const InfoBox = styled.View`
  width: 50px;
  flex-direction: row;
  align-items: center;
`;

export default BoardItem;
