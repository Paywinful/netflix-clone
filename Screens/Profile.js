import { View, Text, SafeAreaView,TouchableOpacity, StyleSheet, Dimensions, Image, FlatList, ScrollView} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import data from '../data/data';
import data2 from '../data/data2';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default function Profile() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
            <View style={styles.nav}>
                <Text style={styles.pfname}>My Profile</Text>
                <View style={styles.navicons}>
                    <TouchableOpacity><Text style={styles.icons}><Ionicons name="arrow-down-circle-outline" size={28} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.icons}><Octicons name="search" size={25} color="white" /></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.icons}><Feather name="menu" size={24} color="white" /></Text></TouchableOpacity>
                </View>
              </View>
              <ScrollView>
              <View style={styles.profilecont}>
                <Image style={styles.profile} source={require('../images/p.png')} />
                <View style={styles.dis}>
                  <Text style={styles.distext}>Payin</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={18} color="white" />
                </View>
              </View>
              <TouchableOpacity style={styles.con}>
                <View style={styles.two}>
                  <View style={styles.not}>
                    <Ionicons style={styles.noticon} name="notifications-sharp" size={23} color="white" />
                  </View>
                  <Text style={styles.twotext}>Notifications</Text>
                </View>
                <View><MaterialIcons name="keyboard-arrow-right" size={24} color="white" /></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.con1}>
                <View style={styles.two}>
                  <View style={styles.not1}>
                    <MaterialIcons style={styles.noticon} name="file-download" size={24} color="white" />
                  </View>
                  <Text style={styles.twotext}>Downloads</Text>
                </View>
                <View><MaterialIcons name="keyboard-arrow-right" size={24} color="white" /></View>
              </TouchableOpacity>
              <Text style={styles.rectext}>My List</Text>
              <FlatList
            horizontal 
            data= {data}
            keyExtractor= {(item) => item.id}
            renderItem = {({item})=> (
            <View>
              <TouchableOpacity><Image style={styles.recimages} source={item.image} /></TouchableOpacity>
            </View>
            )}/>
            <Text style={styles.rectext1}>Trailer's You've Watched</Text>
            <FlatList
            horizontal 
            data= {data2}
            keyExtractor= {(item) => item.id}
            renderItem = {({item})=> (
            <View>
              <TouchableOpacity><Image style={styles.recimages} source={item.image} /></TouchableOpacity>
            </View>
            )}/>

        <Text style={styles.picked}>Continue Watching for Payin</Text>
            <FlatList
            horizontal 
            data= {data2}
            keyExtractor= {(item) => item.id}
            renderItem = {({item})=> (
            <View>
              <Image style={styles.recimages1} source={item.image} />
              <TouchableOpacity style={styles.playicon}><Ionicons style={styles.playiconbg} name="play-circle-outline" size={55} color="white" /></TouchableOpacity>
              <View style={styles.options}>
               <TouchableOpacity><Feather style={styles.icons2} name="info" size={24} color="#a6a6a6" /></TouchableOpacity>
               <TouchableOpacity><SimpleLineIcons style={styles.icons2} name="options-vertical" size={19} color="#a6a6a6" /></TouchableOpacity>
              </View>
            </View>

            )}/>

              </ScrollView>

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
  profile: {
    width: Width * 0.2,
    height: Height * 0.08,
    borderRadius: 7
  },
  profilecont: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  distext: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800'
  },
  dis:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  two:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  twotext:{
    color: 'white',
    marginLeft: 7,
    fontSize: 20,
    fontWeight: '700'
  },
  con:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 5,
  },
  con1:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  not:{
    backgroundColor: 'red',
    borderRadius: 50,
    width: 42,
    height: 42,
    alignItems: 'center'
  },
  not1:{
    backgroundColor: '#5959eb',
    borderRadius: 50,
    width: 42,
    height: 42,
    alignItems: 'center'
  },
  noticon:{
    marginTop: 8
  },
  recimages:{
    marginTop: 10,
    width: Width * 0.28,
    height: Height * 0.178,
    borderRadius: 4,
    marginHorizontal: 5
  },
  rectext:{
    marginTop: 40,
    color: 'white',
    fontSize: 18,
    marginLeft: 7,
    fontWeight: '700'
  },
  rectext1:{
    marginTop: 20,
    color: 'white',
    fontSize: 18,
    marginLeft: 7,
    fontWeight: '700'

  },
  recimages1:{
    marginTop: 10,
    width: Width * 0.28,
    height: Height * 0.16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginHorizontal: 5
  },
  options:{
    width: Width * 0.28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    backgroundColor: '#1a1a1a',
    paddingVertical: 5,
    borderTopWidth: 2,
    borderTopColor: 'red'
  },
  icons2:{
    marginHorizontal: 7,
  },
  playicon:{
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 40,
    borderRadius: 70,
    backgroundColor: 'black', 
    width: 50,
    height: 50,
    opacity: 0.6
  },

  playiconbg: {
    marginTop: -4
  },
  picked:{
    marginTop: 15,
    color: 'white',
    fontSize: 18,
    marginLeft: 7,
    fontWeight: '700'
  },
})