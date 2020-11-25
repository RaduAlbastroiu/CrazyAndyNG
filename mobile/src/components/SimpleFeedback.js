import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Linking,
} from 'react-native';
import starEmpty from '../assets/star-empty.png';

const SimpleFeedback = () => {
  let [remarks, setRemarks] = useState('');

  const renderStars = () => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          source={starEmpty}
          style={{width: 40, height: 40, marginRight: 10}}
        />,
      );
    }

    return stars;
  };

  return (
    <View style={{margin: 5}}>
      <View style={{}}>
        <Text>Remarks</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => setRemarks(text)}
          style={{
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'lightgrey',
            height: 80,
          }}></TextInput>
      </View>
      <View style={{marginTop: 10}}>
        <Text>Rating</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {renderStars()}
        </View>
      </View>
    </View>
  );
};

export default SimpleFeedback;
