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
import {updateComparison} from '../redux/actions/comparisonActions';

const ProductCatalog = ({navigation, productsSource}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const selectedProducts = useSelector(
    (state) => state.comparisonReducer.products,
  );
  const products = useSelector((state) => state.productsReducer.products);
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
  }, [selectedHashtags, selectedCategory, searchText, selectedProducts]);

  const renderElement = (product) => {
    let isSelected = false;
    selectedProducts.forEach((ele) => {
      if (ele._id === product._id) {
        isSelected = true;
      }
    });

    if (productsSource === 'comparison') {
      return (
        <ComparisonItem
          size={{
            width: (windowWidth / 7) * 6,
          }}
          product={product}
        />
      );
    }
    if (productsSource === 'select') {
      return (
        <SmallProduct
          size={{
            width: (windowWidth / 7) * 3,
          }}
          product={product}
          isSelectable={true}
          isSelected={isSelected}
          onSelect={() => {
            if (isSelected === false) {
              console.log('add');
              dispatch(updateComparison([...selectedProducts, product]));
            } else {
              let index = selectedProducts.findIndex((ele) => {
                return ele._id === product._id;
              });
              if (index >= 0) {
                selectedProducts.splice(index, 1);
                dispatch(updateComparison([...selectedProducts]));
              }
            }
          }}
        />
      );
    }

    return (
      <SmallProduct
        size={{
          width: (windowWidth / 7) * 3,
        }}
        product={product}
      />
    );
  };

  renderProducts = () => {
    return products.map((product, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{marginBottom: 5}}
          onPress={() => {
            navigation.navigate('ProductInfo', product);
          }}>
          {renderElement(product)}
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
