import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';
const arr = [TutorialFirst, TutorialSecond, TutorialThird, TutorialFourth];

const Tutorial = ({navigation}) => {
  const [tutorialNo, setTutorialNo] = useState({index:0, img:arr[0]});

  const onNext= () =>{
    if(tutorialNo.index===3){console.log('finished tutorial');
    
    }else{
      setTutorialNo({index:tutorialNo.index +1, img:arr[tutorialNo.index +1]})
    }
  }

  useEffect(() => {
    setTutorialNo({index:0, img:arr[0]})
  }, []);

  return (
    <View>
      <Image source={tutorialNo.img} style={styles.image} />
      <TouchableOpacity
        onPress={onNext}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Tutorial;

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
