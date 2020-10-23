import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

// here just to see the data
const productMockup = {
  price: [1799.99, 1999.99],
  hashtags: ['cool', 'tv', '4k', 'something', 'cool', 'tv', '4k', 'something'],
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

const ProductInfo = ({route, navigation}) => {
  const {params} = route;

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log(route);
        }}>
        <Text>ALTPNM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default ProductInfo;
