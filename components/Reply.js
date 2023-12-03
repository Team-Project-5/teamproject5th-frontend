import styled from "styled-components/native";
import { StyleSheet, View } from "react-native";

const Reply = ({ author, time, content, isReply }) => {
  return (
    <View style={{ ...styles.container, width: isReply ? "70%" : "80%" }}>
      <UpsideArea>
        <ProfileImage />
        <ReplyAuthor>{author}</ReplyAuthor>
      </UpsideArea>
      <DownsideArea>
        <ReplyContent>{content}</ReplyContent>
      </DownsideArea>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 35 },
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
