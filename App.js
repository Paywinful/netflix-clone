import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, } from 'react-native';
import Home from './Screens/Home';
import { BlurView } from 'expo-blur';
import NewsHot from './Screens/NewsHot';
import Profile from './Screens/Profile';


const Tab = createBottomTabNavigator();

export default function navigation({passwords}) {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-variant'
                : 'home-variant-outline';
            } else if (route.name === 'News & Hot') {
              iconName = focused 
              ? 'play-box-multiple' 
              : 'play-box-multiple-outline';
            }else if (route.name === 'Profile') {
              iconName = focused 
              ? 'contacts' 
              : 'contacts-outline';
            }


            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle :{
            position: 'absolute',
            backgroundColor : '#4a4a4a',
            borderTopColor: '#1f1f1f',
            // tabBarBackground: () => (
            //   <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
            // ),
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerShown : false,
          
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="News & Hot" component={NewsHot} />
        <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    },
  });