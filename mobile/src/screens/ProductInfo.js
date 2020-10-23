import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import Placeholder from '../assets/placeholder.png';
import CalculatorImage from '../assets/calculator.png';
import TutorialFirst from '../assets/tutorialFirst.png';
import TutorialSecond from '../assets/tutorialSecond.png';
import TutorialThird from '../assets/tutorialThird.png';
import TutorialFourth from '../assets/tutorialFourth.png';

// here just to see the data
const productMockup = {
  price: [1799.99, 1999.99],
  hashtags: [
    'cool',
    'tv',
    '4k',
    'something',
    'co2ol',
    'tv',
    '43k',
    'somethin4g',
  ],
  images: [
    'image7d2cbf00-8ed5-45c7-bab0-d87f702b9cf7.jpg',
    'imagea16c6807-f7a8-446a-9821-8cc92c2f12d9.jpg',
  ],
  name: 'Televizor Sony, 108 cm',
  brand: 'LG',
  barcode: 'barcode234',
  origin: 'US',
  size: '44',
  category: 'Tvs',
};

const ProductInfo = ({route, navigation}) => {
  let [activeIndex, setActiveIndex] = useState(0);
  let [productImages, setProductImage] = useState([
    Placeholder,
    Placeholder,
    Placeholder,
  ]);

  const {params} = route;
  const windowWidth = useWindowDimensions().width;

  const renderTopItems = () => {
    return (
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: 'gray',
            margin: 5,
            marginLeft: 10,
            borderRadius: 7,
          }}>
          <Text>{params.category}</Text>
        </View>
        <Image
          style={{height: 40, width: 40, marginRight: 10}}
          source={CalculatorImage}
        />
      </View>
    );
  };

  const renderCarouselPagination = () => {
    return (
      <Pagination
        dotsLength={productImages.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={{paddingVertical: 10}}
      />
    );
  };

  const renderCarouselItem = ({item, index}) => {
    return (
      <Image source={productImages[index]} style={{height: 200, width: 200}} />
    );
  };

  const renderImagesCarousel = () => {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={productImages}
        renderItem={this.renderCarouselItem}
        sliderWidth={windowWidth / 2}
        itemWidth={windowWidth / 2}
        onSnapToItem={(index) => setActiveIndex((activeIndex = index))}
      />
    );
  };

  const renderHashtag = (hashtag, index) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: 'gray',
          margin: 5,
          marginLeft: 10,
          borderRadius: 7,
        }}
        key={index}>
        <Text>{hashtag}</Text>
      </View>
    );
  };

  const renderHashtags = () => {
    return params.hashtags.map((hashtag, index) => {
      return renderHashtag(hashtag, index);
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {renderTopItems()}
      <View
        style={{
          height: 400,
          backgroundColor: '#E5F4F9',
          borderRadius: 50,
          marginHorizontal: 10,
          marginVertical: 5,
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: 20,
            width: 300,
            alignItems: 'center',
          }}>
          {renderImagesCarousel()}
          {renderCarouselPagination()}
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow: 1,
          }}>
          {renderHashtags()}
        </View>
        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 100,
            width: 100,
          }}></View>
      </View>
    </View>
  );
};

export default ProductInfo;
