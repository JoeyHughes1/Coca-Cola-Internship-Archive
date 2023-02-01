import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

import Header from '../Components/Header';

const Schedule = ({ route, navigation }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
    (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        
                setScanned(true);

        alert(`Bag ID "${data}" has been successfully linked to your account! Welcome, Joey Hughes.`);

        //In the final version you would use the user id here and ping the database for a user with the user id
        //For now we will just go to the dashboard and send an alert with the user id
        navigation.navigate("Items");
    };

    if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
    }


    return (
        <View style={styles.container}>
            <BarCodeScanner barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    },
});

export default Schedule;