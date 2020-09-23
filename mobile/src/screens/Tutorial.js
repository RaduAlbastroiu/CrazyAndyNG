import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';
const arr = [TutorialFirst, TutorialSecond, TutorialThird, TutorialFourth];

const Tutorial = ({navigation}) => {
  const [tutorialNo, setTutorialNo] = useState({index: 0, img: arr[0]});

  const onDone = () => {
    navigation.navigate('Home');
  };

  const onNext = () => {
    setTutorialNo({
      index: tutorialNo.index + 1,
      img: arr[tutorialNo.index + 1],
    });
  };

  const onPrevious = () => {
    setTutorialNo({
      index: tutorialNo.index - 1,
      img: arr[tutorialNo.index - 1],
    });
  };

  renderPrevious = () => {
    if (tutorialNo.index !== 0) {
      return (
        <TouchableOpacity onPress={onPrevious} style={styles.buttonBack}>
          <Text style={styles.appButtonText}>Back</Text>
        </TouchableOpacity>
      );
    }
  };
  renderNext = () => {
    if (tutorialNo.index < 3) {
      return (
        <TouchableOpacity onPress={onNext} style={styles.buttonNext}>
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={onDone} style={styles.buttonNext}>
          <Text style={styles.appButtonText}>Done</Text>
        </TouchableOpacity>
      );
    }
  };

  useEffect(() => {
    setTutorialNo({index: 0, img: arr[0]});
  }, []);

  return (
    <View>
      <Image source={tutorialNo.img} style={styles.image} />
      <View style={styles.buttonsContainer}>
        {renderPrevious()}
        {renderNext()}
      </View>
    </View>
  );
};
export default Tutorial;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft:50
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
    marginTop: 15,
    alignSelf: 'center',
    width: 300,
    height: 480,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
