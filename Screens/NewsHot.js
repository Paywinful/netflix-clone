import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import data4 from '../data/data4';





const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default function NewsHot() {
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <SafeAreaView>
            <View style={styles.nav}>
                <Text style={styles.pfname}>For Payin</Text>
                <View style={styles.navicons}>
                    <TouchableOpacity><Text style={styles.icons}><Feather name="cast" size={25} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.icons}><Ionicons name="arrow-down-circle-outline" size={28} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.icons}><Octicons name="search" size={25} color="white" /></Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.categories}>
                <TouchableOpacity style={styles.categoriesbg}><Text style={styles.categoriestext}>🍿 Coming Soon</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.categoriestext1}>🔥 Everyones's Watching</Text></TouchableOpacity>
            </View>
            {/* <ScrollView> */}
              <Text style={styles.coming}>🍿 Coming Soon</Text>

              <FlatList
              data= {data4}
              keyExtractor= {(item) => item.id}
              renderItem = {({item})=> (
            <View>
              <View style={styles.release}>
              <View>
                <Text style={styles.text}>{item.month}</Text>
                <Text style={styles.text1}>{item.day}</Text>
              </View>
              <View>
                <Image style={styles.images} source = {item.image} />
                <View style={styles.iconcont}><Octicons name="mute" size={18} color="white" /></View>
              </View>
            </View>
            <View style={styles.naming}>
                <View>
                  <Text style={styles.namingtext}>{item.first}</Text>
                  <Text style={styles.namingtext}>{item.last}</Text>
                </View>
                <View style={styles.namingicons}>
                  <View>
                    <Ionicons style={styles.namingicon} name="notifications-outline" size={24} color="white" />
                    <Text style={styles.remind}>Remind me</Text>
                  </View>
                  <View>
                  <Feather  style={styles.namingicon}name="info" size={24} color="white" />
                    <Text style={styles.remind1}>info</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.releasetext}>{item.release}</Text>
              <View style={styles.desc}>
                <Text style={styles.desctext1}>{item.first} {item.last}</Text>
                <Text style={styles.desctext}>{item.description}</Text>
              </View>
            </View>
            
            )}/>
            {/* </ScrollView> */}

            
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scroll:
  {
     height: 1600
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
    color: '#080808',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
    borderRadius: 14,
    borderColor: '#e0e0e0',
    fontWeight: '600',
  },
  categoriestext1:{
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
    borderRadius: 14,
    borderColor: '#e0e0e0',
    fontWeight: '600',
  },
  categoriesbg:{
    backgroundColor: 'white',
    borderRadius: 14,
    marginLeft: 14,
  },
  categories:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 9,
    marginBottom: 20,
  },
  coming: {
    fontSize: 20,
    color: 'white',
    marginTop: Height * 0.01,
    marginLeft: 5,
    fontWeight: '700'
  },
  images: {
    width: Width * 0.85,
    height: Height * 0.23,
    borderRadius: 10,

  }, 
  release:{
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginHorizontal: 10,
     marginTop: 20,
  },
  text:{
    color:'#a6a6a6',
    fontSize: 15,
  },
  text1:{
    color:'white',
    fontSize: 27,
    fontWeight: '700'
  },
  iconcont:{
    position: 'absolute',
    top: 172,
    right: 15,
    backgroundColor: 'black',
    borderRadius: 25,
    width: 25,
    height: 25,
    justifyContent: 'center',
    opacity: 0.5,
    alignItems: 'center'
  },
  naming: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15
  },
  namingtext: {
    color: 'white',
    fontSize: 25,
    marginLeft: 60,
    textAlign: 'center',
    fontWeight: '700'
  },
  namingicons: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  namingicon: {
    marginHorizontal: 20,
  },
  releasetext: {
    color: '#a6a6a6',
    fontSize: 14,
    marginHorizontal: 60
  },
  remind:{
    color: '#a6a6a6',
    marginTop: 8
  },
  remind1:{
    color: '#a6a6a6',
    marginLeft: 22,
    marginTop: 8
  },
  desc: {
    marginLeft: 40,
  },
  desctext: {
    color: 'white',
    marginTop: 8,
    color:'#a6a6a6',
  },
  desctext1: {
    color: 'white',
    fontWeight: '700',
    fontSize: 19,
    marginTop: 10
  },
})