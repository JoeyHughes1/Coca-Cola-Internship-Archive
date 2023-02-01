import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';


import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const Schedule = ({ route, navigation }) => {

    let [fontsLoaded] = useFonts({
        Roboto_500Medium
    });

    if (!fontsLoaded) {
    return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.basicLabel}>Welcome to SmartC Recycling!</Text>
            <Text style={styles.basicLabel}>If you have a recycling bag already, press below to scan and link it to your account:</Text>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.button} onPress={() => {navigation.navigate('QRScanner')}}>
                <View>
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </View>
            </TouchableHighlight>
            <Text style={styles.basicLabel}>If you haven't signed up yet, press below to start now!</Text>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDD" style={styles.button} onPress={() => {alert("There is not yet a sign up function. Here is the drawer to access the rest of the app."); navigation.openDrawer();}}>
                <View>
                    <Text style={styles.buttonText}>Sign up!</Text>
                </View>
            </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    basicLabel: {
        fontSize: 20,
        fontFamily: 'Roboto_500Medium',
        margin: 10
    },
    button: {
        width: '50%',
        borderRadius: 10,
        backgroundColor: '#69ff17'
    },
    buttonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 15,
        margin: 10,
        textAlign: 'center',
        color: "#000"
    }
});

export default Schedule;