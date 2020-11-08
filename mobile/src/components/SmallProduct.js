import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getImageUrl} from '../helpers/apiRoutes';
import {
  addToFavorites,
  removeFromFavorites,
} from '../redux/actions/favoritesActions';

import Placeholder from '../assets/placeholder.png';
import FavIconFill from '../assets/fav_icon_fill.png';
import FavIconEmpty from '../assets/fav_icon_empty.png';

const SmallProduct = ({size, product}) => {
  let productImage = Placeholder;
  if (product.images.length) {
    productImage = {
      uri: getImageUrl(product._id, product.images[0], 'someDeviceId'),
    };
  }

  let isFavorite = false;
  const favoritesProducts = useSelector(
    (state) => state.favoritesReducer.products,
  );

  if (
    favoritesProducts.some((prod) => {
      return prod._id === product._id;
    })
  ) {
    isFavorite = true;
  }

  const dispatch = useDispatch();

  renderInfo = () => {
    let textComp = [<Text style={styles.textDetails}>{product.name}</Text>];

    if (product.size) {
      textComp.push(<Text style={styles.textDetails}>{product.size}</Text>);
    }
    if (product.price.length === 1) {
      textComp.push(
        <Text style={styles.textDetails}>{`$${product.price[0]}`}</Text>,
      );
    } else {
      textComp.push(
        <Text
          style={
            styles.textDetails
          }>{`$${product.price[0]} - $${product.price[1]}`}</Text>,
      );
    }
    return textComp;
  };

  renderBottom = () => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#e5f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>Select</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => {
            if (isFavorite) {
              dispatch(removeFromFavorites('someDeviceId', product._id));
            } else {
              dispatch(addToFavorites('someDeviceId', product._id));
            }
          }}>
          <Image
            style={{height: 25, width: 25}}
            source={isFavorite ? FavIconFill : FavIconEmpty}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        width: size.width,
        height: size.height,
        borderColor: '#EBEBEB',
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
      }}>
      <Image
        style={{
          width: '90%',
          height: undefined,
          aspectRatio: 1,
          borderColor: '#D3D3D3',
          borderWidth: 2,
          borderRadius: 5,
          margin: 5,
        }}
        source={productImage}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          marginLeft: 10,
          marginRight: 5,
          marginTop: 5,
        }}>
        {renderInfo()}
      </View>
      {renderBottom()}
    </View>
  );
};

export default SmallProduct;

const styles = StyleSheet.create({
  textDetails: {
    color: '#7F7F7F',
    fontSize: 14,
    margin: 1,
  },
});
