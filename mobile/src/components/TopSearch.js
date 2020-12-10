import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCategories,
  updateCategory,
} from '../redux/actions/filtersActions';
import React, {useState, useEffect} from 'react';
import {updateSearchText} from '../redux/actions/filtersActions';
import {setShowBarcode} from '../redux/actions/navigationActions';

const TopSearch = ({isSelectable, onDone}) => {
  const searchText = useSelector((state) => state.filtersReducer.searchText);
  const categories = useSelector((state) => state.filtersReducer.categories);
  const selectedCategory = useSelector(
    (state) => state.filtersReducer.selectedCategory,
  );

  const dropDownCategories = categories.map((cat) => {
    return {label: cat, value: cat};
  });

  const dispatch = useDispatch();

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
            dispatch(setShowBarcode(false));
          }}
          onFocus={() => {
            dispatch(setShowBarcode(false));
          }}
          placeholder={'type to search'}
        />
      </View>
    );
  };

  renderCancelButton = () => {
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

  renderDoneButton = () => {
    if (isSelectable === true) {
      return (
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: '#e5f4f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={onDone}>
          <Text>Done</Text>
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
      {renderDoneButton()}
      {renderCancelButton()}
    </View>
  );
};

export default TopSearch;
