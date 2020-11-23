import {Text} from 'react-native';

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateSelectedHashtags} from '../redux/actions/filtersActions';

const Hashtag = ({hashtag}) => {
  const selectedHashtags = useSelector(
    (state) => state.filtersReducer.selectedHashtags,
  );

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
        backgroundColor: selectedHashtags.includes(hashtag)
          ? '#D3D3D3'
          : '#EBEBEB',
      }}
      onPress={() => {
        dispatch(updateSelectedHashtags(hashtag));
      }}>
      <Text>{hashtag}</Text>
    </TouchableOpacity>
  );
};

module.exports = Hashtag;
