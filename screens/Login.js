import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Head from '../components/Head.js';
import Input from '../components/Input.js';
import SignUpButton from '../components/SignUpButton.js';
import CompleteButton from '../components/CompleteButton.js';


const Login = () => ( 
    <View style = {styles.screen}>
        <View style = {styles.container}>
            <Head />
            <View style = {styles.button}>
                <SignUpButton title = '로그인'/> 
                <SignUpButton title = '회원가입'/>
                {/*버튼 이렇게 두개 만드는게 아닌것 같은데.. 일단 두자*/}
            </View>
            <View style = {styles.input}>
                <Input title = '이메일 주소' message = '이메일을 입력하세요' />
                <Input title = '비밀번호' message = '비밀번호를 입력하세요'/> 
                {/*비밀번호는 입력하면 *로 보이게 해야할 듯*/}
            </View>
            <View style = {styles.findPassword}>
                <TouchableOpacity>
                    <Text style = {{color: '#6A798A', textDecorationLine: 'underline', fontSize: '17'}}>비밀번호를 잊으셨나요?</Text>
                </TouchableOpacity>
            </View>
            <CompleteButton style = {{marginTop: '30%'}} title = '로그인 >' />
        </View>
    </View>

);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        marginTop: '20%',
        marginLeft: '10%'
    },
    button: {
        width: 330,
        height: 63,
        borderRadius: 230,
        flexDirection: 'row',
        backgroundColor: '#FDD3E1',
        padding: 10,
        marginTop: 25
    },
    input: {
        marginTop: 24
    },
    findPassword: {
        marginBottom: '10%',
        marginLeft: '45%'
        

    }
});

export default Login;