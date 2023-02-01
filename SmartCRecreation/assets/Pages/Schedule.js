import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableHighlight, Modal } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import Header from '../Components/Header';

const Schedule = ({ route, navigation }) => {

    const dimensions = useWindowDimensions();
    const [data, setData] = useState(route.params);
    const [scheduleDate, changeDate] = useState({day: '0', month: '0', year: '0'});
    const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.calendarTitle}>Schedule a Pickup</Text>
            <Calendar style={[{width: dimensions.width - 30}]} minDate={'2022-04-20'} onDayPress={(day) => {changeDate({...{day: day.day, month: day.month, year: day.year}})}}/>
            <Text style={styles.calendarLabel}>Selected: <Text style={styles.calendarLabelDate}>{(scheduleDate.year == 0 ? 'Nothing yet' : scheduleDate.month + '/' + scheduleDate.day + '/' + scheduleDate.year)}</Text></Text>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.calendarButton} onPress={() => {
                if(scheduleDate.year == 0) {alert("You must select a date first.");}
                else {
                    setModalVisible(true);
                }
            }}>
                <Text style={styles.calendarButtonText}>SCHEDULE</Text>
            </TouchableHighlight>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.popup}>
                        <Text style={styles.popupLabel}>You are Scheduling a pickup for {scheduleDate.month + '/' + scheduleDate.day + '/' + scheduleDate.year}</Text>
                        <Text style={[styles.popupLabel, styles.popupQuestion]}>Is that okay?</Text>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.popupButton} onPress={() => {alert('Scheduling Successful. An electric pickup vehicle will arrive at your house on '+(scheduleDate.month + '/' + scheduleDate.day + '/' + scheduleDate.year)+"."); setModalVisible(!modalVisible);}}>
                            <Text style={[styles.popupLabel, styles.popupButtonText]}>CONFIRM</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
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
    calendarTitle: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        margin: 15,
        borderBottomColor: '#888',
        borderBottomWidth: 1
    },
    calendarLabel: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        margin: 15,
    },
    calendarLabelDate: {
        color: '#58ef8b'
    },
    calendarButton: {
        borderRadius: 15,
        backgroundColor: '#69ff17',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarButtonText: {
        margin: 15,
        fontFamily: 'Roboto_900Black',
        fontSize: 30,
        textAlign: 'center'
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup: {
        backgroundColor: '#EEE',
        width: '75%',
        height: '30%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    popupLabel: {
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        margin: 10
    },
    popupQuestion: {
        fontFamily: 'Roboto_700Bold'
    },
    popupButton: {
        backgroundColor: '#3eccf8',
        borderRadius: 20,
        margin: 10
    },
    popupButtonText: {
        fontFamily: 'Roboto_900Black'
    }
});

export default Schedule;