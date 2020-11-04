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
import TopSearch from './TopSearch';
import SmallProduct from './SmallProduct';
import Hashtags from './Hashtags';

// here just to see the data
import productsMockup from '../screens/MockupData';

const ProductCatalog = ({route, navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const products = []; // useSelector((state) => state.productsReducer.products);
  const selectedCategory = []; /*useSelector(
    (state) => state.categoryReducer.selectedCategory,
  );*/
  const hashtags = []; //useSelector((state) => state.hashtagsReducer.hashtags);

  const dispatch = useDispatch();
  useEffect(() => {
    let filter = {categoryName: selectedCategory};
    /*
    if (selectedHashtags.length > 0) {
      filter.hashtagNames = selectedHashtags;
    }
    */
    console.log(filter);
    //dispatch(getProducts(filter));
  }, []);

  renderProducts = () => {
    return products.map((product) => {
      return (
        <TouchableOpacity
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
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default ProductCatalog;
