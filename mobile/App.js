import React from 'react';
import {View, Image, Text} from 'react-native';
import Home from './src/screens/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Tutorial from './src/screens/Tutorial';


const screens ={
  Home: {
    screen: Home
  },
  Tutorial: {
    screen:Tutorial
  }
}

const navigator = createStackNavigator(screens);

export default createAppContainer(navigator);
