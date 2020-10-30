import React, {useState, useEffect} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCategories,
  updateCategory,
} from '../redux/actions/categoryActions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const CategorySelector = (props) => {
  const windowWidth = useWindowDimensions().width;

  const categories = useSelector((state) => state.categoryReducer.categories);
  const category = useSelector(
    (state) => state.categoryReducer.selectedCategory,
  );
  const dispatch = useDispatch();

  console.log(categories);

  useEffect(() => {
    console.log('once');
    dispatch(updateCategories());
  }, []);

  const renderCategories = () => {
    return categories.map((category) => {
      return renderCategory(category);
    });
  };

  const renderCategory = (text) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 35,
          height: windowWidth / 4,
          width: (windowWidth / 4) * 3,
          borderRadius: 20,
        }}
        onPress={() => {
          dispatch(updateCategory(text));
          props.navigation.navigate('Home');
        }}>
        <Text style={{fontSize: 24, color: '#adadad'}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#e5f3f9',
        paddingBottom: 80,
      }}>
      <Text style={{marginTop: 40, color: '#5176e5', fontSize: 28}}>
        Searching for?
      </Text>
      <View>{renderCategories()}</View>
    </ScrollView>
  );
};

export default CategorySelector;
