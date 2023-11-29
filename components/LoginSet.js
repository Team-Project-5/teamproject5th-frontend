import React, { useState } from "react";
import { View } from "react-native";
import Input from "./Input";

const LoginSet = (props) => {
  const [isEmailDone, setIsEmailDone] = useState(false);
  const [isPWDone, setIsPWDone] = useState(false);

  const checkValid = () => {
    if (isEmailDone && isPWDone) {
      props.isDone(true);
    } else {
      props.isDone(false);
    }
  };
  const setEmail = (Done) => {
    setIsEmailDone(Done);
    checkValid();
  };
  const setPW = (Done) => {
    setIsPWDone(Done);
    checkValid();
  };
  return (
    <View>
      <Input
        title="이메일 주소"
        message="이메일을 입력하세요"
        isPassword={false}
        setEmail={setEmail}
        email={props.setEmail}
      />
      <Input
        title="비밀번호"
        message="비밀번호를 입력하세요"
        isPassword={true}
        setPW={setPW}
        password={props.setPassword}
      />
    </View>
  );
};

export default LoginSet;
