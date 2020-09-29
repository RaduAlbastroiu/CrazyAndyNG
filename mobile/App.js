import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {Language2} from './src/helpers/Language2';
import {LogBox, View, Button, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Tutorial from './src/screens/Tutorial';
import More from './src/screens/More';
import HtmlScreen from './src/screens/HtmlScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import MyStack from './src/routes/MainNavigation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Tutorial');
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginVertical: 10,
                  marginRight: 15,
                }}
                source={require('./src/assets/question.png')}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="HtmlScreen" component={HtmlScreen} />
    </Stack.Navigator>
  );
}

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
