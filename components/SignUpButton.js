import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SignUpButton = (props) => (
    <View>
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.text}>{props.title}</Text>
        </TouchableOpacity>         
    </View>
    
);

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#F4739E',
        width: 140,
        height: 43,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 17
    }
});

export default SignUpButton;

