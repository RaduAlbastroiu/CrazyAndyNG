import React, {useEffect, useState} from 'react';
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
import {
  getScannedProduct,
  resetScannedProduct,
} from '../redux/actions/productsActions';
import {useSelector, useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

const BarcodeScanner = ({navigation}) => {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;
  let [topText, setTopText] = useState('Scanning for Barcode');

  const selectedCategory = useSelector(
    (state) => state.filtersReducer.selectedCategory,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetScannedProduct());
  }, []);

  onBarCodeRead = async (e) => {
    dispatch(setShowProductLoading(true));
    dispatch(setShowBarcode(false));
    dispatch(getScannedProduct(e.data, selectedCategory));

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

  const openGallery = () => {
    const options = {
      title: 'Choose barcode image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error');
      } else {
        const source = {uri: response.uri};

        // User choose an image
        onBarCodeRead('asd');
      }
    });
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
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            bottom: 50,
            padding: 15,
            borderRadius: 10,
          }}
          onPress={openGallery}>
          <Text>Open Gallery</Text>
        </TouchableOpacity>
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
