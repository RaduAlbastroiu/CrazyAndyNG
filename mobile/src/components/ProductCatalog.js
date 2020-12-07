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
import {getFavorites} from '../redux/actions/favoritesActions';
import FloatingButton from './FloatingButton';
import TopSearch from './TopSearch';
import SmallProduct from './SmallProduct';
import Hashtags from './Hashtags';
import {getUniqueId} from 'react-native-device-info';
import ComparisonItem from './ComparisonItem';

const ProductCatalog = ({navigation, productsSource}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  let products = useSelector((state) => state.productsReducer.products);
  if (productsSource === 'favorites') {
    products = useSelector((state) => state.favoritesReducer.products);
  } else {
    if (productsSource === 'comparison') {
      products = useSelector((state) => state.comparisonReducer.products);
    }
  }

  const selectedCategory = useSelector(
    (state) => state.filtersReducer.selectedCategory,
  );
  const selectedHashtags = useSelector(
    (state) => state.filtersReducer.selectedHashtags,
  );
  const searchText = useSelector((state) => state.filtersReducer.searchText);

  console.log(selectedCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    let filter = {
      categoryName: selectedCategory,
      hashtagNames: selectedHashtags,
      name: searchText,
    };

    if (productsSource === 'favorites') {
      dispatch(getFavorites(getUniqueId()));
    } else {
      dispatch(getProducts(filter));
    }
  }, [selectedHashtags, selectedCategory, searchText]);

  /*
   
          */

  renderProducts = () => {
    return products.map((product, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{marginBottom: 5}}
          onPress={() => {
            navigation.navigate('ProductInfo', product);
          }}>
          {productsSource === 'comparison' ? (
            <ComparisonItem
              size={{
                width: (windowWidth / 7) * 6,
              }}
              product={product}
            />
          ) : (
            <SmallProduct
              size={{
                width: (windowWidth / 7) * 3,
              }}
              product={product}
            />
          )}
        </TouchableOpacity>
      );
    });
  };

  renderHashtags = () => {
    if (productsSource !== 'favorites' && productsSource !== 'comparison') {
      return <Hashtags category={selectedCategory} />;
    }
  };

  return (
    <View>
      <View style={{backgroundColor: 'white'}}>
        {renderHashtags()}
        <View
          style={{
            height:
              productsSource !== 'favorites' && productsSource !== 'comparison'
                ? windowHeight - 203
                : windowHeight - 93,
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
