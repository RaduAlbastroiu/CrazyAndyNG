import React from 'react';
import {composeInitialProps} from 'react-i18next';
import {View, Text} from 'react-native';

export default function HtmlScreen({navigation}) {
  const params = navigation.state.params;

  return (
    <View>
      <Text>{params.coae}</Text>
    </View>
  );
}
