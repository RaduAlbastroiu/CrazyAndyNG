import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';

import emptyStar from '../assets/star-empty.png';
import fullStar from '../assets/star-full.png';
import halfStar from '../assets/star-half.png';

const StarsFeedback = ({stars, noReviews}) => {
  const starsType = [fullStar, halfStar, emptyStar];
  const renderStars = () => {
    let starsTypeArr = [0, 0, 0];
    starsTypeArr[0] = Math.floor(stars);
    starsTypeArr[2] = 5 - Math.ceil(stars);

    if (starsTypeArr[0] + starsTypeArr[2] < 5) {
      let i = 0;
      if (stars - Math.floor(stars) < 0.75) {
        i += 1;
        if (stars - Math.floor(stars) < 0.25) {
          i += 1;
        }
      }
      starsTypeArr[i] += 1;
    }

    let starsArr = [];
    for (i = 0; i < 3; i++) {
      for (j = 0; j < starsTypeArr[i]; j++) {
        starsArr.push(
          <Image
            style={{
              width: 20,
              height: 20,
              marginRight: 5,
            }}
            source={starsType[i]}
          />,
        );
      }
    }

    return starsArr;
  };

  const renderTextStars = () => {
    if (stars > 0) {
      let textStar = stars.toString();
      if (textStar.length > 4) {
        textStar = textStar.substring(0, 4);
      }
      return (
        <Text
          style={{fontSize: 16, marginLeft: 8, marginTop: 1, color: '#777777'}}>
          {`${textStar}`}
        </Text>
      );
    }
  };

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        {renderStars()}
      </View>
    </View>
  );
};

export default StarsFeedback;
