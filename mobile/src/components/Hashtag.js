import {Text} from 'react-native';

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateHashtags} from '../redux/actions/hashtagsActions';

const Hashtag = ({hashtag}) => {
  let [isSelected, setSelected] = useState(false);
  const hashtags = useSelector((state) => state.hashtagsReducer.hashtags);

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
        dispatch(
          updateHashtags(
            {name: hashtag.name, isSelected: !isSelected},
            hashtags,
          ),
        );
        setSelected(!isSelected);
      }}>
      <Text>{hashtag.name}</Text>
    </TouchableOpacity>
  );
};

module.exports = Hashtag;
