import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import GoBack from '../components/GoBack';

const Profile = () => (
    <View style = {styles.screen}>
        <View style = {styles.container}>
            <GoBack style = {{marginTop: 0}}/> 
            <Text style = {styles.title}>프로필</Text>
            <View style = {styles.userInfo}>
                <TouchableOpacity>
                    <Image
                        style={styles.image}
                        source={require('../assets/profile.png')}
                    />
                </TouchableOpacity>
                <Text style = {styles.text}>닉네임</Text>
                <Text style = {styles.text}>이메일 주소</Text>
            </View>
        </View>
    </View>
);
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        width: screenWidth,
        marginTop: '3%',
        marginLeft: '9%'
        

    },
    title: {
        fontSize: 36,
        marginTop: 55
    },
    userInfo: {
        width: 340,
        height: 450,
        borderWidth : 1,
        borderRadius: 10,
        borderColor: '#EFF2F5',
        marginTop: 19
    },
    image: {
        width:150,
        height:150,
        borderRadius: 50,
        marginTop: 21,
        marginHorizontal: 100
    },
    text: {
        fontSize: 25,
        marginTop: 50,
        marginLeft: 20.5
    } 
});

export default Profile;