import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatingButton from '../components/FloatingButton';
import {useTranslation} from 'react-i18next';
import {isFirstOpen} from '../helpers/isFirstOpen';
import TopSearch from '../components/TopSearch';
import {useSelector, useDispatch} from 'react-redux';
import ProductCatalog from '../components/ProductCatalog';
import products from './MockupData';

const Favorites = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <ProductCatalog navigation={navigation} productsSource={'favorites'} />
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default Favorites;
