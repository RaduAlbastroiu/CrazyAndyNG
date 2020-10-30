import React, {useState, useEffect} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateCategories} from '../redux/actions/categoryActions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tutorial = (props) => {
  const windowWidth = useWindowDimensions().width;

  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  console.log(categories);

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
        }}>
        <Text style={{fontSize: 24, color: '#adadad'}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#e5f3f9',
      }}>
      <Text style={{marginTop: 30, color: '#5176e5', fontSize: 28}}>
        Searching for?
      </Text>
      <View>{renderCategories()}</View>
      <TouchableOpacity
        style={{marginTop: 20, padding: 20, backgroundColor: 'white'}}
        onPress={() => {
          dispatch(updateCategories());
        }}>
        <Text>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tutorial;
