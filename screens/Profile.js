import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import Axios from "../api/Axios";
import { useState, useEffect } from "react";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState({});

  const main = async () => {
    await Axios.get(`http://172.20.10.2:8000/`)
      .then((response) => {
        setUser(response.data.principal);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    main();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <BackButtonContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Fontisto name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <BackTitle>뒤로가기</BackTitle>
        </BackButtonContainer>
        <Text style={styles.title}>프로필</Text>
        <View style={styles.userInfo}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../assets/profile.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>닉네임</Text>
        <Text style={styles.content}>{user.nickname}</Text>
        <Text style={styles.text}>이메일 주소</Text>
        <Text style={styles.content}>{user.username}</Text>
      </View>
    </View>
  );
};
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: screenWidth,
  },
  title: {
    fontSize: 36,
    marginTop: 18,
    marginLeft: 27,
  },
  userInfo: {
    width: screenWidth,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EFF2F5",
    marginTop: 19,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginTop: 21,
    marginHorizontal: 100,
  },
  text: {
    fontSize: 25,
    marginTop: 50,
    marginLeft: 20.5,
  },
  content: {
    color: "#45B8E9",
    fontSize: 18,
    marginTop: 30,
    marginLeft: 20.5,
  },
});

const BackButtonContainer = styled.View`
  width: 83px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-left: 27px;
`;

const BackTitle = styled.Text`
  font-size: 14px;
  margin-left: 9px;
`;

export default Profile;
