import React, {useState, useEffect} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tutorial = (params) => {
  const windowWidth = useWindowDimensions().width;

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
      <View>
        {renderCategory('Masks')}
        {renderCategory('Sanitizers')}
        {renderCategory('Others')}
      </View>
    </View>
  );
};

export default Tutorial;
