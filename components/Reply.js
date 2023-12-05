import styled from "styled-components/native";
import { StyleSheet, View, Text } from "react-native";

const Reply = ({ author, time, content }) => {
  const dateString = time;
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - givenDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <View style={{ ...styles.container }}>
      <UpsideArea>
        <ProfileImage />
        <ReplyAuthor>{author}</ReplyAuthor>
        <TimeContent>
          {daysDifference === 0 ? "오늘" : `${daysDifference}일 전`}
        </TimeContent>
      </UpsideArea>
      <DownsideArea>
        <ReplyContent>{content}</ReplyContent>
      </DownsideArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 35, marginLeft: 30 },
});

const UpsideArea = styled.View`
  width: 20%;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const ReplyAuthor = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const TimeContent = styled.Text`
  color: #919eb6;
  font-size: 10px;
  margin-left: 3px;
`;

const DownsideArea = styled.View`
  width: 100%;
  justify-content: center;
  margin-top: 5px;
  margin-left: 10px;
`;

const ReplyContent = styled.Text`
  font-size: 12px;
`;

export default Reply;
