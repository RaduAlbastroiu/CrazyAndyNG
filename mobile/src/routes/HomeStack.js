import Home from '../screens/Home';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Tutorial from '../screens/Tutorial';
import Header from '../shared/Header';
import React from 'react';
import More from '../screens/More';
import FAQ from '../screens/FAQ';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';

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
  More: {
    screen: More,
    navigationOptions: {
      title: 'More',
    },
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default createAppContainer(HomeStack)