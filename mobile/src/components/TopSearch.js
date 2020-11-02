import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCategories,
  updateCategory,
} from '../redux/actions/categoryActions';
import React, {useState, useEffect} from 'react';
import ProductCatalog from '../screens/ProductCatalog';

const TopSearch = ({navigation}) => {
  let [searchText, setSearchText] = useState('');

  const categories = useSelector((state) => state.categoryReducer.categories);
  const selectedCategory = useSelector(
    (state) => state.categoryReducer.selectedCategory,
  );
  const dropDownCategories = categories.map((cat) => {
    return {label: cat, value: cat};
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCategories());
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

  renderSearch = () => {
    return (
      <View
        style={{
          margin: 5,
          padding: 5,
          flexGrow: 1,
        }}>
        <TextInput
          style={{
            height: 40,
            backgroundColor: '#bec6ce',
            borderRadius: 10,
            paddingLeft: 12,
          }}
          onChangeText={(text) => setSearchText(text)}
          placeholder={'type to search'}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 0,
        backgroundColor: 'white',
        zIndex: 1000,
      }}>
      {renderCategorySelector()}
      {renderSearch()}
      <TouchableOpacity
        style={{marginRight: 10}}
        onPress={() => {
          navigation.navigate('ProductCatalog');
        }}>
        <Text style={{color: 'blue'}}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopSearch;
