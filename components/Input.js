import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";

const Input = (props) => {
    const [text, onChangeText] = React.useState('');
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{props.title}</Text>
            <TextInput
                placeholder = {props.Message}
                style = {styles.input}
                onChangeText = {onChangeText}
                value = {text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 13
    },
    input: {
        height: 51,
        width: 348,
        borderRadius: 14
    },
    text: {
        fontSize: 17
    }
});

export default Input;