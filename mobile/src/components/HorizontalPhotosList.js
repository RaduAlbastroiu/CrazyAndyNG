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
import minusIcon from '../../src/assets/minus.png';

const HorizontalPhotosList = ({product}) => {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log('once');
    if (product.images != undefined) {
      let productPhotos = product.images.map((imgLink) => {
        return {
          uri: getImageUrl(product._id, imgLink, getUniqueId()),
          delete: false,
        };
      });
      setPhotos(productPhotos);
    }
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
        setPhotos([...photos, source]);
      }
    });
  };

  const onPhotoPress = (index) => {
    console.log('pressed');
    console.log(photos);
    //console.log(photos[index]);

    let newPhotos = [...photos];
    let photo = {...newPhotos[index]};
    photo.delete = !photo.delete;
    newPhotos[index] = photo;
    setPhotos(newPhotos);
  };

  const onPhotoRemove = (index) => {
    let newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const renderPhotos = () => {
    console.log('rerender');
    console.log(photos);

    let sliderPhotos = photos.map((image, index) => {
      if (image.delete === true) {
        return (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              onPhotoPress(index);
            }}>
            <Image
              source={image}
              style={{width: 200, height: 120, opacity: 0.2}}
            />
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                position: 'absolute',
                top: 30,
              }}
              onPress={() => {
                console.log('pressed');
                onPhotoRemove(index);
              }}>
              <Image
                source={minusIcon}
                style={{width: 60, height: 60, tintColor: 'red'}}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {
            onPhotoPress(index);
          }}>
          <Image source={image} style={{width: 200, height: 120}} />
        </TouchableOpacity>
      );
    });

    sliderPhotos.push(
      <TouchableOpacity style={styles.imageContainer} onPress={openGallery}>
        <Image source={addIcon} style={{height: 60, width: 60}} />
        <Text>{'Full'}</Text>
      </TouchableOpacity>,
    );

    sliderPhotos.push(
      <TouchableOpacity style={styles.imageContainer} onPress={openGallery}>
        <Image source={addIcon} style={{height: 60, width: 60}} />
        <Text>{'Front'}</Text>
      </TouchableOpacity>,
    );

    sliderPhotos.push(
      <TouchableOpacity style={styles.imageContainer} onPress={openGallery}>
        <Image source={addIcon} style={{height: 60, width: 60}} />
        <Text>{'Feature'}</Text>
      </TouchableOpacity>,
    );

    sliderPhotos.push(
      <TouchableOpacity style={styles.imageContainer} onPress={openGallery}>
        <Image source={addIcon} style={{height: 60, width: 60}} />
        <Text>{'Barcode'}</Text>
      </TouchableOpacity>,
    );

    sliderPhotos.push(
      <TouchableOpacity style={styles.imageContainer} onPress={openGallery}>
        <Image source={addIcon} style={{height: 60, width: 60}} />
        <Text>{'Misc'}</Text>
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
