import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';

const arr = [TutorialFirst, TutorialSecond, TutorialThird, TutorialFourth];

const Tutorial = (props) => {
  const {t} = useTranslation();

  renderSkip = () => {
    return (
      <TouchableOpacity onPress={props.onDone} style={styles.buttonBack}>
        <Text style={styles.appButtonText}>SKIP</Text>
      </TouchableOpacity>
    );
  };

  renderDone = () => {
    return (
      <TouchableOpacity onPress={props.onDone} style={styles.buttonNext}>
        <Text style={styles.appButtonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ImageBackground source={TutorialFirst} style={styles.image} />
      <View style={styles.buttonsContainer}>
        {renderSkip()}
        {renderDone()}
      </View>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 50,
    position: 'absolute',
    bottom: -30,
  },
  buttonNext: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    width: 150,
  },
  buttonBack: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    width: 150,
  },

  image: {
    alignSelf: 'center',
    width: '100%',
    height: '89%',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
