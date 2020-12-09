import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FloatingButton from '../components/FloatingButton';
import {useTranslation} from 'react-i18next';
import {isFirstOpen} from '../helpers/isFirstOpen';
import TopSearch from '../components/TopSearch';
import BarcodeScanner from './BarcodeScanner';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCategories,
  updateCategory,
} from '../redux/actions/filtersActions';
import ProductCatalog from '../components/ProductCatalog';
import ProductNotFound from '../components/ProductNotFound';
import ImagePicker from 'react-native-image-picker';

const Home = ({navigation}) => {
  const {t} = useTranslation();

  const showBarcode = useSelector(
    (state) => state.navigationReducer.showBarcode,
  );
  const showProductLoading = useSelector(
    (state) => state.navigationReducer.showProductLoading,
  );
  const showProductNotFound = useSelector(
    (state) => state.navigationReducer.showProductNotFound,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCategories());
    isFirstOpen().then((res) => {
      if (res) {
        navigation.navigate('Tutorial');
      }
    });
  }, []);

  renderMainHome = () => {
    if (showBarcode) {
      return <BarcodeScanner navigation={navigation} />;
    }
    if (showProductLoading || showProductNotFound) {
      return <ProductNotFound navigation={navigation} />;
    }

    return <ProductCatalog navigation={navigation} productsSource={'Home'} />;
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
