import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Alert,
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
  let [brandNameColor, setBrandNameColor] = useState('gray');
  let [productName, setProductName] = useState(product.name || '');
  let [productNameColor, setProductNameColor] = useState('gray');
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
  let [originColor, setOriginColor] = useState('gray');
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

  const renderTextInput = (label, placeholder, item, modifier, borderColor) => {
    return (
      <View style={{margin: 5}}>
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: borderColor,
            padding: 5,
          }}
          value={item}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
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
        <Text style={{fontWeight: 'bold'}}>Price*</Text>
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

  const fieldValidation = () => {
    if (origin === '') {
      setOriginColor('red');
      return false;
    } else {
      setOriginColor('gray');
    }
    if (productName === '') {
      setProductNameColor('red');
      return false;
    } else {
      setProductNameColor('gray');
    }
    if (brandName === '') {
      setBrandNameColor('red');
      return false;
    } else {
      setBrandNameColor('gray');
    }
    return true;
  };

  const sendFeedback = () => {
    const valid = fieldValidation();

    if (valid) {
      Alert.alert('Feedback', 'Are you sure you want to submit feedback?', [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('cancel');
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            navigation.pop();
            onFeedbackSend();
          },
        },
      ]);
    }
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
        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
          Product Category
        </Text>
        {renderCategorySelector()}
      </View>
      {renderTextInput(
        'Brand*',
        `Whole company name, input "NA" if info cannot be found`,
        brandName,
        setBrandName,
        brandNameColor,
      )}
      {renderTextInput(
        'Product Name*',
        `Whole name, input "NA" if info cannot be found`,
        productName,
        setProductName,
        productNameColor,
      )}
      {renderPrice()}
      {renderTextInput(
        'Origin*',
        `input "NA" if info cannot be found`,
        origin,
        setOrigin,
        originColor,
      )}
      {renderTextInput(
        'Color',
        `Highly recommended to share related image with us under 'photos'`,
        color,
        setColor,
        'gray',
      )}
      {renderTextInput(
        'Size',
        `Eg L, M, S, 175mm x 95mm, 14.5X9.5cm`,
        size,
        setSize,
        'gray',
      )}
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
        onPress={sendFeedback}>
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
