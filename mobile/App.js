import React from 'react';
import Navigator from './src/routes/MainNavigation';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified.']);
export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  

  return <Navigator />;
}
