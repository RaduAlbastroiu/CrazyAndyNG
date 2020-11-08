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
import {getFavorites} from '../redux/actions/productsActions';
import FloatingButton from './FloatingButton';
import TopSearch from './TopSearch';
import SmallProduct from './SmallProduct';
import Hashtags from './Hashtags';
import {get} from 'mongoose';

const ProductCatalog = ({navigation}, {productsSource}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  let products = useSelector((state) => state.productsReducer.products);
  if (productsSource === 'favorites') {
    products = useSelector((state) => state.favoritesReducer.products);
  }

  const selectedCategory = useSelector(
    (state) => state.filtersReducer.selectedCategory,
  );
  const selectedHashtags = useSelector(
    (state) => state.filtersReducer.selectedHashtags,
  );
  const searchText = useSelector((state) => state.filtersReducer.searchText);

  const dispatch = useDispatch();
  useEffect(() => {
    let filter = {
      categoryName: selectedCategory,
      hashtagNames: selectedHashtags,
      name: searchText,
    };

    if (productsSource === 'favorites') {
      dispatch(getFavorites(filter));
    } else {
      dispatch(getProducts(filter));
    }
  }, [selectedHashtags, selectedCategory, searchText]);

  renderProducts = () => {
    return products.map((product, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{marginBottom: 5}}
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
        <Hashtags category={selectedCategory} />
        <View
          style={{
            height: windowHeight - 203,
          }}>
          <ScrollView
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
            showsVerticalScrollIndicator={false}>
            {renderProducts()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProductCatalog;
