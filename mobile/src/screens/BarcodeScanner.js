import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import scanBarcode from '../assets/scanBarcode.png';
import {getUniqueId} from 'react-native-device-info';
import {
  setShowProductLoading,
  setShowBarcode,
} from '../redux/actions/navigationActions';
import {getScannedProduct} from '../redux/actions/productsActions';
import {useSelector, useDispatch} from 'react-redux';

const BarcodeScanner = ({navigation}) => {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;
  let [topText, setTopText] = useState('Scanning for Barcode');

  const dispatch = useDispatch();

  onBarCodeRead = async (e) => {
    dispatch(setShowProductLoading(true));
    dispatch(setShowBarcode(false));
    dispatch(getScannedProduct(e.data));

    console.log(`"${e.data}"`);
  };

  renderTopText = () => {
    return (
      <View
        style={{
          backgroundColor: '#5d554f',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 8,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}>
          {topText}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 200,
      }}>
      {renderTopText()}
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 200,
        }}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={onBarCodeRead}>
        <Image
          source={scanBarcode}
          style={{
            position: 'absolute',
            height: (windowWidth / 8) * 7,
            width: (windowWidth / 8) * 7,
            tintColor: 'white',
            bottom: windowHeight / 2 - ((windowWidth / 8) * 7) / 2 - 30,
          }}
        />
      </RNCamera>
    </View>
  );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  captueContainer: {
    position: 'absolute',
    bottom: 0,
  },

  captureBtn: {
    backgroundColor: 'red',
  },
});
