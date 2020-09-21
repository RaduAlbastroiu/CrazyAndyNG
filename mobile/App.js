import React from 'react';
import {View, Image, Text} from 'react-native';
import Home from './src/screens/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Tutorial from './src/screens/Tutorial';
import TutorialTwo from './src/screens/TutorialTwo';
import TutorialThree from './src/screens/TutorialThree';
import TutorialFour from './src/screens/TutorialFour';

const screens ={
  Home: {
    screen: Home
  },
  Tutorial: {
    screen:Tutorial
   
  },
  TutorialTwo: {
    screen:TutorialTwo
  },
  TutorialThree: {
    screen:TutorialThree
  },
  TutorialFour: {
    screen:TutorialFour
  }
}

const navigator = createStackNavigator(screens);

export default createAppContainer(navigator);
