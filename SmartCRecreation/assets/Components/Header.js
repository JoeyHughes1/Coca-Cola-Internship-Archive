import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import { Ionicons } from '@expo/vector-icons';
import { RotateInUpLeft } from 'react-native-reanimated';

const Header = (props) => {

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black
    });

    if (!fontsLoaded) {
    return <AppLoading />;
    }
    return(
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" onPress={() => {props.navigation.openDrawer();}}>
                    <Ionicons name="md-menu" size={45} color="black" style={{marginLeft: 14}} />
                </TouchableHighlight>
                <View style={styles.headerLogoContainer}>
                    <Image source={require('../Images/CircularCLTLogo.png')} style={styles.headerLogo} />
                </View>
            </View>
            <View style={styles.headerBottom}>
                <Text style={styles.headerName}>Joey Hughes</Text>
                <Text style={styles.headerDate}>{new Date().toDateString().slice(4)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '16%',
    },
    headerTop: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#EEE'
    },
    headerLogoContainer: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerLogo: {
        width: '90%',
        height: '100%',
        resizeMode: 'contain',
        marginRight: 10
    },
    headerBottom: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    headerName: {
        flex: 1,
        textAlign: 'left',
        color: "#AAA",
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Roboto_500Medium'
    },
    headerDate: {
        flex: 1,
        textAlign: 'right',
        color: "#AAA",
        marginRight: 10,
        fontSize: 20,
        fontFamily: 'Roboto_500Medium'
    }
  });

  export default Header;