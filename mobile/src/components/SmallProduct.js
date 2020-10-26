import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Placeholder from '../assets/placeholder.png';

// here just to see the data
const productMockup = {
  price: [1799.99, 1999.99],
  hashtags: [
    'cool',
    'tv',
    '4k',
    'something',
    'co2ol',
    'tv',
    '43k',
    'somethin4g',
  ],
  images: [
    'image7d2cbf00-8ed5-45c7-bab0-d87f702b9cf7.jpg',
    'imagea16c6807-f7a8-446a-9821-8cc92c2f12d9.jpg',
  ],
  name: 'Televizor Sony, 108 cm',
  brand: 'LG',
  barcode: 'barcode234',
  origin: 'US',
  size: '44',
  category: 'Tvs',
};

const SmallProduct = ({route, navigation}) => {
  let [isFavorite, setFavorite] = useState(false);
  let [productImages, setProductImage] = useState([
    Placeholder,
    Placeholder,
    Placeholder,
  ]);

  return (
    <View
      style={{
        width: 100,
        height: 200,
        borderColor: 'red',
        borderWidth: 2,
      }}></View>
  );
};

export default SmallProduct;
