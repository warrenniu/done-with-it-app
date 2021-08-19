import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  Dimensions,
  Button, 
  Alert,
 } from 'react-native';
import {
   useDimensions, 
   useDeviceOrientation,
} from '@react-native-community/hooks'
import WelcomeScreen from './app/screen/WelcomeScreen';

export default function App() {
  // const handlePress = () => console.log("Text pressed");
  // const {landscape} = useDeviceOrientation()


  return <WelcomeScreen />
    // <SafeAreaView style={styles.container}>
    //   <View style={{
    //     backgroundColor: '#fff',
    //     flex: 1,
    //     flexBasis: 100, //sets width or height (depending on primary axis)
    //     flexDirection: 'row', //determines main (primary) and secondary (cross) axis
    //     justifyContent: 'center', //main axis
    //     alignItems: 'center', //secondary axis. determines content of a single line
    //     alignContent: 'center', //determines content placement as a whole. No effect if there's no wrap
    //     flexWrap: 'wrap'
    //   }}
    //   >
    //     <View style={{
    //       backgroundColor: 'gold',
    //       width: 100,
    //       height: 100,
    //       alignSelf: 'flex-start' //aligns each individual item
    //     }}/>
    //     <View style={{
    //       backgroundColor: 'tomato',
    //       width: 100,
    //       height: 100
    //     }}/>
    //     <View style={{
    //       backgroundColor: 'dodgerblue',
    //       width: 100,
    //       height: 100
    //     }}/>
    //     <View style={{
    //       backgroundColor: 'green',
    //       width: 100,
    //       height: 100
    //     }}/>
        
    //   </View>
    // </SafeAreaView>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
// });
