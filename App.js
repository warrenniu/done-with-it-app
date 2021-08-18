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

export default function App() {
  const handlePress = () => console.log("Text pressed");
  const {landscape} = useDeviceOrientation()


  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', //determines main (primary) and secondary (cross) axis
        justifyContent: 'center', //main axis
        alignItems: 'center', //secondary axis
      }}
      >
        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100
        }}/>
        <View style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}/>
        <View style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100
        }}/>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
