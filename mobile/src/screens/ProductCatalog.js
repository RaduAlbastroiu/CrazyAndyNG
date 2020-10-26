import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TopSearch from '../components/TopSearch';
import Placeholder from '../assets/placeholder.png';

// here just to see the data
const productsMockup = [
  {
    price: [1199.99, 1999.99],
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
  },
  {
    price: [1399.99, 1999.99],
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
  },
  {
    price: [1999.99],
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
  },
  {
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
  },
];

const ProductCatalog = ({route, navigation}) => {
  return (
    <View>
      <TopSearch />
      <View
        style={{
          borderColor: 'red',
          borderWidth: 2,
        }}>
        <Text>ProductCatalog</Text>
      </View>
    </View>
  );
};

export default ProductCatalog;
