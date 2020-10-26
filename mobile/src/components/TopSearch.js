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

const TopSearch = ({route, navigation}) => {
  let [category, setCategory] = useState('mask');
  let [searchText, setSearchText] = useState('');

  renderCategorySelector = () => {
    return (
      <DropDownPicker
        items={[
          {
            label: 'Mask',
            value: 'mask',
          },
          {
            label: 'Tv',
            value: 'tv',
          },
        ]}
        defaultValue={category}
        containerStyle={{
          marginLeft: 5,
          height: 40,
          width: 100,
          borderRadius: 10,
        }}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={(item) => {
          setCategory(item.value);
        }}
      />
    );
  };

  renderSearch = () => {
    return (
      <View
        style={{
          margin: 5,
          padding: 5,
          flexGrow: 1,
        }}>
        <TextInput
          style={{
            height: 40,
            backgroundColor: '#bec6ce',
            borderRadius: 10,
            paddingLeft: 12,
          }}
          onChangeText={(text) => setSearchText(text)}
          placeholder={'type to search'}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 0,
        backgroundColor: 'white',
      }}>
      {renderCategorySelector()}
      {renderSearch()}
    </View>
  );
};

export default TopSearch;
