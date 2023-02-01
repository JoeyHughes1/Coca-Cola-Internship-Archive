import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import React, { useState } from 'react'

import Header from '../Components/Header';

const RewardItem = (props) => {
    return(
        <TouchableHighlight activeOpacity={0.6} underlayColor="##96ea65" style={styles.itemContainer} onPress={() => {alert("There is no function to these buttons as of yet.")}} >
            <View style={styles.itemContentContainer}>
                <Image source={props.image} style={styles.itemImage} />
                <Text style={styles.itemLabel}>{props.label}</Text>
                <Text style={[styles.itemLabel, styles.itemDescription]}>{props.description}</Text>
            </View>
        </TouchableHighlight>
    );
}

const Rewards = ({ route, navigation }) => {

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black
    });

    if (!fontsLoaded) {
    return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text style={styles.pointNumber}>372</Text>
            <Text style={styles.pointLabel}>Points</Text>
            <ScrollView style={styles.rewardList} contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{marginTop: 20}}><Text></Text></View>
                <RewardItem image={require('../Images/Valorant.png')} label={"Valorant"} description={"Trade in 10 Points for 30 VP (Valorant Points)"} />
                <RewardItem image={require('../Images/Fortnite.jpg')} label={"Fortnite"} description={"Trade in 10 Points for 30 VBucks"} />
                <RewardItem image={require('../Images/LeagueOfLegends.jpg')} label={"League Of Legends"} description={"Trade in 10 Points for 30 RP (Riot Points)"} />
                <RewardItem image={require('../Images/RocketLeague.jpg')} label={"Rocket League"} description={"Trade in 10 Points for 30 Credits"} />
                <View style={{marginTop: 50}}><Text></Text></View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    pointNumber: {
        fontFamily: 'Roboto_900Black',
        fontSize: 50,
        textAlign: 'center'
    },
    pointLabel: {
        fontStyle: 'italic',
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 17,
    },
    rewardList: {
        width: '100%',
        height: 400,
        flexDirection: 'column',
        backgroundColor: '#DDD',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 5
    },
    itemContainer: {
        width: '90%',
        height: 300,
        margin: 10,
        backgroundColor: '#BBB',
        borderRadius: 20
    },
    itemContentContainer: {
        flex: 1,
        width: '100%' ,
        height: '100%' ,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemImage: {
        width: '90%',
        height: '70%',
        padding: 15,
        resizeMode: 'contain'
    },
    itemLabel: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 25,
        textAlign: 'center'
    },
    itemDescription: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15
    }
});

export default Rewards;