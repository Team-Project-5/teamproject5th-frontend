import styled from "styled-components/native";
import {
  Modal,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;

const ReportModal = ({ isVisible, visibleFunc }) => {
  const [checked, setChecked] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const reportselect = () => {
    Alert.alert(
      "신고 접수됨",
      "신고가 접수되었습니다",
      [
        {
          text: "확인",
          onPress: () => {
            visibleFunc(false);
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
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <ModalArea>
        <SelectBox>
          <TitleArea>
            <Text style={styles.text}>신고</Text>
          </TitleArea>
          <SelectArea>
            <RadioButton.Item
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("first");
                setIsSelect(true);
              }}
              label="타인 사칭, 저작권 위반 콘텐츠 게재"
            />
            <RadioButton.Item
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("second");
                setIsSelect(true);
              }}
              label="동일 내용 콘텐츠 반복적으로 게재"
            />
            <RadioButton.Item
              value="third"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("third");
                setIsSelect(true);
              }}
              label="과도한 신체 노출 및 음란성 콘텐츠 게재"
            />
            <RadioButton.Item
              value="fourth"
              status={checked === "fourth" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("fourth");
                setIsSelect(true);
              }}
              label="조롱, 비난, 혐오 및 폄하"
            />
            <RadioButton.Item
              value="fifth"
              status={checked === "fifth" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("fifth");
                setIsSelect(true);
              }}
              label="지나치게 광고성이 짙은 콘텐츠 게재"
            />
            <RadioButton.Item
              value="sixth"
              status={checked === "sixth" ? "checked" : "unchecked"}
              onPress={() => {
                setChecked("sixth");
                setIsSelect(true);
              }}
              label="기타"
            />
          </SelectArea>
          <ButtonArea>
            <TouchableOpacity
              style={[
                styles.reportbutton,
                { backgroundColor: isSelect ? "#f8243c" : "#CED3DE" },
              ]}
              onPress={reportselect}
            >
              <Text style={styles.report}>신고하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelbutton}
              onPress={() => visibleFunc(false)}
            >
              <Text style={styles.cancel}>취소</Text>
            </TouchableOpacity>
          </ButtonArea>
        </SelectBox>
      </ModalArea>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
  reportbutton: {
    width: 170,
    height: 57,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  report: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cancelbutton: {
    width: 170,
    height: 57,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8243c",
    marginLeft: 10,
  },
  cancel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

const ModalArea = styled.View`
  width: ${screenWidth}px;
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

const SelectBox = styled.View`
  width: ${screenWidth}px;
`;

const TitleArea = styled.View`
  width: 100%;
  align-items: center;
`;

const SelectArea = styled.View`
  width: 100%;
  margin-top: 45px;
  justify-content: center;
`;

const ButtonArea = styled.View`
  width: 100%;
  margin-top: 250px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CancelButton = styled.TouchableOpacity``;

export default ReportModal;
