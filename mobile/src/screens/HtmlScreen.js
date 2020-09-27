import React from 'react';
import {View, Text} from 'react-native';
import useHelp from '../hooks/useHelp';

export default function HtmlScreen({navigation}) {
  const params = navigation.state.params;
  const {isLoading, data} = useHelp('terms');

  return (
    <View>
      <Text>{data.page}</Text>
    </View>
  );
}
