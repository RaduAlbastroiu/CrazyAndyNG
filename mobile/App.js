import React from 'react';
import Navigator from './src/routes/MainNavigation';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {Language2} from './src/helpers/Language2';
import {LogBox, View} from 'react-native';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigator />;
}
