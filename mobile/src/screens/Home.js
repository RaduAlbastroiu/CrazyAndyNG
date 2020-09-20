import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native'
import WelcomeScreen from './WelcomeScreen';

export default function Home() {
    const [loaded, setLoaded] = useState();

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoaded({loaded: true});
      }, 3000);
      return () => clearTimeout(timer);
    }, []);


    return (
        <View>
          {loaded ? (
        <Text>Working on Home Screen</Text>
      ) : (
        <WelcomeScreen />
      )}
        </View>
    )
}
