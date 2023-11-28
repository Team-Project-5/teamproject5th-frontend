import React, { useState } from "react";
import { View, useAnimatedValue } from "react-native";
import Input from "./Input"


const JoinSet = (props) => {
    const [isEmailDone, setIsEmailDone] = useState(false);
    const [isPWDone, setIsPWDone] = useState(false);
    const [isNameDone, setIsNameDone] = useState(false);

    const checkValid = () => {
        if (isEmailDone && isPWDone && isNameDone) {
            props.isDone(true);
        } else {
            props.isDone(false);
        }
    }
    const setEmail = (Done) => {
        setIsEmailDone(Done);
        checkValid();
    }
    const setPW = (Done) => {
        setIsPWDone(Done);
        checkValid();
    }
    const setName = (Done) => {
        setIsNameDone(Done);
        checkValid();
    }
    return (
        <View>
            <Input 
                title="닉네임"
                message="닉네임을 입력하세요"
                isPassword={false}
                setName={setName}
            />
            <Input
                title="이메일 주소"
                message="이메일을 입력하세요"
                isPassword={false}
                setEmail={setEmail}
            />
            <Input
                title="비밀번호 생성"
                message="비밀번호를 입력하세요"
                isPassword={true}
                setPW={setPW}
            />
        </View>
    );


}

export default JoinSet;