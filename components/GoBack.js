import React from 'react';
import { Feather } from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const GoBack = () => (
    <TouchableOpacity style = {styles.container}>
        <Text>
            <Feather name="arrow-left" size={24} color="black" />
        </Text>
        <Text style = {styles.text}>뒤로가기</Text>
    </TouchableOpacity>  
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        marginLeft: 1
    }
});

export default GoBack;