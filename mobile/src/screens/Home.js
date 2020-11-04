import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatingButton from '../shared/FloatingButton';
import {useTranslation} from 'react-i18next';
import {isFirstOpen} from '../helpers/isFirstOpen';
import TopSearch from '../components/TopSearch';
import BarcodeScanner from './BarcodeScanner';
import {useSelector, useDispatch} from 'react-redux';
import ProductCatalog from './ProductCatalog';

const Home = ({navigation}) => {
  const {t} = useTranslation();

  const searchText = useSelector((state) => state.filtersReducer.searchText);

  useEffect(() => {
    isFirstOpen().then((res) => {
      if (res) {
        navigation.navigate('Tutorial');
      }
    });
  }, []);

  renderMainHome = () => {
    if (searchText && searchText.length) {
      return <ProductCatalog />;
    } else {
      return <BarcodeScanner navigation={navigation} />;
    }
  };

  return (
    <View style={{flex: 1}}>
      <TopSearch navigation={navigation} />
      {renderMainHome()}
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default Home;
