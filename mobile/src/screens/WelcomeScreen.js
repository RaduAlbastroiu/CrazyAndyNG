import {View, Image, Text, StyleSheet} from 'react-native';
import welcomeImage from '../assets/welcome_logo.png';
import React from 'react';
const WelcomeScreen = () => {

  return (
    <View style={styles.containerImage}>
      <Image source={welcomeImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: 320,
    height: 300,
  },
});
export default WelcomeScreen;
