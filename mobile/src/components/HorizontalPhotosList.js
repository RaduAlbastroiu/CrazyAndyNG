import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Linking,
} from 'react-native';
import {getImageUrl} from '../helpers/apiRoutes';
import {getUniqueId} from 'react-native-device-info';
import addIcon from '../../src/assets/add.png';

const HorizontalPhotosList = ({product}) => {
  console.log('plm');
  console.log(product);

  const renderPhotos = () => {
    console.log('alt plm');
    console.log(product.images.length);
    let photos = product.images.map((image) => {
      return (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            console.log(getImageUrl(product._id, image, getUniqueId()))
          }>
          <Image
            source={getImageUrl(product._id, image, getUniqueId())}
            style={{}}
          />
        </TouchableOpacity>
      );
    });

    photos.push(
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => console.log('add')}>
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
          {photos}
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
    backgroundColor: 'lightgrey',
  },
});
