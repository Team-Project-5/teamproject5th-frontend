import styled from "styled-components/native";
import {
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import Axios from "../api/Axios";

const screenWidth = Dimensions.get("window").width;
const START_STATION = "@start";
const END_STATION = "@end";

const RouteModal = ({ isVisible, visibleFunc, setStationFunc, isStart }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [stations, setStations] = useState({});
  const [bookmark, setBookmark] = useState();
  const [choices, setChoices] = useState({});
  const [likes, setLikes] = useState({});
  AsyncStorage.clear();

  AsyncStorage.setItem(START_STATION, JSON.stringify(""));
  AsyncStorage.setItem(END_STATION, JSON.stringify(""));

  useEffect(() => {
    AxiosGet();
  }, [likes]);

  const AxiosGet = async () => {
    Axios.get("http://172.20.10.2:8000/api/subway")
      .then((response) => {
        setChoices(response.data.stationAll);
        setLikes(response.data.stationLike);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PostLike = async (like) => {
    const filtered = choices.filter((item) => {
      return item.name === like;
    });
    await Axios.post(
      `http://172.20.10.2:8000/api/subway/${filtered[0].stationID}`
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveStations = async (toSave) => {
    isStart
      ? await AsyncStorage.setItem(START_STATION, JSON.stringify(toSave))
      : await AsyncStorage.setItem(END_STATION, JSON.stringify(toSave));
  };
  const loadData = async () => {
    const s = await AsyncStorage.getItem(START_STATION);
    const e = await AsyncStorage.getItem(END_STATION);
    isStart ? setStations(JSON.parse(s)) : setStations(JSON.parse(e));
  };

  const addStations = async (text) => {
    if (text === "") {
      return;
    }
    const newStations = Object.assign({}, stations, {
      [Date.now()]: { text },
    });
    setStations(newStations);
    await saveStations(newStations);
    isStart ? setStart("") : setEnd("");
  };

  const onChangeStartText = (payload) => {
    setStart(payload);
  };
  const onChangeEndText = (payload) => {
    setEnd(payload);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <StationArea>
        <StationBox>
          <Fontisto
            name="search"
            size={24}
            color="#45B8E9"
            marginLeft={15}
            onPress={AxiosGet}
          />
          <TextInput
            style={styles.input}
            placeholder={isStart ? "출발역 검색" : "도착역 검색"}
            marginLeft={10}
            value={isStart ? start : end}
            onChangeText={isStart ? onChangeStartText : onChangeEndText}
            onSubmitEditing={() => {
              isStart ? setStationFunc(start) : setStationFunc(end);
            }}
            enterKeyHint="done"
          />
        </StationBox>
        <SearchedArea>
          <ScrollView style={styles.scrollview}>
            {likes &&
              Object.keys(likes).map((key, idx) => (
                <SearchedBox key={key}>
                  <Text
                    style={styles.text}
                    onPress={() =>
                      isStart
                        ? setStart(likes[key].name)
                        : setEnd(likes[key].name)
                    }
                  >
                    {likes[key].name}
                  </Text>
                  <TouchableOpacity>
                    <AntDesign name="star" size={24} color="yellow" />
                  </TouchableOpacity>
                </SearchedBox>
              ))}
          </ScrollView>
          <ScrollView style={styles.scrollview}>
            {stations &&
              Object.keys(stations).map((key, idx) => (
                <SearchedBox key={key}>
                  <Text
                    style={styles.text}
                    onPress={() =>
                      isStart
                        ? setStart(stations[key].text)
                        : setEnd(stations[key].text)
                    }
                  >
                    {stations[key].text}
                  </Text>
                  <TouchableOpacity
                    onPress={() => PostLike(stations[key].text)}
                  >
                    <AntDesign name="staro" size={24} color="black" />
                  </TouchableOpacity>
                </SearchedBox>
              ))}
          </ScrollView>
        </SearchedArea>
        <Pressable
          onPress={() => {
            visibleFunc(!isVisible);
            isStart ? addStations(start) : addStations(end);
            isStart ? setStationFunc(start) : setStationFunc(end);
          }}
        >
          <ModalCloseButton>
            <Text style={styles.btn}>선택 완료</Text>
          </ModalCloseButton>
        </Pressable>
      </StationArea>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
  },
  text: { fontSize: 24, fontWeight: "bold" },
  btn: { fontSize: 20, fontWeight: "bold" },
  scrollview: { height: "50%" },
});

const StationArea = styled.View`
  width: ${screenWidth}px;
  display: flex;
  align-items: center;
`;

const StationBox = styled.View`
  width: 347px;
  height: 50px;
  background-color: #eff2f5;
  flex-direction: row;
  align-items: center;
  border-radius: 14px;
  margin-top: 50px;
`;

const ModalCloseButton = styled.View`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: #eff2f5;
  border-radius: 14px;
`;

const SearchedArea = styled.View`
  width: 80%;
  height: 65%;
  margin-top: 22px;
  background-color: #eff2f5;
  display: flex;
  align-items: center;
  border-radius: 14px;
`;

const SearchedBox = styled.View`
  width: 310px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10%;
`;

export default RouteModal;
