import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, useWindowDimensions } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import { MaterialIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

import Header from '../Components/Header';

const Dashboard = ({ route, navigation }) => {

    const [data, setData] = useState(route.params);

    const dimensions = useWindowDimensions();

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
            <View style={[styles.bodySection, styles.bodyTop]}>
                <Image source={require('../Images/ColaCoinImage.png')} style={styles.bodyTopIcon} />
                <Text style={styles.bodyTopIconLabel}>Brought to you by</Text>
            </View>
            <View style={[styles.bodySection, styles.bodyMiddle]}>
                <Text style={[styles.bodyMiddleNumber, {fontSize: Math.round(dimensions.height/20)}]}>372</Text>
                <Text style={styles.bodyMiddleLabel}>Points</Text>
            </View>
            <View style={[styles.bodySection, styles.bodyBottom]}>
                <Text style={styles.bodyBottomLabel}>Quick Links</Text>
                <View style={styles.buttonsRows}>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.buttons} onPress={() => {navigation.navigate("Rewards", data);}}>
                        <View>
                            <MaterialIcons name="attach-money" size={dimensions.height > 730 ? 60 : 30} color="black" style={styles.buttonIcon} />
                            <Text style={styles.buttonLabel}>REWARDS</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.buttons} onPress={() => {navigation.navigate("Schedule", data);}}>
                        <View>
                            <FontAwesome name="calendar" size={dimensions.height > 730 ? 60 : 30} color="black" style={styles.buttonIcon} />
                            <Text style={styles.buttonLabel}>SCHEDULE</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonsRows}>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.buttons} onPress={() => {navigation.navigate("Profile", data);}}>
                        <View>
                            <AntDesign name="user" size={dimensions.height > 730 ? 60 : 30} color="black" style={styles.buttonIcon} />
                            <Text style={styles.buttonLabel}>PROFILE</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.buttons} onPress={() => {navigation.navigate("Items", data);}}>
                        <View>
                            <FontAwesome name="list-alt" size={dimensions.height > 730 ? 60 : 30} color="black" style={styles.buttonIcon} />
                            <Text style={styles.buttonLabel}>ITEMS</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
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
    bodySection: {
        width: '90%',
        marginLeft: 5,
        marginRight: 5,
    },
    bodyTop: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        width: '70%',
        marginBottom: 5
    },
    bodyMiddle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
    },
    bodyBottom: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
    },
    bodyTopIcon: {
        flex: 9,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    bodyTopIconLabel: {
        flex: 1,
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 17,
        paddingTop: 10,
        fontStyle: 'italic'
    },
    bodyMiddleNumber: {
        flex: 9,
        fontFamily: 'Roboto_900Black',
        fontSize: 50,
        textAlign: 'center'
    },
    bodyMiddleLabel: {
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 17,
        paddingTop: 5,
        fontStyle: 'italic'
    },
    bodyBottomLabel: {
        fontFamily: 'Roboto_500Medium',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20,
        width: '100%'
    },
    buttonsRows: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,
    },
    buttons: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: "#EEE",
        borderRadius: 15,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonIcon: {
        width: '100%',
        textAlign: 'center'
    },
    buttonLabel: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Roboto_900Black',
        paddingTop: 10,
        fontSize: 20
    }
});

export default Dashboard;