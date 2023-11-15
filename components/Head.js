import React from 'react';
import {Text,View} from 'react-native';

const Head = () => ( //다른 화면들까지 바꿔서 해야할듯
    <View>
        <Text style = {{ fontSize: 36 }}>환영합니다!</Text>
        <Text style = {{ fontSize: 17, color: '#6A798A'}}>회원가입 또는 로그인을 해주세요</Text>
    </View>
);

export default Head;