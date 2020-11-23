import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-gesture-handler';

const Home = ({navigation, route}) => {
  const {params} = route;
  const product = params.product;

  let [brandName, setBrandName] = useState(product.brand || '');
  let [productName, setProductName] = useState(product.name || '');
  let [origin, setOrigin] = useState(product.origin || '');
  let [color, setColor] = useState(product.colour || '');
  let [size, setSize] = useState(product.size || '');

  const categories = useSelector((state) => state.filtersReducer.categories);
  const selectedCategory = product.category.name || categories[0];
  const dropDownCategories = categories.map((cat) => {
    return {label: cat, value: cat};
  });

  useEffect(() => {
    console.log('show feedback');
    //console.log(product);
  }, []);

  renderCategorySelector = () => {
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

  renderTextInput = (label, item, modifier) => {
    return (
      <View>
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

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Product Category</Text>
      {renderCategorySelector()}
      {renderTextInput('Brand', brandName, setBrandName)}
      {renderTextInput('Product Name', productName, setProductName)}
      {renderTextInput('Origin', origin, setOrigin)}
      {renderTextInput('Color', color, setColor)}
      {renderTextInput('Size', size, setSize)}
      <Text>Price</Text>
      <Text>Hashtags</Text>
      <Text>Photo</Text>
      <Text>Remarks</Text>
      <Text>Rating</Text>
    </View>
  );
};

export default Home;
