import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FloatingButton from '../components/FloatingButton';
import {useTranslation} from 'react-i18next';
import ProductCatalog from '../components/ProductCatalog';

const Comparison = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <ProductCatalog navigation={navigation} productsSource={'comparison'} />
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default Comparison;
