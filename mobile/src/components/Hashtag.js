import {View, Text} from 'react-native';

import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Hashtag = ({hashtag}) => {
  let [isSelected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 15,
        margin: 3,
        borderRadius: 7,
        backgroundColor: isSelected ? '#D3D3D3' : '#EBEBEB',
      }}
      onPress={() => {
        setSelected(!isSelected);
      }}>
      <Text>{hashtag}</Text>
    </TouchableOpacity>
  );
};

module.exports = Hashtag;
