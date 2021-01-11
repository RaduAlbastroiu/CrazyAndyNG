import {View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import ProductCatalog from '../components/ProductCatalog';

const Comparison = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <ProductCatalog navigation={navigation} productsSource={'comparison'} />
    </View>
  );
};

export default Comparison;
