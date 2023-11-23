import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useState } from 'react';

const SignUpButton = (props) => {
    const [IsActive, SetIsActive] = useState(props.onButton);
    const onPress = () => {
        if (!IsActive) {
            SetIsActive((cur) => !cur);
        }
    }
    return (
        <View>
            <TouchableOpacity onPress = {onPress} style = {[styles.button, {backgroundColor: IsActive ? '#F4739E' : '#FDD3E1'}]} >
                <Text style = {[styles.text, {color: IsActive ? '#FFFFFF' :'#F4739E'}]}>{props.title}</Text>
            </TouchableOpacity>         
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 140,
        height: 43,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '2%'
    },
    text: {
        fontSize: 17
    }
});

export default SignUpButton;
