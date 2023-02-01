import 'react-native-gesture-handler';

//Component Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import ProfileBar from './assets/Components/ProfileBar';
import { AntDesign, MaterialIcons, FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//Pages Imports 
import Profile from './assets/Pages/Profile';
import Schedule from './assets/Pages/Schedule';
import Community from './assets/Pages/Community';
import Dashboard from './assets/Pages/Dashboard';
import Items from './assets/Pages/Items';
import Rewards from './assets/Pages/Rewards';
import Settings from './assets/Pages/Settings';
import Support from './assets/Pages/Support';
import Intro from './assets/Pages/Intro';
import QRScanner from './assets/Pages/QRScanner';


const drawerItemList = {
  middle: [
    {
      label: "My Profile",
      screenKey: "Profile",
      icon: () => {return(<AntDesign name="user" size={27} color="white" />);}
    },
    {
      label: "My Rewards",
      screenKey: "Rewards",
      icon: () => {return(<MaterialIcons name="attach-money" size={27} color="white" />);}
    },
    {
      label: "My Items",
      screenKey: "Items",
      icon: () => {return(<FontAwesome name="list-alt" size={27} color="white" />);}
    },
    {
      label: "My Settings",
      screenKey: "Settings",
      icon: () => {return(<Ionicons name="md-settings-outline" size={27} color="white" />);}
    },
  ],
  bottom: [
    {
      label: "Dashboard",
      screenKey: "Dashboard",
      icon: () => {return(<FontAwesome name="dashboard" size={27} color="white" />);}
    },
    {
      label: "Community",
      screenKey: "Community",
      icon: () => {return(<FontAwesome name="group" size={26} color="white" />);}
    },
    {
      label: "Schedule",
      screenKey: "Schedule",
      icon: () => {return(<FontAwesome name="calendar" size={27} color="white" style={{paddingRight: 4}} />);}
    },
    {
      label: "Support",
      screenKey: "Support",
      icon: () => {return(<FontAwesome5 name="question" size={27} color="white" style={{paddingRight: 9}} />);}
    },
  ]
}

function CustomDrawerContent({ navigation }) {

  const drawerItemCreatorFunction = (item) => {
    return(
      <DrawerItem icon={item.icon} labelStyle={styles.drawerText} key={item.label} label={item.label} onPress={() => {navigation.navigate(item.screenKey)}} />
    );
  }

  return ( 
    <DrawerContentScrollView contentContainerStyle={{width: '100%', height: '100%'}}>
      <View style={styles.drawerContainer}>
        
        <ImageBackground source={require('./assets/Images/DrawerBackground.jpeg')} resizeMode="cover" blurRadius={6} style={{width: '100%', height: '100%'}}>

          <View style={[styles.drawerSection, {height: '10%'}]}>
            <Image style={styles.drawerLogo} source={require('./assets/Images/CircularCLTLogo.png')} />
          </View>

          <View style={styles.drawerSection}>
            <ProfileBar textColor={"#FFF"} image={require('./assets/Images/ColaCoinImage.png')} />
            {drawerItemList.middle.map(drawerItemCreatorFunction)}
          </View>

          <View style={styles.drawerSection}>
            {drawerItemList.bottom.map(drawerItemCreatorFunction)}
          </View>
        </ImageBackground>
      </View>
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {

  const intro = false;

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
       drawerType="front" backBehavior="history" initialRouteName={intro == true ? "Intro" : "Dashboard"} drawerPosition="right" 
       screenOptions={{headerShown: false}}>
        <Drawer.Screen key="Intro" name="Intro" component={Intro} />
        <Drawer.Screen key="QRScanner" name="QRScanner" component={QRScanner} />
        <Drawer.Screen key="Profile" name="Profile" component={Profile} />
        <Drawer.Screen key="Schedule" name="Schedule" component={Schedule} />
        <Drawer.Screen key="Community" name="Community" component={Community} />
        <Drawer.Screen key="Dashboard" name="Dashboard" component={Dashboard} />
        <Drawer.Screen key="Items" name="Items" component={Items} />
        <Drawer.Screen key="Rewards" name="Rewards" component={Rewards} />
        <Drawer.Screen key="Settings" name="Settings" component={Settings} />
        <Drawer.Screen key="Support" name="Support" component={Support} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: '#333',
    height: '100%'
  },
  drawerSection: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: "#888",
    paddingHorizontal: 15,
  },
  drawerLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  drawerText: {
    color: '#FFF',
    fontSize: 20
  },
  drawerProfileContainer: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: "#000"
  },
});
