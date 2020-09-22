import Home from '../screens/Home';
import {createStackNavigator} from 'react-navigation-stack';
import Tutorial from '../screens/Tutorial';
import Header from '../shared/Header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {headerTitle: () => <Header navigation={navigation} />}
    },
  },

  Tutorial: {
    screen: Tutorial,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default HomeStack;
