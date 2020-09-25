import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  NativeModules,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FloatingButton from '../shared/FloatingButton';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';

const deviceLanguage =
  Platform.OS === 'Android'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage);

// i18n.changeLanguage('en-US');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en_US: {
        translation: {
          Home: 'Home',
        },
      },
      zh: {
        translation: {
          Home: '家',
        },
      },
    },
   
   
    lng: (deviceLanguage),
    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false,
    },
  });

const Home = ({navigation}) => {
  const [showTutorial, setShowTutorial] = useState(true);
  // const [languageSelected, setLanguageSelected] = useState('en');
  const {t} = useTranslation();
  console.log(t);

  //give item
  const setData = async (value) => {
    try {
      setShowTutorial(false);
      await AsyncStorage.setItem('key', '27');
      console.log('data set');
    } catch (e) {}
  };

  //get item
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        setShowTutorial(false);
        return;
        // value previously stored
      }
      setShowTutorial(true);
    } catch (e) {}
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('key');
    } catch (e) {}
    console.log('data removed');
  };

  const onPressTutorial = async () => {
    await setData();
    setShowTutorial({showTutorial: false});
    navigation.navigate('Tutorial');
  };

  const renderTutorial = () => {
    return (
      <TouchableOpacity
        onPress={onPressTutorial}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Start Tutorial</Text>
      </TouchableOpacity>
    );
  };

  //set the loading screen
  useEffect(() => {
    // removeData();
    getData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>{t('Home')}</Text>
      <View>{showTutorial === true ? renderTutorial() : <></>}</View>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },

  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Home;
