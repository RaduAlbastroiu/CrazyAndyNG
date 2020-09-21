import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import TutorialFourth from '../assets/tutorialFourth.png';

const TutorialFour = ({navigation}) => {
  return (
    <View>
      <Image source={TutorialFourth} style={styles.image} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TutorialFour;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  image: {
    marginTop: 15,
    alignSelf: 'center',
    width: 300,
    height: 500,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
