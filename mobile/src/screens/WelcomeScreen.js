import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import welcomeImage from '../assets/welcome_logo.png';
import Tutorial from './Tutorial';


const WelcomeScreen = () => {
    return (
      <View>
        <Text>Welcome Screen</Text>
        <Image source={welcomeImage} style={styles.image}/>
      </View>
    );
  };


  const styles = StyleSheet.create({
    image: {
      height: 200,
      width: 300,
      marginTop:100,
      marginBottom:10
    },
  });
  export default WelcomeScreen;