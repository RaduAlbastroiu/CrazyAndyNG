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
import Hashtag from './Hashtag';
import {updateHashtags} from '../redux/actions/filtersActions';

const renderHashtags = (hashtags) => {
  return hashtags.map((hashtag, index) => {
    return <Hashtag hashtag={hashtag} />;
  });
};

const Hashtags = (props) => {
  console.log(props);
  const hashtags = useSelector((state) => state.hashtagsReducer.hashtags);
  const selectedCategory = useSelector(
    (state) => state.categoryReducer.selectedCategory,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHashtags({categoryName: selectedCategory}));
  }, [selectedCategory]);

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
      {renderHashtags(hashtags)}
    </ScrollView>
  );
};

export default Hashtags;
