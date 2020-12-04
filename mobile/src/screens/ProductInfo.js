import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {getUniqueId} from 'react-native-device-info';
import React, {useState, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FloatingButton from '../components/FloatingButton';
import {useSelector, useDispatch} from 'react-redux';
import StarsFeedback from '../components/StarsFeedback';
import {getFeedback} from '../redux/actions/feedbackActions';
import {getImageUrl} from '../helpers/apiRoutes';
import {
  addToFavorites,
  removeFromFavorites,
} from '../redux/actions/favoritesActions';
import {updateSelectedHashtags} from '../redux/actions/filtersActions';
import {updateComparison} from '../redux/actions/comparisonActions';

import Placeholder from '../assets/placeholder.png';
import CalculatorImage from '../assets/calculator.png';
import EditImage from '../assets/edit.png';
import CompareImage from '../assets/compare.png';
import ShareImage from '../assets/share.png';
import FavIconEmpty from '../assets/fav_icon_empty.png';
import FavIconFill from '../assets/fav_icon_fill.png';
import CloseImage from '../assets/close.png';

const ProductInfo = ({route, navigation}) => {
  const {params} = route;
  const product = params;
  const windowWidth = useWindowDimensions().width;

  let [activeIndex, setActiveIndex] = useState(0);
  let [showModal, setShowModal] = useState(false);
  let [starsFeedback, setStarsFeedback] = useState(0);
  let [showHashtagModal, setShowHashtagModel] = useState(false);
  let [selectedHashtag, setSelectedHashtag] = useState(null);

  const dispatch = useDispatch();

  let isFavorite = false;
  const favoritesProducts = useSelector(
    (state) => state.favoritesReducer.products,
  );
  const comparisonProducts = useSelector(
    (state) => state.comparisonReducer.products,
  );

  if (
    favoritesProducts.some((prod) => {
      return prod._id === product._id;
    })
  ) {
    isFavorite = true;
  }

  const FavIcon = isFavorite ? FavIconFill : FavIconEmpty;

  let productImages = [];
  if (product.images.length) {
    product.images.forEach((imgName) => {
      let productImage = {
        uri: getImageUrl(product._id, imgName, getUniqueId()),
        url: getImageUrl(product._id, imgName, getUniqueId()),
      };
      productImages.push(productImage);
    });
  } else {
    productImages.push(Placeholder);
  }

  useEffect(() => {
    let filter = {product: params._id};

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
          <Text>{params.category.name}</Text>
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

  const renderCarouselItemWide = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('pressed');
          console.log(index);
          setShowModal(true);
        }}>
        <Image
          source={item}
          style={{height: windowWidth, width: windowWidth}}
        />
      </TouchableOpacity>
    );
  };

  const renderCarouselItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('pressed');
          console.log(index);
          setShowModal(true);
        }}>
        <Image
          source={item}
          style={{height: (windowWidth / 3) * 2, width: (windowWidth / 3) * 2}}
        />
      </TouchableOpacity>
    );
  };

  const renderImagesCarousel = (type) => {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={productImages}
        renderItem={
          type === 'wide' ? renderCarouselItemWide : renderCarouselItem
        }
        sliderWidth={type === 'wide' ? windowWidth : (windowWidth / 3) * 2}
        itemWidth={type === 'wide' ? windowWidth : (windowWidth / 3) * 2}
        onSnapToItem={(index) => setActiveIndex((activeIndex = index))}
        firstItem={activeIndex}
      />
    );
  };

  const renderHashtagModal = () => {
    if (showHashtagModal) {
      return (
        <Modal visible={true} transparent={true}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}>
            <View
              style={{
                width: '90%',
                borderWidth: 1,
                borderColor: 'grey',
                backgroundColor: 'white',
                borderRadius: 40,
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  zIndex: 200,
                }}
                onPress={() => {
                  console.log('close hashtag modal');
                  setShowHashtagModel(false);
                }}>
                <Image
                  source={CloseImage}
                  style={{tintColor: 'black', width: 30, height: 30}}
                />
              </TouchableOpacity>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  zIndex: 100,
                }}>
                <Text style={{fontSize: 24}}>{selectedHashtag.name}</Text>
                <Text style={{marginTop: 20, alignSelf: 'flex-start'}}>
                  {selectedHashtag.description}
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    borderRadius: 20,
                    backgroundColor: '#e3f5fa',
                    marginTop: 30,
                  }}
                  onPress={() => {
                    setShowHashtagModel(false);
                    setSelectedHashtag(null);
                    navigation.pop();
                    dispatch(updateSelectedHashtags(selectedHashtag.name));
                  }}>
                  <Text>Related Products</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    }
  };

  const renderHashtag = (hashtag, index) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
          paddingHorizontal: 15,
          backgroundColor: hashtag.isHighlighted ? '#F8CBAD' : '#D3D3D3',
          margin: 5,
          marginRight: 10,
          borderRadius: 7,
        }}
        key={index}
        onPress={() => {
          setShowHashtagModel(true);
          setSelectedHashtag(hashtag);
        }}>
        <Text>{hashtag.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderHashtags = () => {
    return params.hashtags.map((hashtag, index) => {
      console.log(hashtag);
      return renderHashtag(hashtag, index);
    });
  };

  const renderDetails = () => {
    return (
      <View>
        <Text style={styles.textDetails}>{params.name}</Text>
        <Text style={styles.textDetails} style={styles.textDetails}>
          Brand: {params.brand}
        </Text>
        <Text style={styles.textDetails}>Origin: {params.origin}</Text>
        <Text style={styles.textDetails}>Size: {params.size}</Text>
        <Text style={styles.textDetails}>
          Price:{' '}
          {params.price.length === 2
            ? `$${params.price[0]} - $${params.price[1]}`
            : params.price[0]}
        </Text>
      </View>
    );
  };

  const renderFeedback = () => {
    return (
      <View style={{marginTop: 10, marginBottom: 10}}>
        <StarsFeedback stars={starsFeedback}></StarsFeedback>
      </View>
    );
  };

  const renderBottomButton = (image, action) => {
    let tintColor = image === FavIcon ? '#d65645' : '#50AAE6';

    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}
        onPress={action}>
        <Image source={image} style={{height: 25, width: 25, tintColor}} />
      </TouchableOpacity>
    );
  };

  const renderImageModal = () => {
    if (showModal && product.images.length > 0)
      return (
        <Modal visible={true} transparent={false}>
          <View
            style={{
              backgroundColor: 'black',
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
                top: 50,
                right: 30,
              }}
              onPress={() => {
                setShowModal(false);
              }}>
              <Image
                source={CloseImage}
                style={{tintColor: 'white', width: 40, height: 40}}
              />
            </TouchableOpacity>
            <View style={{}}>{renderImagesCarousel('wide')}</View>
          </View>
        </Modal>
      );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        {renderTopItems()}
        <View
          style={{
            backgroundColor: '#E5F4F9',
            borderRadius: 50,
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                marginTop: 20,
                width: 300,
                alignItems: 'center',
              }}>
              {renderImagesCarousel('narrow')}
              {renderCarouselPagination()}
            </View>
            <View
              style={{
                marginHorizontal: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                flexGrow: 1,
              }}>
              {renderHashtags()}
            </View>
          </View>

          <View
            style={{
              marginVertical: 10,
              marginHorizontal: 25,
            }}>
            {renderDetails()}
            {renderFeedback()}
          </View>

          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              {renderBottomButton(ShareImage, () => {
                console.log('pressed');
              })}
              {renderBottomButton(EditImage, () => {
                navigation.navigate('Feedback', {product});
                console.log('feedback');
              })}
              {renderBottomButton(CompareImage, () => {
                navigation.navigate('Comparison', {product});
                console.log(comparisonProducts);
                if (comparisonProducts.includes(product) === false) {
                  dispatch(updateComparison([...comparisonProducts, product]));
                }
              })}
              {renderBottomButton(FavIcon, () => {
                if (isFavorite) {
                  dispatch(removeFromFavorites(getUniqueId(), product._id));
                } else {
                  dispatch(addToFavorites(getUniqueId(), product._id));
                }
                console.log('favIcon');
              })}
            </View>
          </View>
        </View>
      </View>
      <FloatingButton navigation={navigation} />
      {renderImageModal()}
      {renderHashtagModal()}
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  textDetails: {
    margin: 2,
    color: '#777777',
    fontSize: 16,
  },
});
