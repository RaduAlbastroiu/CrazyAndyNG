import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCategories,
  updateCategory,
} from '../redux/actions/filtersActions';
import React, {useState, useEffect} from 'react';
import {updateSearchText} from '../redux/actions/filtersActions';

const TopSearch = () => {
  const searchText = useSelector((state) => state.filtersReducer.searchText);
  const categories = useSelector((state) => state.filtersReducer.categories);
  const selectedCategory = useSelector(
    (state) => state.filtersReducer.selectedCategory,
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
        defaultValue={'Masks'}
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
          value={searchText}
          onChangeText={(text) => {
            dispatch(updateSearchText(text));
          }}
          placeholder={'type to search'}
        />
      </View>
    );
  };

  renderCancelButton = () => {
    console.log('.....');
    console.log(searchText);
    if (searchText && searchText.length) {
      return (
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => {
            dispatch(updateSearchText(''));
          }}>
          <Text style={{color: 'blue'}}>Cancel</Text>
        </TouchableOpacity>
      );
    }
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
      {renderCancelButton()}
    </View>
  );
};

export default TopSearch;
