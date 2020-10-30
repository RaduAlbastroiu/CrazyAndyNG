import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {getHashtags} from '../redux/actions/hashtagsActions';
import Hashtag from './Hashtag';

const Hashtags = () => {
  const hashtags = useSelector((state) => state.hashtagsReducer.hashtags);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHashtags());
  }, []);

  const renderHashtags = () => {
    return hashtags.map((hashtag, index) => {
      return <Hashtag hashtag={hashtag} />;
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {renderHashtags()}
    </ScrollView>
  );
};

export default Hashtags;
