import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Station from '../components/Station'
import GoBack from '../components/GoBack';

const HotStation = () => (
    <View style = {styles.screen}>
        <View style = {styles.container}>
            <GoBack />
            <Text style = {styles.title}>실시간 인기역</Text>
            <Station rate = '1위' station = '서울역' NumberOfLike = '131'/>
            <Station rate = '2위' station = '성수역' NumberOfLike = '103'/>
            <Station rate = '3위' station = '인천역' NumberOfLike = '76'/>
            <Station rate = '4위' station = '종로3가역' NumberOfLike = '45'/>
            <Station rate = '5위' station = '용산역' NumberOfLike = '24'/>
        </View>
        
    </View>
);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        marginTop: '3%',
        marginLeft: '5%'
    },
    title: {
        fontSize: 36,
        marginTop: 55,
    }
});

export default HotStation;