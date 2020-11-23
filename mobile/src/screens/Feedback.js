import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const Home = ({navigation, route}) => {
  const {params} = route;

  useEffect(() => {
    console.log('show feedback');
    console.log(params.product);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>Product Feedback</Text>
    </View>
  );
};

export default Home;
