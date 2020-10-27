import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Hashtag from './Hashtag';

const Hashtags = ({hashtags}) => {
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
