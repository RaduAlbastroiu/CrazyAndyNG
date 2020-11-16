import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  Modal,
} from 'react-native';
import FloatingButton from '../components/FloatingButton';

const ProductLoading = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View
          style={{
            backgroundColor: '#E5F4F9',
            borderRadius: 40,
            marginHorizontal: 15,
            marginVertical: 25,
          }}>
          <View style={{alignItems: 'center', height: 300}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          </View>
        </View>
      </View>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default ProductLoading;
