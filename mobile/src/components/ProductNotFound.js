import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  useWindowDimensions,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  setShowProductLoading,
  setShowBarcode,
} from '../redux/actions/navigationActions';
import FloatingButton from '../components/FloatingButton';

const ProductNotFound = ({navigation}) => {
  const scannedProduct = useSelector(
    (state) => state.productsReducer.scannedProduct,
  );
  const showProductLoading = useSelector(
    (state) => state.navigationReducer.showProductLoading,
  );

  const dispatch = useDispatch();

  const renderMainComponent = () => {
    console.log(scannedProduct);

    if (scannedProduct !== null && scannedProduct !== 'not found') {
      dispatch(setShowProductLoading(false));
      dispatch(setShowBarcode(true));

      navigation.navigate('ProductInfo', scannedProduct);
    }

    if (scannedProduct === 'not found') {
      return (
        <View>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.textDetails, {marginTop: 25, fontSize: 24}]}>
              Product Not Found
            </Text>
            <Text
              style={[
                styles.textDetails,
                {marginTop: 20, marginBottom: 30, marginHorizontal: 30},
              ]}>
              The product you scanned doesn't exist in our database, if you want
              this product to be added go to product feedback page.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 40,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: 'white',
                marginRight: 25,
                borderRadius: 10,
              }}>
              <Text>Go to Scanning</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 15, backgroundColor: 'white', borderRadius: 10}}>
              <Text>Go to Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

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
          {renderMainComponent()}
        </View>
      </View>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default ProductNotFound;

const styles = StyleSheet.create({
  textDetails: {
    margin: 2,
    color: '#777777',
    fontSize: 16,
  },
});
