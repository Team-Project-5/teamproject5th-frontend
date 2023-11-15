import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import GoBack from '../components/GoBack';
import PostPreview from '../components/PostPreview';
import Paging from '../components/Paging';

const Scrape = () => (
    <View style = {styles.screen}>
        <View style = {styles.container}>    
            <GoBack />
            <Text style = {styles.title}>스크랩</Text>
            <View style = {{marginTop: '5%'}}>
                <PostPreview station = '성수역' postTitle = '성수역 디올' userName = '박준혁'/>
                <PostPreview station = '성수역' postTitle = '성수역 디올' userName = '박준혁'/>
                <PostPreview station = '성수역' postTitle = '성수역 디올' userName = '박준혁'/>
                <PostPreview station = '성수역' postTitle = '성수역 디올' userName = '박준혁'/>
                <PostPreview station = '성수역' postTitle = '성수역 디올' userName = '박준혁'/>
            </View>
            <Paging />           
        </View>
    </View>
    
);

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        marginTop: '3%',
        marginLeft: '5%'
    },
    title: {
        fontSize: 36,
        marginTop: 55
    }
});

export default Scrape;