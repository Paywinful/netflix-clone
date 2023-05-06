import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default function Home() {
  const [animationValue] = useState(new Animated.Value(0));
 
 const backgroundInterpolate = animationValue.interpolate({
  inputRange : [0, 450],
  outputRange : ["#303030" , "black"]
  })
 
  const backgroundStyle = {
  backgroundColor : backgroundInterpolate
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
      <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
            <View style={styles.nav}>
                <Text style={styles.pfname}>For Payin</Text>
                <View style={styles.navicons}>
                    <TouchableOpacity><Text style={styles.icons}><Feather name="cast" size={25} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.icons}><Ionicons name="arrow-down-circle-outline" size={28} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.icons}><Octicons name="search" size={25} color="white" /></Text></TouchableOpacity>
                </View>
            </View>
          </SafeAreaView>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent : { contentOffset: { y : animationValue } }}],{useNativeDriver: false} )}>
 
        <Animated.View style={[styles.scrollViewStyle, backgroundStyle]}>
            <View style={styles.categories}>
                <TouchableOpacity><Text style={styles.categoriestext}>TV Shows</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.categoriestext}>Movies</Text></TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.movies}>
                        <Text style={styles.moviestext}>Categories </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={18} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.big}>
                    <TouchableOpacity><Image style={styles.mainpic} source={require("../images/big.jpg")} /></TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity>
                    <View style={styles.play}>
                    <FontAwesome name="play" size={24} color="black" />
                        <Text style={styles.buttonstext1}> Play</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.mylist}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={styles.buttonstext}>My List</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
        
           
      </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636363'
  },
  scrollViewStyle:
  {
     height: 1500
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Width * 0.05,
    marginTop: 6,
    alignItems: 'center',
  },
  navicons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    padding: 7,
  },
  pfname:{
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  categoriestext:{
    color: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 14,
    borderWidth: 0.5,
    marginLeft: 12,
    borderRadius: 14,
    borderColor: '#e0e0e0',
    fontWeight: '600',
  },
  movies:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 0.5,
    marginLeft: 12,
    borderRadius: 14,
    borderColor: '#e0e0e0', 
  },
  moviestext:{
    fontWeight: '600',
    fontSize: 14,
    color: '#e0e0e0',
  },
  categories:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 9,
  },
  mainpic: {
    width: Width * 0.92,
    height: Height * 0.59,
    marginHorizontal: Width * 0.04,
    resizeMode: "stretch",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#636363'
  },
  big: {
    width: Width * 0.92,
    height: Height * 0.59,
    top: Height * 0.026,
  },
  mylist:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    backgroundColor: "#303030",
    paddingHorizontal: Width * 0.13,
    paddingVertical: 8,
    borderRadius: 5,

  },
  buttons:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Width * 0.07,
    marginTop: -30
  },
  buttonstext:{
    fontSize: 17,
    color: 'white'
  },
  buttonstext1:{
    fontSize: 17,
    color: 'black'
  },
  play:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Width * 0.13,
    backgroundColor: "white",
    paddingVertical: 8,
    borderRadius: 5,
  }
});
