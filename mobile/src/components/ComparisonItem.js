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
import {getFeedback} from '../redux/actions/feedbackActions';

import Placeholder from '../assets/placeholder.png';
import FavIconFill from '../assets/fav_icon_fill.png';
import FavIconEmpty from '../assets/fav_icon_empty.png';
import StarsFeedback from '../components/StarsFeedback';
import {getUniqueId} from 'react-native-device-info';
import ProductCatalog from './ProductCatalog';

const ComparisonItem = ({size, product}) => {
  let [starsFeedback, setStarsFeedback] = useState(0);

  useEffect(() => {
    let filter = {product: product._id};

    getFeedback(filter).then((res) => {
      let sumScores = 0;
      res.forEach((review) => {
        sumScores += review.stars;
      });
      if (sumScores === 0) {
        setStarsFeedback(0);
      } else {
        setStarsFeedback(sumScores / res.length);
      }
    });
  }, []);

  const renderLeftSide = () => {
    return (
      <View
        style={{
          padding: 5,
          display: 'flex',
        }}>
        <Image
          style={{
            width: size.width / 3,
            height: undefined,
            aspectRatio: 1,
            borderColor: '#D3D3D3',
            borderWidth: 2,
            borderRadius: 5,
          }}
          source={Placeholder}
        />
        <View style={{marginTop: 5}}>
          <StarsFeedback stars={starsFeedback}></StarsFeedback>
        </View>
      </View>
    );
  };

  const renderInfo = () => {
    let productPrice = product.price[0];

    if (product.price.length === 2) {
      productPrice = `${productPrice[0]}-${productPrice[1]}`;
    }

    return (
      <View
        style={{
          width: size.width / 2 + 20,
          borderWidth: 2,
          borderColor: 'red',
        }}>
        <Text style={styles.textDetails}>{product.brand}</Text>
        <Text style={styles.textDetails}>{product.name}</Text>
        <Text style={styles.textDetails}>{product.origin}</Text>
        <Text style={styles.textDetails}>{product.price[0]}</Text>
      </View>
    );
  };

  const renderHashtags = () => {};

  const renderRightSide = () => {
    return <View>{renderInfo()}</View>;
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
      }}>
      {renderLeftSide()}
      {renderRightSide()}
    </View>
  );
};

export default ComparisonItem;

const styles = StyleSheet.create({
  textDetails: {
    color: '#7F7F7F',
    fontSize: 14,
    margin: 1,
  },
});
