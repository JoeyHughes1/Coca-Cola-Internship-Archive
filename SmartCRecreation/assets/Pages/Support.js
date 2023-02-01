import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from '../Components/Header';

const Support = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <Header route={route} navigation={navigation} />
            <Text>This is the Support screen!</Text>
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
});

export default Support;