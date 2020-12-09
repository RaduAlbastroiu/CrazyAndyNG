import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FloatingButton from '../components/FloatingButton';
import {useTranslation} from 'react-i18next';
import ProductCatalog from '../components/ProductCatalog';
import TopSearch from '../components/TopSearch';

const SelectProducts = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <TopSearch
        navigation={navigation}
        isSelectable={true}
        onDone={() => {
          console.log('done selecting');
        }}
      />
      <ProductCatalog navigation={navigation} productsSource={'select'} />
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default SelectProducts;
