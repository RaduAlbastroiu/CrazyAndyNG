import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import ProductInfo from './ProductInfo';

const BarcodeScanner = ({route, navigation}) => {
  const {params} = route;
  let didSearch = false;

  onBarCodeRead = async (e) => {
    if (didSearch === false) {
      didSearch = true;
      let res = await axios.get(`https://crazye.herokuapp.com/api/product/`, {
        params: {
          deviceId: 'someDeviceId',
          filter: `{"barcode": "${e.type}--${e.data}"}`,
        },
      });

      console.log(`"${e.type}--${e.data}`);
      if (res.data.found.length > 0) {
        console.log(res.data.found[0]);
        navigation.navigate('ProductInfo', res.data.found[0]);
      }
    }
  };

  takePicture = async () => {
    console.log('pressed');
    let t = {
      __v: 10,
      _id: '5f89dfaf51f98253d71efd97',
      barcode: 'org.gs1.EAN-13--5201360501700',
      brand: 'LG',
      category: '5f75ddb9cf785426069f8170',
      hashtags: ['5f764b06f35aaf3b84f3410b'],
      images: [
        'image7d2cbf00-8ed5-45c7-bab0-d87f702b9cf7.jpg',
        'imagea16c6807-f7a8-446a-9821-8cc92c2f12d9.jpg',
      ],
      isValid: true,
      name: 'Televizor Sony, 108 cm',
      origin: 'US',
      owner: 'someDeviceId',
      price: [1799.99, 1999.99],
      size: '44',
    };
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={onBarCodeRead}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={styles.capture}>
          <Text style={{fontSize: 14}}> No Barcode </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default BarcodeScanner;
