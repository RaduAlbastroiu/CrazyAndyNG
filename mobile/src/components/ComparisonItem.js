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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const ComparisonItem = ({size, product}) => {
  let [starsFeedback, setStarsFeedback] = useState(0);

  let productImage = Placeholder;
  if (product.images.length) {
    productImage = {
      uri: getImageUrl(product._id, product.images[0], getUniqueId()),
    };
  }

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
          source={productImage}
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
        }}>
        <Text style={styles.textDetails}>{product.brand}</Text>
        <Text style={styles.textDetails}>{product.name}</Text>
        <Text style={styles.textDetails}>{product.origin}</Text>
        <Text style={styles.textDetails}>{product.price[0]}</Text>
      </View>
    );
  };

  const renderHashtag = (hashtag, index) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 20,
          paddingHorizontal: 10,
          backgroundColor: hashtag.isHighlighted ? '#F8CBAD' : '#D3D3D3',
          margin: 5,
          marginRight: 5,
          borderRadius: 7,
        }}
        key={index}>
        <Text>{hashtag.name}</Text>
      </View>
    );
  };

  const renderHashtags = () => {
    let hashtags = product.hashtags.map((h) => {
      return {name: h.name, isHighlighted: h.isHighlighted};
    });
    return (
      <View
        style={{
          height: 50,
          width: 200,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {hashtags.map((h, index) => renderHashtag(h, index))}
      </View>
    );
  };

  const renderRightSide = () => {
    return (
      <View>
        {renderInfo()}
        {renderHashtags()}
      </View>
    );
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => {
        console.log('swiped');
      }}>
      <View
        style={{
          width: size.width,
          //height: size.height,
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
    </GestureRecognizer>
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
