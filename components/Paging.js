import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const Paging = () => (
    <View style = {styles.container}>
        <PagingButton />
        <PagingButton />
        <PagingButton />
        <PagingButton />
        <PagingButton />
    </View>
);

const PagingButton = () => ( //클릭했을 때 색상변경 다른거 눌렀을 때 다시 원래 색깔로
    <TouchableOpacity>
        <Text style = {styles.button}>
            <FontAwesome name = "circle" size = {10} color = '#D5DEE7'   />
        </Text>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
    },
    button: {
        margin: 3
    }
});

export default Paging;

