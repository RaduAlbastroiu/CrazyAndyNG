import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-gesture-handler';
import {getHashtagsForFilter} from '../redux/actions/hashtagActions';

const Home = ({navigation, route}) => {
  const {params} = route;
  const product = params !== undefined ? params.product : {};

  let [hashtags, setHashtags] = useState(
    product.hashtags !== undefined
      ? product.hashtags.map((h) => {
          return h.name;
        })
      : [],
  );
  let [searchHashtag, setSearchHashtag] = useState('');
  let [foundHashtags, setFoundHashtags] = useState([]);
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

    // need to fix this
    getFoundHashtags();
  });

  const getFoundHashtags = async () => {
    let foundHashtags = await getHashtagsForFilter({
      categoryName: selectedCategory,
      name: searchHashtag,
    });

    if (foundHashtags !== undefined) {
      setFoundHashtags(
        foundHashtags
          .map((h) => h.name)
          .filter((h) => hashtags.includes(h) === false),
      );
    }
  };

  const renderCategorySelector = () => {
    return (
      <DropDownPicker
        items={dropDownCategories}
        defaultValue={selectedCategory}
        containerStyle={{
          marginLeft: 5,
          height: 40,
          width: 100,
          borderRadius: 10,
        }}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={(item) => {
          dispatch(updateCategory(item.value));
        }}
      />
    );
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

  const renderHashtag = (hashtag, index, onPress) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
          paddingHorizontal: 15,
          backgroundColor: hashtag.isHighlighted ? '#F8CBAD' : '#D3D3D3',
          marginTop: 5,
          marginRight: 10,
          borderRadius: 7,
        }}
        key={index}
        onPress={() => onPress(hashtag)}>
        <Text>{hashtag}</Text>
      </TouchableOpacity>
    );
  };

  const renderHashtags = (hashtags, onPress) => {
    return hashtags.map((hashtag, index) => {
      return renderHashtag(hashtag, index, onPress);
    });
  };

  const renderCurrentHashtags = () => {
    if (hashtags.length > 0) {
      return (
        <View style={{margin: 5}}>
          <Text>Current Hashtags</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexGrow: 1,
              marginTop: 5,
            }}>
            {renderHashtags(hashtags, (hashtag) => {
              let index = hashtags.indexOf(hashtag);
              if (index !== -1) {
                hashtags.splice(index, 1);
              }
            })}
          </View>
        </View>
      );
    }
  };

  const renderAddHashtags = () => {
    console.log('found');
    console.log(foundHashtags);

    if (foundHashtags.length > 0) {
      return (
        <View style={{margin: 5}}>
          <Text>Found Hashtags</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexGrow: 1,
              marginTop: 5,
            }}>
            {renderHashtags(foundHashtags, (h) => {
              hashtags.push(h);
              setHashtags(hashtags);
            })}
          </View>
        </View>
      );
    }
  };

  const renderAddHashtag = () => {
    return (
      <View style={{margin: 5}}>
        <Text>#hashtag</Text>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'gray',
            marginTop: 5,
            padding: 5,
          }}
          value={searchHashtag}
          placeholder={'Search for hashtag'}
          onChangeText={async (text) => {
            setSearchHashtag(text);
            getFoundHashtags();
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 10}}>
        <Text style={{marginBottom: 5}}>Product Category</Text>
        {renderCategorySelector()}
      </View>
      {renderTextInput('Brand', brandName, setBrandName)}
      {renderTextInput('Product Name', productName, setProductName)}
      {renderPrice()}
      {renderTextInput('Origin', origin, setOrigin)}
      {renderTextInput('Color', color, setColor)}
      {renderTextInput('Size', size, setSize)}
      {renderAddHashtag()}
      {renderAddHashtags()}
      {renderCurrentHashtags()}
      <Text>Photo</Text>
      <Text>Remarks</Text>
      <Text>Rating</Text>
      <TouchableOpacity
        style={{
          padding: 20,
          paddingHorizontal: 30,
          borderRadius: 20,
          backgroundColor: '#e3f5fa',
          marginTop: 30,
          marginBottom: 40,
          alignSelf: 'center',
        }}>
        <Text>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
