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

import TopSearch from '../components/TopSearch';
import SmallProduct from '../components/SmallProduct';
import Hashtags from '../components/Hashtags';

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
  const windowWidth = useWindowDimensions().width;

  renderProducts = () => {
    return productsMockup.map((product) => {
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
    <View style={{backgroundColor: 'white'}}>
      <TopSearch category="Masks" />
      <Hashtags
        hashtags={[
          '4k',
          'something',
          'other',
          'tags',
          'fullhd',
          'digital',
          'smart',
        ]}
      />
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
  );
};

export default ProductCatalog;
