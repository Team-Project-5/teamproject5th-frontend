import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const PostPreview = (props) => (
    <View style = {styles.container}>
        <Image source = {require('../assets/profile.png')} style = {styles.image} />
        <View style = {styles.text}>
            <Text style = {{fontSize: 10, color: '#919EB6'}}>{props.station}</Text>
            <Text style = {{fontSize: 17}}>{props.postTitle}</Text>
            <Text style = {{fontSize: 13, color: '#292D32'}}>{props.userName}</Text>

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
    image: {
        width: 106,
        height: 49
    },
    text: {
        width: 191,
        heigth: 56,
        marginLeft: 9
    },
    button: {
        width: 24,
        height: 24,
        marginTop: 13
    }
});

export default PostPreview;