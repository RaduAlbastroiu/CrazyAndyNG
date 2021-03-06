import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {Language2} from './src/helpers/Language2';
import {LogBox, View, Button, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBackButton} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {setShowBarcode} from './src/redux/actions/navigationActions';
import Home from './src/screens/Home';
import Tutorial from './src/screens/Tutorial';
import More from './src/screens/More';
import HtmlScreen from './src/screens/HtmlScreen';
import Favorites from './src/screens/Favorites';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProductInfo from './src/screens/ProductInfo';
import Feedback from './src/screens/Feedback';
import BarcodeScanner from './src/screens/BarcodeScanner';
import ProductCatalog from './src/components/ProductCatalog';
import CategoryChooser from './src/screens/CategorySelector';
import store from './src/redux/store';
import Comparison from './src/screens/Comparison';
import SelectProducts from './src/screens/SelectProducts';

const Stack = createStackNavigator();

const productMockup = {
  price: [1799.99, 1999.99],
  hashtags: [
    'cool',
    'tv',
    '4k',
    'something',
    'co2ol',
    'tv',
    '43k',
    'somethin4g',
  ],
  images: [
    'image7d2cbf00-8ed5-45c7-bab0-d87f702b9cf7.jpg',
    'imagea16c6807-f7a8-446a-9821-8cc92c2f12d9.jpg',
  ],
  name: 'Televizor Sony, 108 cm',
  brand: 'LG',
  barcode: 'barcode234',
  origin: 'US',
  size: '44',
  category: 'Tvs',
};

function MyStack() {
  const dispatch = useDispatch();
  const showBarcode = useSelector(
    (state) => state.navigationReducer.showBarcode,
  );

  let headerLeft = (
    <HeaderBackButton
      onPress={() => {
        dispatch(setShowBarcode(true));
      }}
    />
  );
  if (showBarcode) {
    headerLeft = <View />;
  }

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
          headerLeft: () => headerLeft,
        })}
      />
      <Stack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options={{title: 'Information'}}
      />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Comparison" component={Comparison} />
      <Stack.Screen
        name="SelectProducts"
        component={SelectProducts}
        options={{title: 'Select'}}
      />
      <Stack.Screen name="CategoryChooser" component={CategoryChooser} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen
        name="HtmlScreen"
        component={HtmlScreen}
        options={{title: 'Help'}}
      />
      <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
      <Stack.Screen
        name="ProductCatalog"
        component={ProductCatalog}
        options={{title: 'Products'}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{title: 'Product Feedback'}}
      />
    </Stack.Navigator>
  );
}

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
