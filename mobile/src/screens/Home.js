import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatingButton from '../shared/FloatingButton';
import {useTranslation} from 'react-i18next';
import isFirstOpen from '../helpers/isFirstOpen';
import TopSearch from '../components/TopSearch';
import BarcodeScanner from './BarcodeScanner';

const Home = ({navigation}) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    isFirstOpen().then((res) => {
      if (res) {
        navigation.navigate('Tutorial');
      }
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FloatingButton navigation={navigation} />
      <TopSearch navigation={navigation} />
      <BarcodeScanner navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Home;
