import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const ProfileBar = (props) => {
    return(
        <View style={[styles.container]}>
            <View style={styles.icon}>
                <Image style={styles.iconImage} source={props.image} /> 
            </View>
            <View style={styles.profileBody}>
                <Text style={[styles.profileText, {color: props.textColor}]}>
                    Derek Mak
                </Text>
                <Text style={[styles.profileText, {color: props.textColor, fontStyle: 'italic'}]}>
                    450 points
                </Text>
            </View>
            <View style={styles.closeButton}>
                <Text style={{color: "#FFF"}}> {">"} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 5,
      marginTop: 10
    },
    icon: {
        flex: 3,
        height: '100%',
    },
    iconImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    profileBody: {
        flex: 6,
        flexDirection: 'column'
    },
    profileText: {
        flex: 1,
    },
    closeButton: {
        flex: 1,
    }
  });

  export default ProfileBar;