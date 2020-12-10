import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Linking,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {getImageUrl} from '../helpers/apiRoutes';
import {getUniqueId} from 'react-native-device-info';
import addIcon from '../../src/assets/add.png';

const HorizontalPhotosList = ({product}) => {
  console.log(product);

  // make photos state object
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    let productPhotos = product.images.map((imgLink) => {
      return {uri: imgLink};
    });
    console.log(productPhotos);
  }, []);

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

  const renderPhotos = () => {
    console.log('--------------------------');
    console.log(photos);
    let sliderPhotos = photos.map((image, index) => {
      console.log(index);
      console.log(image);
      return (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            console.log(getImageUrl(product._id, image, getUniqueId()))
          }>
          <Image source={image} style={{width: 200, height: 120}} />
        </TouchableOpacity>
      );
    });

    sliderPhotos.push(
      <TouchableOpacity style={styles.imageContainer} onPress={openGallery}>
        <Image source={addIcon} style={{height: 60, width: 60}} />
      </TouchableOpacity>,
    );

    return (
      <View style={{margin: 5, marginTop: 10}}>
        <Text>Photos</Text>
        <ScrollView
          style={{marginTop: 5}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {sliderPhotos}
        </ScrollView>
      </View>
    );
  };

  return renderPhotos();
};

export default HorizontalPhotosList;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 200,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: '#e5f4f9',
  },
});
