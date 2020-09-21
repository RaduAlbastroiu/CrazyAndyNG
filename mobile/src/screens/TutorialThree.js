import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import TutorialThird from '../assets/tutorialThird.png';

const TutorialThree = ({navigation}) => {
  return (
    <View>
      <Image source={TutorialThird} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate('TutorialFour')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TutorialThree;

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
