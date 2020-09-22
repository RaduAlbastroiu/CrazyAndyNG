import {createStackNavigator} from 'react-navigation-stack';
import AboutUs from '../screens/AboutUs';
import Header from '../shared/Header';
import React from 'react'
const screens = {
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({navigation}) => {
      return {headerTitle: () => <Header navigation={navigation} />};
    },
  },
};

const BurgerStack = createStackNavigator(screens);

export default BurgerStack;
