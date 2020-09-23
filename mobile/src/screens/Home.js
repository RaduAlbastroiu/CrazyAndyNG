import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
  const [loaded, setLoaded] = useState('');
  const [showTutorial, setShowTutorial] = useState(true);

  //give item
  const setData = async (value) => {
    try {
      setShowTutorial(false);
      await AsyncStorage.setItem('key', '27');
      console.log('data set');
    } catch (e) {}
  };

  //get item
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      console.log('read value');

      if (value !== null) {
        console.log('value found');
        setShowTutorial(false);
        return;
        // value previously stored
      }
      setShowTutorial(true);
    } catch (e) {}
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('key');
    } catch (e) {}
    console.log('data removed');
  };

  const onPressTutorial = async () => {
    await setData();
    setShowTutorial({showTutorial: false});
    navigation.navigate('Tutorial');
  };

  const renderTutorial = () => {
    return (
      <TouchableOpacity
        onPress={onPressTutorial}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Start Tutorial</Text>
      </TouchableOpacity>
    );
  };

  //set the loading screen
  useEffect(() => {
    //  removeData();
    getData();

    const timer = setTimeout(() => {
      setLoaded({loaded: true});
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      {loaded ? <Text>Working on Home Screen</Text> : <WelcomeScreen />}
      {showTutorial === true ? renderTutorial() : <Text>pla</Text>}
    </View>
  );
};

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

  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Home;
