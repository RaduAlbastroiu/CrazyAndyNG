import {Text} from 'react-native';

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateSelectedHashtags} from '../redux/actions/filtersActions';

const Hashtag = ({hashtag}) => {
  let [isSelected, setSelected] = useState(false);

  const dispatch = useDispatch();

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
        isSelected = setSelected(!isSelected);
        dispatch(updateSelectedHashtags(hashtag));
      }}>
      <Text>{hashtag}</Text>
    </TouchableOpacity>
  );
};

module.exports = Hashtag;
