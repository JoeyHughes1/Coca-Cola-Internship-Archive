import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import Header from '../Components/Header';

const Items = ({ route, navigation }) => {

    const [showItem, changeItem] = useState(true);

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
            <Text style={styles.titleLabel}>My Items</Text>
            <ScrollView style={styles.list} contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{marginTop: 5}}><Text></Text></View>
                {showItem == false ? undefined : (<View style={styles.listItem}>
                    <Text style={styles.listItemName}>Plastic Recycling Bag</Text>
                    <Text style={styles.listItemDescription}>- ID: 4169E0000000519</Text>
                    <Text style={styles.listItemDescription}>- Status: In Use</Text>
                    <View style={styles.listItemButtonList}>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="##96ea65" style={styles.listItemButton} onPress={() => {alert("There is no function to this buttons as of yet.")}}>
                            <AntDesign name="questioncircleo" size={24} color="black" style={styles.listItemButtonIcon} />
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="##96ea65" style={styles.listItemButton} onPress={() => {navigation.navigate('Schedule')}}>
                            <FontAwesome name="calendar" size={26} color="black" style={styles.listItemButtonIcon} />
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.6} underlayColor="##96ea65" style={styles.listItemButton} onPress={() => {alert("There is no function to this buttons as of yet.")}}>
                            <Ionicons name="trash" size={24} color="black" style={styles.listItemButtonIcon} />
                        </TouchableHighlight>
                    </View>
                </View>)}
                <TouchableHighlight activeOpacity={0.6} underlayColor="##96ea65" style={styles.addItemButton} onPress={() => {changeItem(true); navigation.navigate("QRScanner");}}>
                    <Text style={styles.addItemButtonText}>ADD BAG</Text>
                </TouchableHighlight>
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
    titleLabel: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        margin: 15,
        borderBottomColor: '#888',
        borderBottomWidth: 1,
        textAlign: 'center',
        width: '75%'
    },
    list: {
        width: '85%',
        flex: 1,
        backgroundColor: '#DDD',
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'column'
    },
    addItemButton: {
        width: '70%',
        borderRadius: 5,
        backgroundColor: '#38c9fa',
        margin: 20
    },
    addItemButtonText: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Roboto_900Black'
    },
    listItem: {
        backgroundColor: '#b1c1c5',
        width: '80%',
        height: 200,
        borderRadius: 20,
        margin: 5,
        alignItems: 'center'
    },
    listItemName: {
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        borderBottomColor: '#888',
        borderBottomWidth: 1
    },
    listItemDescription: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 17,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,
        width: '90%'
    },
    listItemButtonList: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        flex: 1,
        margin: 10
    },
    listItemButton: {
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginRight: 10,
        marginBottom: 10
    },
    listItemButtonIcon: {
        margin: 7,
        textAlign: 'center'
    }
}); 

export default Items;