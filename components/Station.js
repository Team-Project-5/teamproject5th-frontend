import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Octicons, SimpleLineIcons} from '@expo/vector-icons';

const Station = (props) => (
    <View style = {styles.container}>
        <View style = {styles.text}>
            <Text style = {{fontSize: 13}}>{props.rate}</Text>
            <View style = {{marginTop: 3}}>
                <Text style = {{fontSize: 17}}>{props.station}</Text>
            </View>
        </View>
        <View style = {styles.like}>
            <Octicons name = "heart" size = {24} color = '#AFB9CA'/>
            <View style = {{marginLeft: 7}}>
                <Text style = {{color: '#AFB9CA'}}>{props.NumberOfLike}</Text>
            </View>
        </View>   
        <TouchableOpacity>
            <Text style = {styles.button}>
                <SimpleLineIcons name="arrow-right" size={24} color="black" />
            </Text>
        </TouchableOpacity>
    </View>
    
);

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D5DEE7',
        flexDirection: 'row',
        height: 91,
        marginTop: '1%'
    },
    text: {
        width: 220,
        heigth: 43,
        marginLeft: 9,
        marginTop: 7
    },
    like: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 75,
        height: 31,
        color: '#AFB9CA',
        marginTop: 13
    },
    button: {
        width: 24,
        height: 24,
        marginTop: 13,
        fontSize: 12
    }
});

export default Station;