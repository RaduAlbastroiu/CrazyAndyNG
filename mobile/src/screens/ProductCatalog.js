import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../redux/actions/productsActions';
import FloatingButton from '../shared/FloatingButton';
import TopSearch from '../components/TopSearch';
import SmallProduct from '../components/SmallProduct';
import Hashtags from '../components/Hashtags';

// here just to see the data
import productsMockup from './MockupData';

const ProductCatalog = ({route, navigation}) => {
  const windowWidth = useWindowDimensions().width;

  const products = useSelector((state) => state.productsReducer.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  renderProducts = () => {
    return products.map((product) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductInfo', product);
          }}>
          <SmallProduct
            size={{
              width: (windowWidth / 7) * 3,
            }}
            product={product}
          />
        </TouchableOpacity>
      );
    });
  };

  return (
    <View>
      <View style={{backgroundColor: 'white'}}>
        <TopSearch category="Masks" />
        <Hashtags />
        <ScrollView
          contentContainerStyle={{
            zIndex: 6000,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 80,
            justifyContent: 'center',
          }}
          showsVerticalScrollIndicator={false}>
          {renderProducts()}
        </ScrollView>
      </View>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default ProductCatalog;
