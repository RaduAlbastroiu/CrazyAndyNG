import React from 'react';
import Navigator from './src/routes/drawer.js';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Navigator />;
}
