import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import HorizontalPhotosList from '../components/HorizontalPhotosList';
import SimpleFeedback from '../components/SimpleFeedback';
import HashtagsList from '../components/HashtagList';
import {TextInput} from 'react-native-gesture-handler';
import {getHashtagsForFilter} from '../redux/actions/hashtagActions';
import {getImageUrl} from '../helpers/apiRoutes';
import {getUniqueId} from 'react-native-device-info';
import addIcon from '../../src/assets/add.png';

const Feedback = ({navigation, route}) => {
  const {params} = route;
  const product = params !== undefined ? params.product : {};
  const onFeedbackSend =
    params !== undefined ? params.onFeedbackSend : () => {};

  let [brandName, setBrandName] = useState(product.brand || '');
  let [productName, setProductName] = useState(product.name || '');
  let [minPrice, setMinPrice] = useState(
    product.price !== undefined ? product.price[0].toString(10) : '0',
  );
  let [maxPrice, setMaxPrice] = useState(
    product.price !== undefined
      ? product.price.length === 1
        ? product.price[0].toString(10)
        : product.price[1].toString(10)
      : '0',
  );
  let [origin, setOrigin] = useState(product.origin || '');
  let [color, setColor] = useState(product.colour || '');
  let [size, setSize] = useState(product.size || '');

  const categories = useSelector((state) => state.filtersReducer.categories);
  const selectedCategory =
    product.category !== undefined ? product.category.name : categories[0];
  const dropDownCategories = categories.map((cat) => {
    return {label: cat, value: cat};
  });

  useEffect(() => {
    console.log('show feedback');

    if (product.images != undefined) {
      product.images.forEach((image) =>
        console.log(getImageUrl(product._id, image, getUniqueId())),
      );
      console.log(product.images);
    }
  }, []);

  const renderCategorySelector = () => {
    return <Text style={{fontSize: 18}}>{selectedCategory}</Text>;
  };

  const renderTextInput = (label, item, modifier) => {
    return (
      <View style={{margin: 5}}>
        <Text>{label}</Text>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'gray',
            padding: 5,
          }}
          value={item}
          placeholder={item}
          onChangeText={(text) => {
            modifier(text);
          }}
        />
      </View>
    );
  };

  const renderPrice = () => {
    return (
      <View style={{margin: 5}}>
        <Text>Price</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Min: </Text>
            <TextInput
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'gray',
                width: 100,
                padding: 5,
              }}
              value={minPrice}
              placeholder={minPrice}
              onChangeText={(text) => {
                setMinPrice(text);
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text>Max: </Text>
            <TextInput
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'gray',
                width: 100,
                padding: 5,
              }}
              value={maxPrice}
              placeholder={maxPrice}
              onChangeText={(text) => {
                setMaxPrice(text);
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingRight: 15,
      }}>
      <View style={{margin: 5, marginBottom: 15}}>
        <Text style={{marginBottom: 10}}>Product Category</Text>
        {renderCategorySelector()}
      </View>
      {renderTextInput('Brand', brandName, setBrandName)}
      {renderTextInput('Product Name', productName, setProductName)}
      {renderPrice()}
      {renderTextInput('Origin', origin, setOrigin)}
      {renderTextInput('Color', color, setColor)}
      {renderTextInput('Size', size, setSize)}
      <HashtagsList product={product} selectedCategory={selectedCategory} />
      <HorizontalPhotosList product={product} />
      <SimpleFeedback />
      <TouchableOpacity
        style={{
          padding: 20,
          paddingHorizontal: 30,
          borderRadius: 20,
          backgroundColor: '#e3f5fa',
          marginTop: 30,
          marginBottom: 60,
          alignSelf: 'center',
        }}
        onPress={() => {
          navigation.pop();
          onFeedbackSend();
        }}>
        <Text>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 200,
    marginRight: 5,
    backgroundColor: 'lightgrey',
  },
});
