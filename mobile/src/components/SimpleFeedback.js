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
import starFull from '../assets/star-full.png';

const SimpleFeedback = () => {
  let [remarks, setRemarks] = useState('');
  let [activeStars, setActiveStars] = useState(0);

  const renderStars = () => {
    let stars = [1, 2, 3, 4, 5];
    return stars.map((star) => (
      <TouchableOpacity
        onPress={() => {
          setActiveStars(star);
          console.log('more pressed', star);
        }}>
        <Image
          source={activeStars >= star ? starFull : starEmpty}
          style={{width: 32, height: 32, marginRight: 10}}
        />
      </TouchableOpacity>
    ));
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
            height: 80,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'gray',
          }}></TextInput>
      </View>
      <View style={{marginTop: 15}}>
        <Text>Rating</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {renderStars()}
        </View>
      </View>
    </View>
  );
};

export default SimpleFeedback;
